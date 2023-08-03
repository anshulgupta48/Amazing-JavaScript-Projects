// <======== Initializing Variables ========>
const weightInput = document.querySelector("#input");
const resultWeight = document.querySelector("#result");
const error = document.querySelector("#error");

let resultTime;
let errorTime;


// <======== JS Program to Convert the Weight ========>
weightInput.addEventListener("input", () => {
    if (weightInput.value <= 0 || isNaN(weightInput.value)) {
        error.innerText = "Please Enter a Valid Number";
        clearTimeout(errorTime);

        errorTime = setTimeout(() => {
            weightInput.value = "";
            error.innerText = "";
        }, 2000);
    }
    else {
        resultWeight.innerText = (weightInput.value / 2.2).toFixed(2);
        clearTimeout(resultTime);

        resultTime = setTimeout(() => {
            weightInput.value = "";
            resultWeight.innerText = "";
        }, 4000);
    }
})