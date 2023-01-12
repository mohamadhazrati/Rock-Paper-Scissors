"use strict";

const sumPlayer = document.querySelector("#p1");
const sumPc = document.querySelector("#p2");
const rockBT = document.querySelector(".rock.bt");
const paperBT = document.querySelector(".paper.bt");
const scissorsBT = document.querySelector(".scissors.bt");
const plyChoice = document.querySelector("#p3");
const pcChoice = document.querySelector("#p4");
const gameResult = document.querySelector("#p5");

let random = Math.trunc(Math.random() * 3 + 1);
let scorePlayer = 0;
let scorePc = 0;
let playing;

function play() {
  playing = true;
  scorePlayer = 0;
  scorePc = 0;
  sumPlayer.textContent = "0";
  sumPc.textContent = "0";
  plyChoice.textContent = "-";
  pcChoice.textContent = "-";
  gameResult.textContent = "-";
}
play();

rockBT.addEventListener("click", function (e) {
  if (playing) {
    plyChoice.textContent = "ROCK";
    random = Math.trunc(Math.random() * 3 + 1);
    if (scorePlayer === 3 || scorePc === 3) {
      playing = false;
    } else if (random === 1) {
      pcChoice.textContent = "ROCK";
      gameResult.textContent = "AGAIN";
    } else if (random === 2) {
      pcChoice.textContent = "PAPER";
      gameResult.textContent = "YOU LOOSE!";
      scorePc += 1;
      sumPc.textContent = scorePc;
    } else if (random === 3) {
      pcChoice.textContent = "SCISSORS";
      gameResult.textContent = "YOU WIN!";
      scorePlayer += 1;
      sumPlayer.textContent = scorePlayer;
    } else {
      play();
    }
  }
});

paperBT.addEventListener("click", function (e) {
  if (playing) {
    plyChoice.textContent = "PAPER";
    random = Math.trunc(Math.random() * 3 + 1);
    if (scorePlayer === 3 || scorePc === 3) {
      playing = false;
    } else if (random === 1) {
      pcChoice.textContent = "ROCK";
      gameResult.textContent = "YOU WIN!";
      scorePlayer += 1;
      sumPlayer.textContent = scorePlayer;
    } else if (random === 2) {
      pcChoice.textContent = "PAPER";
      gameResult.textContent = "AGAIN";
    } else if (random === 3) {
      pcChoice.textContent = "SCISSORS";
      gameResult.textContent = "YOU LOOSE!";
      scorePc += 1;
      sumPc.textContent = scorePc;
    } else {
      play();
    }
  }
});

scissorsBT.addEventListener("click", function (e) {
  if (playing) {
    plyChoice.textContent = "SCISSORS";
    random = Math.trunc(Math.random() * 3 + 1);
    if (scorePlayer === 3 || scorePc === 3) {
      playing = false;
    } else if (random === 1) {
      pcChoice.textContent = "ROCK";
      gameResult.textContent = "YOU LOOSE!";
      scorePc += 1;
      sumPc.textContent = scorePc;
    } else if (random === 2) {
      pcChoice.textContent = "PAPER";
      gameResult.textContent = "YOU WIN!";
      scorePlayer += 1;
      sumPlayer.textContent = scorePlayer;
    } else if (random === 3) {
      pcChoice.textContent = "SCISSORS";
      gameResult.textContent = "AGAIN";
    } else {
      play();
    }
  }
});
