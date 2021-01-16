const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    output: { filename: "bundle.js" },
    mode,
    plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
  };
};
