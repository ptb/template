import React, { useState } from "react"

import { Header as Element } from "./header.view.jsx"

export const Header = ({
  ...props
}) => {
  const [selection, setSelection] = useState ()

  return (
    <Element
      selection={selection}
      setSelection={setSelection}
      {...props}
    />
  )
}

Header.displayName = "HeaderProps"

Header.propTypes = {}
