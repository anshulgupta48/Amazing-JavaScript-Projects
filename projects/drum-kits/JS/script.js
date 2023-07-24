// <======== Initializing Variables ========>
const drumKits = ["crash", "kick", "snare", "tom"];
const btnContainer = document.querySelector(".drum-kit-btn");


// <======== JS Program to Run the Drum Kits ========>
drumKits.forEach((kit) => {
    const newBtn = document.createElement("button");
    newBtn.classList.add("btn");
    newBtn.innerText = kit;
    newBtn.style.backgroundImage = "url(Assets/" + kit + ".png)";
    btnContainer.appendChild(newBtn);

    const newAudio = document.createElement("audio");
    newAudio.src = "Assets/" + kit + ".mp3";
    btnContainer.appendChild(newAudio);

    newBtn.addEventListener("click", () => {
        newAudio.play();
    })

    window.addEventListener("keydown", (event) => {
        if (event.key === kit.slice(0, 1)) {
            newAudio.play();
            newBtn.style.transform = "scale(.9)";

            setTimeout(() => {
                newBtn.style.transform = "scale(1)";
            }, 100);
        }
    })
})