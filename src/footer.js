import { blue, red } from "./button-styles";
import "./footer.css";

const top = document.createElement("div");
top.innerText = "Footer's top";
top.style = red;

const bottom = document.createElement("div");
bottom.innerText = "Footer's bottom";
bottom.style = blue;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);
export { top, bottom, footer };
