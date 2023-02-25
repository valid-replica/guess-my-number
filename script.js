"use strict";

const randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No input!";
  }

  // When player wins
  else if (guess === randomNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".highscore").textContent = score;
  }

  // When guess is too high
  else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector("body").style.backgroundColor = "#FF6962";
      document.querySelector(".score").textContent = 0;
    }
  }

  // When guess is too low
  else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector("body").style.backgroundColor = "#FF6962";

      document.querySelector(".score").textContent = 0;
    }
  }
});
