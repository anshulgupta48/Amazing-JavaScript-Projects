// <======== Initializing Variables ========>
const btnElement = document.querySelector(".btn");
const trailerContainer = document.querySelector("#trailer-container");
const closeIcon = document.querySelector(".close-icon");
const videoElement = document.querySelector("video");


// <======== JS Program to Show Video When Watch-Now Btn Clicked ========>
btnElement.addEventListener("click", () => {
    trailerContainer.classList.remove("active");
})


// <======== JS Program to Close Video When Close-Icon Clicked ========>
closeIcon.addEventListener("click", () => {
    trailerContainer.classList.add("active");
    videoElement.pause();
    videoElement.currentTime = 0;
})