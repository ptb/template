import { test } from "@ptb/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/example")
})

test("Set blue as background color", async ({ page }) => {
  await page.click("text=Set Blue")
  await page.waitForSelector("text=Current color: #0055a4")
})

test("Set white as background color", async ({ page }) => {
  await page.click("text=Set White")
  await page.waitForSelector("text=Current color: #fff")
})

test("Set red as background color", async ({ page }) => {
  await page.click("text=Set Red")
  await page.waitForSelector("text=Current color: #ef4135")
})
