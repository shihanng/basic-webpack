const makeButton = (name) => {
  const label = `Button: ${name}`;

  const button = document.createElement("button");
  button.innerText = label;

  return button;
};

module.exports = makeButton;
