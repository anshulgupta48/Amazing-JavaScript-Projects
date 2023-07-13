// <======== Initializing Variables ========>
const mainContainer = document.querySelector("#main-container");
const appleContainer = document.querySelector(".apple-container");
const redmiContainer = document.querySelector(".redmi-container");


// <======== JS Program to Add Animation in Apple-Container ========>
appleContainer.addEventListener("mouseover", () => {
    mainContainer.classList.add("apple-active");
})

appleContainer.addEventListener("mouseleave", () => {
    mainContainer.classList.remove("apple-active");
})


// <======== JS Program to Add Animation in Redmi-Container ========>
redmiContainer.addEventListener("mouseover", () => {
    mainContainer.classList.add("redmi-active");
})

redmiContainer.addEventListener("mouseleave", () => {
    mainContainer.classList.remove("redmi-active");
})