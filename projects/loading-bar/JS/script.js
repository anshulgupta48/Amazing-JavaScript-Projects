// <======== Initializing Variables ========>
const percentageContainer = document.querySelector(".percentage-container");
const loadingBar = document.querySelector(".loading-bar-front");

let index = 0;
updateNum();


// <======== JS Function to Update the Width of the Loading Bar ========>
function updateNum() {
    percentageContainer.innerText = index + "%";
    loadingBar.style.width = index + "%";
    index++;

    if (index < 101) {
        setTimeout(updateNum, 20);
    }
}