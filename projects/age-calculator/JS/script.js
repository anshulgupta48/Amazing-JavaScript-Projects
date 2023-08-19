// <======== Initializing Variables ========>
const calculateBtn = document.querySelector("#btn");
const birthdayInput = document.querySelector("#birthday");
const result = document.querySelector("#result");


// <======== JS Program to Run the Age Calculator ========>
calculateBtn.addEventListener("click", calculateAge);


// <======== JS Function to Calculate the Age ========>
function calculateAge() {
    const birthdayInputValue = birthdayInput.value;

    if (birthdayInputValue === "") {
        alert("Please Enter Your Birthday");
    } else {
        const age = getAge(birthdayInputValue);
        result.innerText = `You are ${age} ${age > 1 ? "Years" : "Year"} Old`;
    }
}


// <======== JS Function to Get the Age ========>
function getAge(birthdayInputValue) {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayInputValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}