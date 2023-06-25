// <======== Initializing Variables ========>
const monthElement = document.querySelector("#month h1");
const fullDateElement = document.querySelector("#month p");
const daysElement = document.querySelector("#days");

const monthIndex = new Date().getMonth();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay() - 1;
const lastDate = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

let days = " ";


// <======== JS Program to Update the Calendar ========>
for (let i = firstDay; i > 0; i--) {
    days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDate; i++) {
    if (i == new Date().getDate()) {
        days += `<div class="today">${i}</div>`
    }
    else {
        days += `<div>${i}</div>`;
    }
}

monthElement.innerText = months[monthIndex];
fullDateElement.innerText = new Date().toDateString();
daysElement.innerHTML = days;