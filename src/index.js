import _ from "lodash";
import "./style.css";
import Data from "./data.xml";
import Notes from "./data.csv";
import image from "./image.png";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  console.log(Data);
  console.log(Notes);

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  //Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = image;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
