// <======== Initializing Variables ========>
const bar = document.querySelector(".fa-bars");
const navigationContainer = document.querySelector(".navbar-navigation-container")


// <======== JS Program to Hide & Show the Navbar ========>
bar.addEventListener("click", () => {
    navigationContainer.classList.toggle("show");
})