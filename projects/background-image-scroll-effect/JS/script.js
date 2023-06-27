// <======== JS Program to Add a Scroll-Effect to Background Image ========>
const imageContainerElement = document.getElementById("image-container");
window.addEventListener("scroll", () => {
    updateImage();
})

function updateImage() {
    imageContainerElement.style.opacity = 1 - pageYOffset / 900;
    imageContainerElement.style.backgroundSize = 100 - pageYOffset / 12 + "%";
}