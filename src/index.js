import "normalize.css";
import "./style.css";
import Cat from "./cat.jpg";

console.log("Hello, world!");
const catImage = new Image();
catImage.src = Cat;
document.querySelector("body").appendChild(catImage);
