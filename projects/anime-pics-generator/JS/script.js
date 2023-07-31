// <======== Initializing Variables ========>
const getAnimeBtn = document.querySelector(".btn");
const animePicContainer = document.querySelector(".anime-pic-container");
const animeImage = document.querySelector(".anime-img");
const animeName = document.querySelector(".anime-name");


// <======== JS Program to Fetch Random Anime Pics ========>
getAnimeBtn.addEventListener("click", async function () {
    try {
        animePicContainer.style.display = "block";
        getAnimeBtn.disabled = true;
        getAnimeBtn.innerText = "Loading..";
        animeImage.src = "Assets/spinner.svg";
        animeName.innerText = "Updating..";

        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();

        getAnimeBtn.disabled = false;
        getAnimeBtn.innerText = "Get Anime";
        animeImage.src = data.url;
        animeName.innerText = data.artist;
    } catch (error) {
        getAnimeBtn.disabled = false;
        getAnimeBtn.innerText = "Get Anime";
        animeName.innerText = "An Error happened, Please Try Again..";
    }
})