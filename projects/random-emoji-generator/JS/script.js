// <======== Initializing Variables ========>
const emojiBtn = document.getElementById("emoji-icon");
const emojiName = document.getElementById("emoji-name");
const emoji = [];


// <======== JS Program to Generate Random Emoji from the Emoji-Api ========>
async function getEmoji() {
    let response = await fetch("https://emoji-api.com/emojis?access_key=a91d7e34bb3e39237691c7ca1491fb85776d6e6b");
    let data = await response.json();

    for (let i = 0; i < 1500; i++) {
        emoji.push({
            emojiIcon: data[i].character,
            emojiCode: data[i].unicodeName
        })
    }
}

getEmoji();

emojiBtn.addEventListener("click", () => {
    let randomNum = Math.floor(Math.random() * emoji.length);
    emojiBtn.innerText = emoji[randomNum].emojiIcon;
    emojiName.innerText = emoji[randomNum].emojiCode;
})