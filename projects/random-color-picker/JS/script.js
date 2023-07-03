// <======== Initializing Variables ========>
const colorContainer = document.querySelector("#color-container");


// <======== JS Program to Create New Color Boxes ========>
for (let i = 0; i < 20; i++) {
    const newColorContainer = document.createElement("div");
    newColorContainer.classList.add("color");
    colorContainer.appendChild(newColorContainer);
}


// <======== JS Program to Change the Background Color of New Color Boxes ========>
const colorContainerElements = document.querySelectorAll(".color");
generateColor();


// <======== JS Function to Change the Background Color of New Color Boxes ========>
function generateColor() {
    colorContainerElements.forEach((newColorContainer) => {
        const newColorCode = randomColor();
        newColorContainer.style.backgroundColor = "#" + newColorCode;
        newColorContainer.innerText = "#" + newColorCode;
    })
}


// <======== JS Function to Generate Random Colors ========>
function randomColor() {
    const chars = "0123456789abcdef";
    let colorCode = "";
    const colorCodeLength = 6;

    for (let i = 0; i < colorCodeLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }

    return colorCode;
}