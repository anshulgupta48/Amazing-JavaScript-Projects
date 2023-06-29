// <======== Initializing Variables ========>
const monthNameElement = document.getElementById("month-name");
const dayNameElement = document.getElementById("day-name");
const dayNumberElement = document.getElementById("day-number");
const yearElement = document.getElementById("year");


// <======== JS Program to Update the Mini-Calendar ========>
monthNameElement.innerText = new Date().toLocaleString("en", {
    month: "long"
})

dayNameElement.innerText = new Date().toLocaleString("en", {
    weekday: "long"
})

dayNumberElement.innerText = new Date().getDate();

yearElement.innerText = new Date().getFullYear();