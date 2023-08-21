// <======== Initializing Variables ========>
const calculateBtn = document.querySelector("#calculate");
const billInput = document.querySelector("#bill");
const tipInput = document.querySelector("#tip");
const totalSpan = document.querySelector("#totalAmount");


// <======== JS Function to Calculate the Total Value After Adding the Tip ========>
function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const totalValue = billValue * (1 + tipValue / 100);
    totalSpan.innerText = "$" + totalValue.toFixed(2);
}


// <======== JS Program to Run the Tip Calculator ========>
calculateBtn.addEventListener("click", calculateTotal);