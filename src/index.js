import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import { footer } from "./footer";
import "./footer.css";
import nav from "./nav";

console.log(nav);

const button = makeButton("A button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
