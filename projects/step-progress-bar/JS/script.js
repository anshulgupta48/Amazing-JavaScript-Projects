// <======== Initializing Variables ========>
const progressBar = document.querySelector(".progress-bar-front");
const allSteps = document.querySelectorAll(".step");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
let currentChecked = 1;


// <======== JS Program to Update the Step of Progress Bar ========>
prevBtn.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepProgress();
});

nextBtn.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > allSteps.length) {
        currentChecked = allSteps.length;
    }
    updateStepProgress();
});

function updateStepProgress() {
    allSteps.forEach((stepEl, index) => {
        if (index < currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
            <i class="fas fa-check"></i>
            <small>${index === 0 ? "Start" : index === allSteps.length - 1 ? "Final" : "Step " + index}</small>`;
        }
        else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `<i class="fas fa-times"></i>`;
        }

        const checkedNumber = document.querySelectorAll(".checked");

        progressBar.style.width =
            ((checkedNumber.length - 1) / (allSteps.length - 1)) * 100 + "%";

        if (currentChecked === 1) {
            prevBtn.disabled = true;
        } else if (currentChecked === allSteps.length) {
            nextBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            nextBtn.disabled = false;
        }
    })
}