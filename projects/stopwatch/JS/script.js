// <======== Initializing Variables ========>
const timer = document.querySelector("#timer");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);


// <======== JS Function to Start the Timer of the Stopwatch ========>
function startTimer() {
    startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        timer.textContent = formatTime(elapsedTime);
    }, 10);

    startBtn.disabled = true;
    stopBtn.disabled = false;
}


// <======== JS Function to Format the Time of the Stopwatch ========>
function formatTime(elapsedTime) {
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    return (
        (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
        ":" +
        (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
        ":" +
        (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
        "." +
        (milliseconds > 9 ? milliseconds : "0" + milliseconds)
    );
}


// <======== JS Function to Stop the Timer of the Stopwatch ========>
function stopTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


// <======== JS Function to Reset the Timer of the Stopwatch ========>
function resetTimer() {
    clearInterval(timerInterval);

    elapsedTime = 0;
    timer.textContent = "00:00:00";

    startBtn.disabled = false;
    stopBtn.disabled = true;
}