// <======== Initializing Variables ========>
const animationContainer = document.getElementById("animation-container");


// <======== JS Program to Add Heart Animations When You Move the Mouse ========>
animationContainer.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const spanElement = document.createElement("span");
    spanElement.style.top = yPos + "px";
    spanElement.style.left = xPos + "px";

    const randomSize = Math.random() * 100;
    spanElement.style.height = randomSize + "px";
    spanElement.style.width = randomSize + "px";

    animationContainer.appendChild(spanElement);

    setTimeout(() => {
        spanElement.remove();
    }, 4000);
})