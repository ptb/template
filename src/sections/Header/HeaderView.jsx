import { css } from "@amory/style"
import * as PropTypes from "prop-types"
import React from "react"

import { styles } from "./Header.css.js"

export const HeaderView = ({
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

HeaderView.displayName = "Header"

HeaderView.propTypes = {
  "as": PropTypes.elementType,
  "children": PropTypes.node,
  "className": PropTypes.string,
  "style": PropTypes.object
}
