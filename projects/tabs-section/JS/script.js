// <======== Initializing Variables ========>
const tabsContainer = document.querySelector(".tabs-section-container");
const tabsContent = document.querySelectorAll(".tabs-content");
const tabsBtn = document.querySelectorAll(".btn");


// <======== JS Program to Run Tabs-Section ========>
tabsContainer.addEventListener("click", function (event) {
    const newId = event.target.dataset.id;

    if (newId) {
        tabsBtn.forEach(function (btn) {
            btn.classList.remove("live");
        })

        event.target.classList.add("live");

        tabsContent.forEach(function (content) {
            content.classList.remove("live");
        });

        const newElement = document.getElementById(newId);
        newElement.classList.add("live");
    }
})