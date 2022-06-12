const commonPaths = require("./path");
const webpack = require("webpack");
const pnpWebpackPlugins = require("pnp-webpack-plugin");

module.exports = {
  entry: commonPaths.entryPath,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(js|jsx)?$/,
        use: "babel-loader",
        exclude: [/node_modules/, /public/],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".mjs", ".css"],
    plugins: [pnpWebpackPlugins],
  },
  resolveLoader: {
    plugins: [pnpWebpackPlugins.moduleLoader(module)],
  },
  plugins: [new webpack.ProgressPlugin()],
};
