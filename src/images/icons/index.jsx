import { merge } from "@amory/style"
import { get } from "lodash"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"

import { CircleIcon } from "./CircleIcon.jsx"

const Icons = {
  "circle": CircleIcon
}

export const icon = ({
  name = "circle",
  selector = "::before",
  style = {},
  ...props
} = {}) => {
  const Element = get (Icons, name, Icons.circle)

  return merge ({
    [selector]: {
      "backgroundImage": `url("data:image/svg+xml,${
        encodeURIComponent (
          renderToStaticMarkup (<Element {...props} />)
        )
          .replace (/%[\dA-F]{2}/gu, (match) => {
            switch (match) {
              case "%20": return " "
              case "%3D": return "="
              case "%3A": return ":"
              case "%2F": return "/"
              default: return match.toLowerCase ()
            }
          })
      }")`,
      "backgroundRepeat": "no-repeat",
      "content": "' '",
      "display": "inline-block",
      "minHeight": 16,
      "minWidth": 16,
      ...style
    }
  })
}
