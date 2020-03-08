exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage.startsWith ("develop")) {
    actions.setWebpackConfig ({
      "resolve": {
        "alias": {
          "react-dom": "@hot-loader/react-dom"
        }
      }
    })
  }
}
