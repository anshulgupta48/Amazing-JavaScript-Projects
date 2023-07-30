// <======== Initializing Variables ========>
const preLoaderContainer = document.querySelector("#preloader-container");
const backgroundVideo = document.querySelector("#background-video-container video");
const pauseResumeBtn = document.querySelector("#background-video-container .btn");
const icon = document.querySelector("#background-video-container .fa");


// <======== JS Program to Pause & Resume the Background Video ========>
pauseResumeBtn.addEventListener("click", () => {
    if (icon.classList.contains("fa-pause")) {
        icon.classList.remove("fa-pause");
        backgroundVideo.pause();
        icon.classList.add("fa-play");
    }
    else {
        icon.classList.remove("fa-play");
        backgroundVideo.play();
        icon.classList.add("fa-pause");
    }
})

window.addEventListener("load", () => {
    setTimeout(() => {
        preLoaderContainer.style.zIndex = "-999";
    }, 800);
})