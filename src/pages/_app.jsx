import { getStyleElement, getStyles } from "@amory/style"
import { get } from "lodash"
import App from "next/app"
import React from "react"

export default class extends App {
  static async getInitialProps ({ Component, ctx, router }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps (ctx)
      : {}

    return {
      pageProps,
      "query": get (router, "query")
    }
  }

  constructor (props) {
    super (props)

    this.state = {}
  }

  render () {
    const { Component, pageProps, query } = this.props

    if (typeof window !== "undefined") {
      /* global window */
      window.getStyles = getStyles
      window.getStyleElement = getStyleElement
    }

    return (
      <Component
        query={query}
        {...pageProps}
      />
    )
  }
}
