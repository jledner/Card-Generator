/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let numberArray = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suitArray = ["&#9824", "&#9829", "&#9830", "&#9827"];
  let numberIndex = Math.floor(Math.random() * 13);
  let suitIndex = Math.floor(Math.random() * 4);

  document.querySelector(".suit").innerHTML = suitArray[suitIndex];
  document.querySelector(".number").innerHTML = numberArray[numberIndex];
  document.querySelector(".upside-down-suit").innerHTML = suitArray[suitIndex];
  if (suitIndex == 1 || suitIndex == 2) {
    document.querySelector(".suit").style.color = "red";
    document.querySelector(".number").style.color = "red";
    document.querySelector(".upside-down-suit").style.color = "red";
  }
};
