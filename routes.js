import NextLink from "next/link.js"
import nextRoutes from "next-routes"
import PropTypes from "prop-types"
import React from "react"

const SafeLink = ({
  to,
  ...props
}) =>
  React.createElement (
    NextLink,
    {
      "href": typeof to === "string" ? to : "/",
      ...props
    }
  )

SafeLink.propTypes = {
  "to": PropTypes.string.isRequired
}

export const routes = nextRoutes ({
  "Link": SafeLink
})

export const { Link, Router } = routes
