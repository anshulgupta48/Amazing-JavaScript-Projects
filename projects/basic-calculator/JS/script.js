// <======== Initializing Variables ========>
const result = document.querySelector("#result");
const allButtons = document.querySelectorAll(".btn-container button");


// <======== JS Function to Run the Calculator ========>
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", () => {
        const buttonValue = allButtons[i].innerText;
        if (buttonValue === "C") {
            clearResult();
        }
        else if (buttonValue === "=") {
            calculateResult();
        }
        else {
            appendValue(buttonValue);
        }
    })
}


// <======== JS Function to Clear the Result ========>
function clearResult() {
    result.value = "";
}


// <======== JS Function to Calculate the Result ========>
function calculateResult() {
    result.value = eval(result.value);
}


// <======== JS Function to Start New Calculation with the Result Value ========>
function appendValue(buttonValue) {
    result.value += buttonValue;
}