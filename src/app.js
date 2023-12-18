/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  getRandomCard();
};

function getRandomCard() {
  let num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suits = ["♦", "♥", "♠", "♣"];
  let numIndex = Math.floor(Math.random() * num.length);
  let suitsIndex = Math.floor(Math.random() * suits.length);

  const cardDiv = document.querySelector(".card");
  cardDiv.classList = "card " + suits[suitsIndex];

  const suitElement = suits[suitsIndex];
  const numElement = num[numIndex];

  const header = cardDiv.querySelector(".header-card");
  const footer = cardDiv.querySelector(".footer-card");
  const value = cardDiv.querySelector(".num-card");

  header.textContent = suitElement;
  footer.textContent = suitElement;
  value.textContent = numElement;
}
const button = document.querySelector("button");
button.addEventListener("click", function() {
  getRandomCard();
});

function tenSecondTimer() {
  getRandomCard();
}
setInterval(tenSecondTimer, 10000);
