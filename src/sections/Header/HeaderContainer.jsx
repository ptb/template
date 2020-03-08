import React from "react"

import { HeaderView as Element } from "./HeaderView.jsx"

export const HeaderContainer = ({
  ...props
}) =>
  (
    <Element
      {...props}
    />
  )

HeaderContainer.displayName = "HeaderContainer"

HeaderContainer.propTypes = {}
