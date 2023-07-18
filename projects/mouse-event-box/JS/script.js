// <======== Initializing Variables ========>
const mainContainer = document.querySelector("#main-container");


// <======== JS Program to Run Mouse Event Box ========>
window.addEventListener("mousemove", (event) => {
    mainContainer.innerHTML = `<div class="mouse-event-box">
    ${event.clientX}
    <h4>Mouse X Position (px)</h4>
</div>

<div class="mouse-event-box">
    ${event.clientY}
    <h4>Mouse Y Position (px)</h4>
</div>`
})