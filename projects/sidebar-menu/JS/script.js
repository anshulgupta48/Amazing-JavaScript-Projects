// <======== Initializing Variables ========>
const sidebarMenu = document.querySelector(".sidebar-container");
const bars = document.querySelector(".fa-bars");
const closingBtn = document.querySelector(".fa-times");


// <======== JS Program to Show & Hide the SideBar Menu ========>
bars.addEventListener("click", () => {
    sidebarMenu.classList.toggle("show");
})

closingBtn.addEventListener("click", () => {
    sidebarMenu.classList.remove("show");
})