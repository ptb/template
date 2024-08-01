import type { Meta, StoryObj } from "@storybook/react"

import { LandingPage } from "./index"

const meta = {
  /** Only required props should be in the default export */
  args: {},
  component: LandingPage,
  tags: ["autodocs"]
  // title: "Sections/LandingPage"
} satisfies Meta<typeof LandingPage>

type Story = StoryObj<typeof meta>

export default meta

/**
  The default look of the Component, only with simple required props.
  We're hiding the panel to allow a full view of the Component.
 */
export const Default: Story = {
  args: {}
}
