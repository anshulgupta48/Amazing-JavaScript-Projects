// <======== Initializing Variables ========>
const navbar = document.getElementById("navbar");
const textContainer = document.getElementById("text-container");


// <======== JS Program to Show & Hide Sticky Navbar ========>
window.addEventListener("scroll", () => {
    if (window.scrollY > textContainer.offsetTop - navbar.offsetHeight - 50) {
        navbar.classList.add("active");
    }
    else {
        navbar.classList.remove("active");
    }
})