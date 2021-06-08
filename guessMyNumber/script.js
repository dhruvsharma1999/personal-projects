"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const checkBtn = document.querySelector(".check");
const resetBtn = document.querySelector(".again");

/* addEventLister 
    1. argument is the type of the event e.g click 
    2. Reaction the the 1st event i.e a function for that action
    3. the function is know as eventhandler

*/

checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // if no number is guessed
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }

  // if guess is right
  else if (guess === secretNum) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector(".number").textContent = secretNum;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    // if current score is more than high score, set highscore to curretn score
    if (score > highScore) {
      highScore = score;
      document.querySelector("hishscore").textContent = highScore;
    }
  }

  // if guess is too high
  else if (guess > secretNum) {
    if (score > 0) {
      document.querySelector(".message").textContent = "Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over, You Lost !";
      document.querySelector(".score").textContent = 0;
    }
  }

  //if guess is too low
  else if (guess < secretNum) {
    if (score <= 0) {
      document.querySelector(".message").textContent = "Game Over You Lost !";
      document.querySelector(".score").textContent = 0;
    } else {
      if (score) document.querySelector(".message").textContent = "Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

resetBtn.addEventListener("click", function () {
  //reseting the score value to 20;
  score = 20;
  //reseting the random number to new random number
  secretNum = Math.trunc(Math.random() * 20) + 1;

  //reseting the message to start guessing
  document.querySelector(".message").textContent = "Start guessing...";
  //reseting the score to initial score i.e 20
  document.querySelector(".score").textContent = score;
  //reseting the number to ? symbol
  document.querySelector(".number").textContent = "?";
  //reseting the guess input value to empty
  document.querySelector(".guess").value = "";
  //reseting the background color
  document.querySelector("body").style.backgroundColor = "#222";
  //reseting the width of the number block
  document.querySelector(".number").style.width = "15rem";
});
