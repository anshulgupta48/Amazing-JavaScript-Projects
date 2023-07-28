// <======== Initializing Variables ========>
const value = document.querySelector(".value");
const allButtons = document.querySelectorAll(".btn");
let num = 0;


// <======== JS Program to Increase or Decrease the Count & Change its Color ========>
allButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const btnId = event.currentTarget.classList;

        if (btnId.contains("decrement")) {
            num--;
        }
        else if (btnId.contains("increment")) {
            num++;
        }
        else {
            num = 0;
        }

        value.textContent = num;

        if (num < 0) {
            value.style.color = "yellow";
        }
        else if (num > 0) {
            value.style.color = "white";
        }
        else {
            value.style.color = "lightgray";
        }
    })
})