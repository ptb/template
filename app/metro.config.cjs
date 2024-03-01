const { existsSync } = require("node:fs")
const { join, resolve } = require("node:path")

const { getDefaultConfig } = require("@expo/metro-config")
const { FileStore } = require("@expo/metro-config/file-store")
const merge = require("lodash/merge")

const projPath = __dirname
const rootPath = resolve(projPath, "..")

const projModules = resolve(projPath, "node_modules")
const rootModules = resolve(rootPath, "node_modules")

/** @type {import("metro-config").MetroConfig} */
module.exports = merge(getDefaultConfig(projPath), {
  cacheStores: [
    new FileStore({ root: join(projModules, ".cache", "metro") })
  ],
  resolver: {
    disableHierarchicalLookup: true,
    nodeModulesPaths: [
      existsSync(projModules) && projModules,
      existsSync(rootModules) && rootModules
    ].filter(Boolean),
    useWatchman: false
  },
  watchFolders: [
    existsSync(rootPath) && rootPath,
    existsSync(rootModules) && rootModules
  ].filter(Boolean)
})
