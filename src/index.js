import makeButton from "./button";
import { makeColorStyle } from "./button-styles";
import "./button.css";
import { footer } from "./footer";
import "./footer.css";
import nav from "./nav";
import makeImage from "./image";
import imageWebpackUrl from "./webpack.jpg";

console.log(nav);

const image = makeImage(imageWebpackUrl);
const button = makeButton("A button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(image);
document.body.appendChild(footer);
