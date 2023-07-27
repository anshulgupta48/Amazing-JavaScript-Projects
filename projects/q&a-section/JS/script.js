// <======== Initializing Variables ========>
const questionContainer = document.querySelectorAll(".question");


// <======== JS Program to Show & Hide the Text ========>
questionContainer.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", () => {
        question.classList.toggle("show-text");
    })
})