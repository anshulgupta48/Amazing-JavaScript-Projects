// <======== Initializing Variables ========>
const animationContainer = document.querySelector("#animation-container");
const careers = ["Youtuber", "Web Developer", "Instructor", "Freelancer"];

let careerIndex = 0;
let characterIndex = 0;

updateCareerText();


// <======== JS Function to Update the Text ========>
function updateCareerText() {
    characterIndex++;
    animationContainer.innerHTML = `<h1>I am a ${careers[careerIndex].slice(0, characterIndex)}</h1>`

    if (characterIndex == careers[careerIndex].length) {
        careerIndex++;
        characterIndex = 0;
    }

    if (careerIndex == careers.length) {
        careerIndex = 0;
    }

    setTimeout(updateCareerText, 400);
}