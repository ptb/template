/** @type {import("@babel/core").ConfigFunction} */
module.exports = ({ cache }) => {
  cache.forever()

  return {
    presets: ["babel-preset-expo"]
  }
}
