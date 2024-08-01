import { dirname, join } from "node:path"

import type { StorybookConfig } from "@storybook/react-vite"

/**
  This function is used to resolve the absolute path of a package.
  It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")))
}

const config: StorybookConfig = {
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions")
  ],
  core: {
    disableTelemetry: true
  },
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },
  stories: ["../src/**/*.stories.[jt]sx"]
}

export default config
