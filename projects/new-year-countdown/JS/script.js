// <======== Initializing Variables ========>
const yearElement = document.getElementById("years");
const monthElement = document.getElementById("months");
const dayElement = document.getElementById("days");
const hourElement = document.getElementById("hours");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const newYearTime = new Date("Jan 1, 2030 00:00:00").getTime();


// <======== JS Function to Update the CountDown ========>
function updateCountDown() {
    const currentTime = new Date().getTime();
    const gap = newYearTime - currentTime;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30.41;
    const year = month * 12;

    let exactYear = Math.floor(gap / year);
    let exactMonth = Math.floor(gap % year / month);
    let exactDay = Math.floor(gap % month / day);
    let exactHour = Math.floor(gap % day / hour);
    let exactMinute = Math.floor(gap % hour / minute);
    let exactSecond = Math.floor(gap % minute / second);

    exactYear = exactYear < 10 ? "0" + exactYear : exactYear;
    exactMonth = exactMonth < 10 ? "0" + exactMonth : exactMonth;
    exactDay = exactDay < 10 ? "0" + exactDay : exactDay;
    exactHour = exactHour < 10 ? "0" + exactHour : exactHour;
    exactMinute = exactMinute < 10 ? "0" + exactMinute : exactMinute;
    exactSecond = exactSecond < 10 ? "0" + exactSecond : exactSecond;

    yearElement.innerText = exactYear;
    monthElement.innerText = exactMonth;
    dayElement.innerText = exactDay;
    hourElement.innerText = exactHour;
    minuteElement.innerText = exactMinute;
    secondElement.innerText = exactSecond;

    setInterval(() => {
        updateCountDown();
    }, 1000);
}

updateCountDown();