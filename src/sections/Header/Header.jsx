import { css } from "@amory/style"
import * as PropTypes from "prop-types"
import React from "react"

import { styles } from "./Header.css.js"

export const Header = ({
  "as": Element = "div",
  children,
  className,
  style = {},
  ...props
}) =>
  (
    <Element
      className={css ([styles.element, style], className)}
      {...props}
    >
      {children}
    </Element>
  )

Header.displayName = "Header"

Header.propTypes = {
  "as": PropTypes.elementType,
  "children": PropTypes.node,
  "className": PropTypes.string,
  "style": PropTypes.object
}
