// <======== Initializing Variables ========>
const allButtons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const playerScoreSpan = document.querySelector("#user-score");
const computerScoreSpan = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;


// <======== JS Program to Run the Rock Paper Scissors Game ========>
allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const resultValue = playRound(button.id, computerPlay());
        result.innerText = resultValue;
    });
});


// <======== JS Function to Play Computer Turn ========>
function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}


// <======== JS Function to Check Win or Lose ========>
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreSpan.textContent = playerScore;
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}