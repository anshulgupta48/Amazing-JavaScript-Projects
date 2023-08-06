// <======== Initializing Variables ========>
const currencyFirst = document.querySelector("#currency-first");
const worthFirst = document.querySelector("#worth-first");
const currencySecond = document.querySelector("#currency-second");
const worthSecond = document.querySelector("#worth-second");
const exchangeRate = document.querySelector("#exchange-rate");


// <======== JS Function to Update the Currency ========>
function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/d2e45bd06700d803d70fe4ea/latest/${currencyFirst.value}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecond.value];
            exchangeRate.innerText = `1 ${currencyFirst.value} = ${rate.toFixed(2) + " " + currencySecond.value
                }`;

            worthSecond.value = (worthFirst.value * rate).toFixed(2);
        })
}


updateRate();
currencyFirst.addEventListener("change", updateRate);
worthFirst.addEventListener("input", updateRate);
currencySecond.addEventListener("change", updateRate);