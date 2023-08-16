// <======== Initializing Variables ========>
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
const timer = document.querySelector("#timer");

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

let interval;
let timeLeft = 1500;


// <======== JS Function to Update the Pomodaro Timer ========>
function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;

    timer.innerHTML = formattedTime;
}


// <======== JS Function to Start the Pomodaro Timer ========>
function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}


// <======== JS Function to Stop the Pomodaro Timer ========>
function stopTimer() {
    clearInterval(interval);
}


// <======== JS Function to Reset the Pomodaro Timer ========>
function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}