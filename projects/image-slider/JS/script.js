// <======== Initializing Variables ========>
const imageSliderContainer = document.querySelector("#image-slider-container");
const imageContainer = document.querySelector(".image-container");
const allImages = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");


// <======== JS Program to Update the Image Using Buttons ========>
let currentImg = 1;
let timeout;
updateImg();

prevBtn.addEventListener("click", () => {
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

nextBtn.addEventListener("click", () => {
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})


// <======== JS Function to Update the Image Automatically ========>
function updateImg() {
    if (currentImg > allImages.length) {
        currentImg = 1;
    }
    else if (currentImg < 1) {
        currentImg = allImages.length;
    }

    if (imageSliderContainer.clientWidth > 400) {
        imageContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
    }
    else {
        imageContainer.style.transform = `translateX(-${(currentImg - 1) * 250}px)`;
    }

    timeout = setTimeout(() => {
        currentImg++;
        updateImg();
    }, 3000);
}