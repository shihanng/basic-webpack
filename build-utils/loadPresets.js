const { merge } = require("webpack-merge");

const applyPresets = (env) => {
  const { presets } = env;
  if (!presets) {
    return [];
  }

  const mergedPresets = [].concat(...[presets]);
  const mergedConfigs = mergedPresets.map((presetName) => {
    return require(`./presets/webpack.${presetName}`)(env);
  });

  return merge({}, ...mergedConfigs);
};

module.exports = applyPresets;
