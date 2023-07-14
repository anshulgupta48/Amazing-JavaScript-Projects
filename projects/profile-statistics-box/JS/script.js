// <======== Initializing Variables ========>
const counterElements = document.querySelectorAll(".counter");


// <======== JS Program to Update the Profile Statistics Info ========>
counterElements.forEach(counter => {
    counter.innerText = "0";
    incrementCounter();

    function incrementCounter() {
        let currentNum = + counter.innerText;
        const dataCeil = counter.getAttribute("data-ceil");
        const increment = dataCeil / 15;
        currentNum = Math.ceil(currentNum + increment);

        if (currentNum < dataCeil) {
            counter.innerText = currentNum;
            setTimeout(incrementCounter, 50);
        }
        else {
            counter.innerText = dataCeil;
        }
    }
})