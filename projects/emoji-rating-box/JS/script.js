// <======== Initializing Variables ========>
const emojiElements = document.querySelectorAll(".far");
const starElements = document.querySelectorAll(".fa-star");
const colorArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);


// <======== JS Program to Update the Rating ========>
starElements.forEach((star, index) => {
    star.addEventListener("click", () => {
        updateRating(index);
    })
})

function updateRating(index) {
    starElements.forEach((star, idx) => {
        if (idx < index + 1) {
            star.classList.add("active");
        } else {
            star.classList.remove("active");
        }
    })

    emojiElements.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = colorArray[index];
    })
}