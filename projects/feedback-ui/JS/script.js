// <======== Initializing Variables ========>
const feedbackUiContainer = document.querySelector(".feedback-ui-container");
const allRatings = document.querySelectorAll(".rating");
const sendReviewBtn = document.querySelector(".btn");
let selectedRating = "";


// <======== JS Function to Run the Feedback UI ========>
allRatings.forEach((rating) => {
    rating.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })
})


// <======== JS Function to Send the Review of the Selected Rating ========>
sendReviewBtn.addEventListener("click", () => {
    if (selectedRating !== "") {
        feedbackUiContainer.innerHTML = `
        <strong>Thank You!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <br>
        <br>
        <p>We'll use Your Feedback to Improve our Customer Support</p>
        `
    }
})


// <======== JS Function to Remove Active Class From all the Ratings ========>
function removeActive() {
    allRatings.forEach((rating) => {
        rating.classList.remove("active");
    })
}