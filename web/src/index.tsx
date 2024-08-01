import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { LandingPage } from "@/sections/LandingPage"

import "../public/styles.css"

const rootElement = document.getElementById("root")

if (rootElement && !rootElement.innerHTML) {
  createRoot(rootElement).render(
    <StrictMode>
      <LandingPage />
    </StrictMode>
  )
}
