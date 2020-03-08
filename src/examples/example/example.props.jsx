import React from "react"

import { Example as Element } from "./example.view.jsx"

export const Example = ({
  ...props
}) => {
  const disabled = false

  return (
    <Element
      disabled={disabled}
      {...props}
    />
  )
}

Example.displayName = "ExampleContainer"

Example.propTypes = {}
