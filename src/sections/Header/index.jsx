import React from "react"

import { Header as Element } from "./Header.jsx"

export const Header = ({
  ...props
}) =>
  (
    <Element
      {...props}
    />
  )

Header.displayName = "HeaderContainer"

Header.propTypes = {}
