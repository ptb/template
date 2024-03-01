import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  stories: ["../src/**/*.stories.tsx"]
}

export default config
