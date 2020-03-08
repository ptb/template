const nextBuildId = require ("next-build-id")
const composePlugins = require ("next-compose-plugins")

/* eslint-disable-next-line import/no-extraneous-dependencies */
const bundleAnalyzer = require ("@next/bundle-analyzer") ({
  "enabled": process.env.ANALYZE === "true"
})

const appBuildId = nextBuildId.sync ()

module.exports = composePlugins (
  [
    bundleAnalyzer
  ],
  {
    "devIndicators": {
      "autoPrerender": false,
      "buildActivity": false
    },
    "distDir": "tmp",
    "future": {
      "excludeDefaultMomentLocales": true
    },
    "generateBuildId": () =>
      appBuildId,
    "reactStrictMode": true,
    "webpack": (config, options) => {
      if (!options.isServer && !options.dev) {
        /* eslint-disable no-param-reassign */
        config.optimization.splitChunks.cacheGroups = {
          "babel": {
            "chunks": "all",
            "name": "babel",
            "priority": 2,
            "test": /[\\/]node_modules[\\/](@babel|babel-runtime|core-js|regenerator-runtime)[\\/]/
          },
          "common": {
            "maxInitialRequests": 5,
            "name": "common"
          },
          "react": {
            "chunks": "all",
            "name": "react",
            "priority": 2,
            "test": /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/
          },
          "vendor": {
            "chunks": "all",
            "enforce": true,
            "name": "vendor",
            "priority": 1,
            "test": /node_modules/
          }
        }
      }
      return config
    }
  }
)
