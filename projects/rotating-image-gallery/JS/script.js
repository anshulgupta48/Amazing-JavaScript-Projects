// <======== Initialize Variables ========>
const imageContainerElement = document.querySelector("#image-container");
const previousButtonElement = document.querySelector("#previous");
const nextButtonElement = document.querySelector("#next");


// <======== JS Program to Rotate the Images of the Gallery ========>
let x = 0;
let timer;

previousButtonElement.addEventListener("click", () => {
    x = x + 45;
    clearTimeout(timer);
    updateGallery();
})

nextButtonElement.addEventListener("click", () => {
    x = x - 45;
    clearTimeout(timer);
    updateGallery();
})

function updateGallery() {
    imageContainerElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x = x - 45;
        updateGallery();
    }, 4000);
}

updateGallery();