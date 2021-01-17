import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./button.css";
import Foo from "./foo.ts";
import { footer } from "./footer";
import "./footer.css";
import makeImage from "./image";
import nav from "./nav";
import imageWebpackUrl from "./webpack.jpg";

console.log(nav);
console.log(Foo);

const image = makeImage(imageWebpackUrl);
const button = makeButton("A button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
