// <======== Initializing Variables ========>
const celsiusEl = document.querySelector("#celsius");
const fahrenheitEl = document.querySelector("#fahrenheit");
const kelvinEl = document.querySelector("#kelvin");


// <======== JS Program to Calculate the Temperature ========>
function computeTemperature(event) {
    const currentValue = +event.target.value;

    switch (event.target.name) {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;

        case "fahrenheit":
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;

        case "kelvin":
            celsiusEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;

        default:
            break;
    }
}