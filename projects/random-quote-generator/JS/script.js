// <======== Initializing Variables ========>
const getQuoteBtn = document.querySelector("#btn");
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const apiURL = "https://api.quotable.io/random";


// <======== JS Program to Fetch Random Quote ========>
async function getQuote() {
    try {
        getQuote.innerText = "Loading..";
        getQuote.disabled = true;
        quote.innerText = "Updating..";
        author.innerText = "Updating..";

        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;

        getQuote.innerText = "Get a Quote";
        getQuote.disabled = false;

        quote.innerText = quoteContent;
        author.innerText = "~ " + quoteAuthor;
    } catch (error) {
        quote.innerText = "An Error Happended, Try Again Later..";
        author.innerText = "An Error Happended";
        getQuoteBtn.innerText = "Get a Quote";
        getQuoteBtn.disabled = false;
    }
}


getQuote();
getQuoteBtn.addEventListener("click", getQuote);