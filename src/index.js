import makeButton from "./button";
import { bottom, top } from "./footer";
import nav from "./nav";
import { makeColorStyle } from "./button-styles";

console.log(nav);
console.log(top, bottom);
console.log(makeColorStyle("cyan"));

const button = makeButton("A button");
document.body.appendChild(button);
