// <======== Initializing Variables ========>
const textareaElement = document.getElementById("textarea");
const totalCharactersElement = document.getElementById("total-characters");
const remainingCharactersElement = document.getElementById("remaining-characters");


// <======== JS Program to Update the Character Count ========>
textareaElement.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter();


function updateCounter() {
    totalCharactersElement.innerText = textareaElement.value.length;
    remainingCharactersElement.innerText = textareaElement.getAttribute("maxlength") - textareaElement.value.length;
}