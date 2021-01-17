const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const { merge } = require("webpack-merge");
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return merge(
    {
      output: { filename: "bundle.js" },
      mode,
      module: {
        rules: [
          {
            test: /\.jpg$/,
            use: [{ loader: "url-loader", options: { limit: 5000 } }],
          },
        ],
      },
      plugins: [new HtmlWebpackPlugin(), new webpack.ProgressPlugin()],
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
