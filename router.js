import { readFileSync } from "fs"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

import KoaRouter from "@koa/router"

export const router = new KoaRouter ()
  .get ("/apple-touch-icon-precomposed.png", async (ctx) => {
    ctx.type = "image/png"
    ctx.body = readFileSync (
      resolve (
        dirname (fileURLToPath (import.meta.url)),
        "src",
        "static",
        "apple-touch-icon-precomposed.png"
      )
    )
  })
  .get ("/favicon.ico", async (ctx) => {
    ctx.type = "image/x-icon"
    ctx.body = readFileSync (
      resolve (
        dirname (fileURLToPath (import.meta.url)),
        "src",
        "static",
        "favicon.ico"
      )
    )
  })
  .get ("/favicon.svg", async (ctx) => {
    ctx.type = "image/svg+xml"
    ctx.body = readFileSync (
      resolve (
        dirname (fileURLToPath (import.meta.url)),
        "src",
        "static",
        "favicon.svg"
      )
    )
  })
