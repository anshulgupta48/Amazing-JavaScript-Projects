// <======== Initializing Variables ========>
const searchContainer = document.querySelector("#search-container");
const searchIcon = document.querySelector(".search-icon");


// <======== JS Program to Show & Hide the Search Bar ========>
searchIcon.addEventListener("click", () => {
    searchContainer.classList.toggle("active");
})