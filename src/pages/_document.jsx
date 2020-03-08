import { getStyles } from "@amory/style"
import Document, {
  Head,
  Main,
  NextScript
} from "next/document"
import React, { Fragment } from "react"

export default class extends Document {
  static getInitialProps ({ renderPage }) {
    const {
      head,
      styles,
      ...initialProps
    } = renderPage ((App) =>
      (props) =>
        (
          <App {...props} />
        ))

    return {
      ...initialProps,
      "head": (
        <Fragment>
          <meta charSet="utf-8" />
          <meta
            content="width=device-width,initial-scale=1"
            name="viewport"
          />
          {head.slice (2)}
          <link
            href="/favicon.svg"
            rel="icon"
            sizes="any"
            type="image/svg+xml"
          />
        </Fragment>
      ),
      "styles": (
        <Fragment>
          {styles}
          <style
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ "__html": getStyles () }}
            data-creator="@amory/style"
          />
        </Fragment>
      )
    }
  }

  render () {
    return (
      <html
        lang="en"
        xmlns="http://www.w3.org/1999/xhtml"
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
