// <======== Initializing Variables ========>
const backgroundContainer = document.querySelector("#background-container");
const btnElement = document.querySelector(".btn");
const popupContainer = document.querySelector("#popup-container");
const closeIcon = document.querySelector(".close-icon");


// <======== JS Program to Show the Popup When Btn Clicked ========>
btnElement.addEventListener("click", () => {
    backgroundContainer.classList.add("active");
    popupContainer.classList.remove("active");
})


// <======== JS Program to Close the Popup When Close-Icon Clicked ========>
closeIcon.addEventListener("click", () => {
    backgroundContainer.classList.remove("active");
    popupContainer.classList.add("active");
})