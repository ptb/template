import { join } from "node:path"

import { options as coverageReportOptions } from "@ptb/test"
import { default as reactPlugin } from "@vitejs/plugin-react"
import { default as vikePlugin } from "vike/plugin"
import { defineConfig } from "vite"
import { default as macroPlugin } from "vite-plugin-babel-macros"

const port = process.env["PORT"] ?? 3000
const type = process.env["TYPE"] ?? ""

const reactOpts = process.env["USE_EMOTION"]
  ? {
      babel: {
        plugins: ["@emotion/babel-plugin"]
      },
      jsxImportSource: "@emotion/react"
    }
  : {}

const srcDir = join(process.cwd(), "src")

/** @type {import("vite").UserConfigFnObject} */
export const getConfig = ({ mode }) => ({
  build: {
    emptyOutDir: true,
    outDir: "www",
    rollupOptions: {
      output: {
        chunkFileNames: join("js", "[name]-[hash].js"),
        entryFileNames: join("js", "[name]-[hash].js")
      }
    },
    sourcemap: mode === "release" ? "hidden" : true
  },
  plugins: [
    reactPlugin(reactOpts),
    macroPlugin(),
    type !== "test" && vikePlugin({ prerender: true })
  ],
  preview: { host: "0.0.0.0", port: Number(port) },
  resolve: { alias: { "@": srcDir } },
  server: { host: "0.0.0.0", port: Number(port) },
  test: {
    coverage: {
      /** @ts-expect-error: utilized by vitest-monocart-coverage */
      coverageReportOptions,
      customProviderModule: "vitest-monocart-coverage",
      enabled: true,
      provider: "custom"
    },
    include: [join("src", "**", "*.unit.?(c|m)[jt]s?(x)")]
  }
})

export const config = getConfig({
  command: "serve",
  mode: "development"
})

export default defineConfig(({ command, mode }) =>
  getConfig({ command, mode })
)
