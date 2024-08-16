/* eslint-disable @typescript-eslint/unbound-method */

import { expect, test } from "@ptb/test"

import { Example } from "./Example"

test("renders the component", async ({ mount }) => {
  const component = await mount(<Example />)

  await expect(component).toContainText("Current color: #fff")

  await component.locator("text=Set Blue").click()
  await expect(component).toContainText("Current color: #0055a4")

  await component.locator("text=Set White").click()
  await expect(component).toContainText("Current color: #fff")

  await component.locator("text=Set Red").click()
  await expect(component).toContainText("Current color: #ef4135")
})
