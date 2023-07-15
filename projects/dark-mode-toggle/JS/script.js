// <======== Initializing Variables ========>
const darkModeContainer = document.querySelector("#dark-mode-container");
const input = document.querySelector("#input");


// <======== JS Program to Change the Mode of the Website ========>
input.checked = JSON.parse(localStorage.getItem("mode"));
updateMode();

input.addEventListener("input", () => {
    updateMode();
    updateLocalStorage();
})


function updateMode() {
    if (input.checked) {
        darkModeContainer.style.background = "black";
    }
    else {
        darkModeContainer.style.background = "white";
    }
}


function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(input.checked));
}