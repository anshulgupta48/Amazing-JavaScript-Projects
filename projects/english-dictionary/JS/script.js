// <======== Initializing Variables ========>
const wordInput = document.querySelector("#input");
const infoText = document.querySelector("#info-text");
const meaningContainer = document.querySelector("#meaning-container");
const title = document.querySelector("#title");
const meaning = document.querySelector("#meaning");
const audio = document.querySelector("#audio");


// <======== JS Program to Fetch the Meaning of the Word ========>
wordInput.addEventListener("keyup", (event) => {
    if (event.target.value && event.key === "Enter") {
        fetchAPI(event.target.value);
    }
})


// <======== JS Function to Fetch the Meaning & Audio of the Word ========>
async function fetchAPI(word) {
    try {
        infoText.style.display = "block";
        meaningContainer.style.display = "none";
        infoText.innerText = `Searching the Meaning of "${word}"`;

        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(url).then((res) => res.json());

        if (result.title) {
            meaningContainer.style.display = "block";
            infoText.style.display = "none";
            title.innerText = word;
            meaning.innerText = "N/A";
            audio.style.display = "none"
        }
        else {
            infoText.style.display = "none";
            meaningContainer.style.display = "block";
            audio.style.display = "inline-flex";
            title.innerText = result[0].word;
            meaning.innerText = result[0].meanings[0].definitions[0].definition;
            audio.src = result[0].phonetics[0].audio;
        }
    } catch (error) {
        infoText.innerText = `An Error Happend, Try Again Later..`;
    }
}