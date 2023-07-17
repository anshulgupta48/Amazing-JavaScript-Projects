// <======== Initializing Variables ========>
const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");


// <======== JS Program to Add New Images ========>
btn.addEventListener("click", () => {
    imageNum = 9;
    addNewImages();
})

function addNewImages() {
    for (let i = 0; i < imageNum; i++) {
        const newImage = document.createElement("img");
        newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainer.appendChild(newImage);
    }
}