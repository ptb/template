import { useState } from "react"

export const Example = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fff")

  const handleSetBlue = () => {
    setBackgroundColor("#0055a4")
  }

  const handleSetWhite = () => {
    setBackgroundColor("#fff")
  }

  const handleSetRed = () => {
    setBackgroundColor("#ef4135")
  }

  return (
    <div style={{ backgroundColor }}>
      <h1>Current color: {backgroundColor}</h1>
      <button
        onClick={handleSetBlue}
        type="button"
      >
        Set Blue
      </button>
      <button
        onClick={handleSetWhite}
        type="button"
      >
        Set White
      </button>
      <button
        onClick={handleSetRed}
        type="button"
      >
        Set Red
      </button>
    </div>
  )
}
