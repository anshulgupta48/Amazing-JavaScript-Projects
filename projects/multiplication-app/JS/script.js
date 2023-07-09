// <======== Initializing Variables ========>
let scoreH3 = document.getElementById("score");
let questionH1 = document.getElementById("question");
let input = document.getElementById("answer");


// <======== JS Program to Run Multiplication App ========>
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);
let correctAns = a * b;

let score = localStorage.getItem("score");
if (score == null) {
    score = 0;
}

scoreH3.innerText = `Score: ${score}`;
questionH1.innerText = `What is ${a} Multiply by ${b}`;

const form = document.getElementById("form");
form.addEventListener("submit", () => {
    const userAns = input.value;

    if (userAns == correctAns) {
        score++;
        updateScore();
    }
    else {
        score--;
        updateScore();
    }
})


function updateScore() {
    localStorage.setItem("score", score);
}