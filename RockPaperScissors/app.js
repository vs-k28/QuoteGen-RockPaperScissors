const playerEl = document.getElementById("playerText");
const computerEl = document.getElementById("computerText");
const resultEl = document.getElementById("resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerEl.textContent = `${player}`;
    computerEl.textContent = `${computer}`;
    resultEl.textContent = checkWinner();
  })
);

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}


function checkWinner() {
  if (player == computer) {
    return "DRAW! ";
  } else if (computer == "ROCK") {
    return (player == "PAPER") ? "YOU WON..!" : "YOU LOST..";
  } else if (computer == "PAPER") {
    return (player == "SCISSORS") ? "YOU WON..!" : "YOU LOST..";
  } else if (computer == "SCISSORS") {
    return (player == "ROCK") ? "YOU WON..!" : "YOU LOST..";
  }
}
