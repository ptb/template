import { defineConfig, devices } from "@playwright/test"

const __dirname = new URL("../..", import.meta.url).pathname
const baseURL = "http://localhost:3000"
const testDir = `${__dirname}/e2e`

export default defineConfig({
  forbidOnly: !!process.env["CI"],
  fullyParallel: true,
  outputDir: `${testDir}/.results`,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] }
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] }
    },
    {
      name: "ios",
      use: { ...devices["iPhone 14 Pro"] }
    },
    {
      name: "android",
      use: { ...devices["Pixel 7"] }
    }
  ],
  retries: process.env["CI"] ? 2 : 0,
  testDir,
  use: {
    baseURL,
    trace: "on-first-retry"
  },
  webServer: {
    command: "pnpm run start:web",
    reuseExistingServer: !process.env["CI"],
    url: baseURL
  },
  workers: 1
})
