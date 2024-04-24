"use strict";
const randomArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const button = document.querySelector(".btn");
const color = document.querySelector(".color");
const copybtn = document.querySelector(".copy-icon");

const iconCopy = document.querySelector(".copy-icon");
const tooltip = document.querySelector(".tooltiptext");

button.addEventListener("click", function () {
  let add = "#";
  for (let i = 0; i < 6; i++) {
    add += randomArr[getRandomColor()];
  }
  color.textContent = add;
  document.body.style.backgroundColor = add;
});

function getRandomColor() {
  return Math.floor(Math.random() * randomArr.length);
}

copybtn.addEventListener("click", function () {
  copy();
});

const timer = setInterval(myTimercopy, 1100);
function myTimercopy() {
  tooltip.style.visibility = "hidden";
}

iconCopy.addEventListener("click", function () {
  tooltip.style.visibility = "visible";
});

function copy() {
  const copyText = document.getElementById("color");
  const input = document.createElement("input");
  input.setAttribute("value", copyText.innerText);
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}
