// <======== Initializing Variables ========>
const menuContainer = document.querySelector("#menu-container");
const menuInput = document.querySelector("#menu-container p");
const listContainer = document.querySelector("#list-container");
const allListElements = document.querySelectorAll("#list-container ul li")


// <======== JS Program to Show & Hide the List-Container ========>
menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("hide");
    listContainer.classList.toggle("hide");
})

allListElements.forEach(allListElements => {
    allListElements.addEventListener("click", () => {
        menuInput.innerHTML = allListElements.innerHTML;
        menuContainer.classList.toggle("hide");
        listContainer.classList.toggle("hide");
    })
})