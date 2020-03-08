import React from "react"
import * as PropTypes from "prop-types"

import { colors } from "../../styles/index.js"

export const CircleIcon = ({
  color = colors.black,
  ...props
}) =>
  (
    <svg
      version="1"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="60"
        cy="60"
        fill={color}
        r="50"
        strokeWidth="4"
      />
    </svg>
  )

CircleIcon.propTypes = {
  "color": PropTypes.string
}
