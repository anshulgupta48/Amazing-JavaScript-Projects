// <======== Initializing Variables ========>
const getJokeBtn = document.getElementById("btn");
const dadJoke = document.getElementById("joke");

const apiKey = "RN52xFmVqL0UFIfJE+pwMw==MrxMivFIgCYVWmhT";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}


// <======== JS Function to Fetch Dad Jokes ========>
async function getJoke() {
    try {
        dadJoke.innerText = "Updating..";
        getJokeBtn.disabled = true;
        getJokeBtn.innerText = "Loading..";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        getJokeBtn.disabled = false;
        getJokeBtn.innerText = "Tell me a Joke";
        dadJoke.innerText = data[0].joke;
    } catch (error) {
        dadJoke.innerText = "An Error Happend, Try Again Later..";
        getJokeBtn.disabled = false;
        getJokeBtn.innerText = "Tell me a Joke";
    }
}


getJokeBtn.addEventListener("click", getJoke);