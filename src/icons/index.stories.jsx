import { css } from "@amory/style"
import React from "react"

import { icon } from "./index.jsx"

export default {
  "title": "Icons"
}

export const Circle = () =>
  (
    <div
      className={css (
        icon ({
          "color": "rgba(0,0,0,.5)",
          "name": "circle",
          "style": {
            "height": 120,
            "width": 120
          }
        })
      )}
    />
  )
