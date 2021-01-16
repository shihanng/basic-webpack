const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const { merge } = require("webpack-merge");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      output: { filename: "bundle.js" },
      mode,
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode)
  );
};
