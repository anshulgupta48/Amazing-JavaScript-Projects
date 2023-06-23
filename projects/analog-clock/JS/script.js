// <======== Initializing Variables ========>
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");


// <======== JS Function to Update the Time of Analog Clock ========>
function updateClock() {
    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const hourDeg = (hour / 12) * 360;
    const minuteDeg = (minute / 60) * 360;
    const secondDeg = (second / 60) * 360;

    hourElement.style.transform = `rotate(${hourDeg}deg)`
    minuteElement.style.transform = `rotate(${minuteDeg}deg)`
    secondElement.style.transform = `rotate(${secondDeg}deg)`

    setInterval(() => {
        updateClock();
    }, 1000);
}

updateClock();