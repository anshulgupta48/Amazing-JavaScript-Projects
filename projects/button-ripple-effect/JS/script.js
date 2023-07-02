// <======== Initializing Variables ========>
const btnEl = document.querySelector(".btn");


// <======== JS Program to Add Ripple Effect to the Button ========>
btnEl.addEventListener("mouseover", (event) => {
    const x = event.pageX - btnEl.offsetLeft;
    const y = event.pageY - btnEl.offsetTop;

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
})