module.exports = ({ mode }) => {
  return {
    output: { filename: "bundle.js" },
    mode,
  };
};
