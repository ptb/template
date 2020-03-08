import Koa from "koa"
import next from "next"

import { router } from "./router.js"
import { routes } from "./routes.js"

(async () => {
  try {
    const dev = process.env.NODE_ENV !== "production"
    const port = parseInt (process.env.WEB_PORT || 3000, 10)
    const url = process.env.WEB_URL || "http://localhost:3000"

    const app = next ({ dev })
    const handle = routes.getRequestHandler (app)
    const server = new Koa ()

    await app.prepare ()

    server.use (async (ctx, middleware) => {
      ctx.res.statusCode = 200
      await middleware ()
    })

    server.use (router.routes ())

    server.use (async (ctx) => {
      await handle (ctx.req, ctx.res)
      ctx.respond = false
    })

    server.listen (port, (error) => {
      if (error) {
        throw error
      }

      /* eslint-disable-next-line no-console */
      console.info ("> Ready on %s", url)
    })
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error (error)

    process.exit ()
  }
}) ()
