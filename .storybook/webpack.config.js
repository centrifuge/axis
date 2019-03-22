const resolve = require("path").resolve;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loaders: ["file-loader"],
        include: resolve(__dirname, "../")
      },
      // TODO fix this bit and make storysource plugin work
      {
        test: /\.\/src\/\.(js|jsx)$/,
        loaders: [require.resolve("@storybook/addon-storysource/loader")],
        enforce: "pre"
      }
    ]
  },
  // TODO load custom loader/resolver in order to target src instead of dist and remove source prop from package.json
  resolve: {
    mainFields: ["browser", "module", "main", "source"]
  }
};
