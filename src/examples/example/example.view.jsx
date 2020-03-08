import { css } from "@amory/style"
import * as PropTypes from "prop-types"
import React from "react"

import { styles } from "./example.styles.js"

export const Example = ({
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

Example.displayName = "Example"

Example.propTypes = {
  "as": PropTypes.elementType,
  "children": PropTypes.node,
  "className": PropTypes.string,
  "style": PropTypes.object
}
