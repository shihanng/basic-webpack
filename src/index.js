import makeButton from "./button";
import { footer } from "./footer";
import nav from "./nav";
import { makeColorStyle } from "./button-styles";

console.log(nav);

const button = makeButton("A button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
