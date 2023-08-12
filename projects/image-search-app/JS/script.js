// <======== Initializing Variables ========>
const accessKey = "2FP0MbKgxn6ftCIGlPixym910-IRGNQzMl2BkiuOEEs";
const inputForm = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const searchResultsContainer = document.querySelector(".search-results-container");
const showMoreButton = document.getElementById("show-more-button");

let inputData = "";
let page = 1;


// <======== JS Function to Search the Images ========>
async function searchImages() {
    inputData = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
        searchResultsinnerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultsContainer.appendChild(imageWrapper);
    });
    page++;

    if (page > 1) {
        showMoreButton.style.display = "block";
    }
}


// <======== JS Program to Run the Image Search App ========>
inputForm.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});


// <======== JS Program to Fetch More Images ========>
showMoreButton.addEventListener("click", () => {
    searchImages();
});