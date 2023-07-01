// <======== Initializing Variables ========>
const passwordInputElement = document.getElementById("password-input");
const copyIconElement = document.getElementById("copy-icon");
const btnElement = document.getElementById("btn");
const alertContainerElement = document.getElementById("alert-container");


// <======== JS Program to Create Random Password ========>
btnElement.addEventListener("click", () => {
    createPassword();
})

copyIconElement.addEventListener("click", () => {
    copyPassword();

    if (passwordInputElement.value) {
        alertContainerElement.classList.remove("active");
        setTimeout(() => {
            alertContainerElement.classList.add("active");
        }, 1200);
    }
})


// <======== JS Function to Create Random Password ========>
function createPassword() {
    const chars =
        "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }

    passwordInputElement.value = password;
    alertContainerElement.innerText = password + " Copied!"
}


// <======== JS Function to Copy the Random Password ========>
function copyPassword() {
    passwordInputElement.select();
    passwordInputElement.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(passwordInputElement.value);
}