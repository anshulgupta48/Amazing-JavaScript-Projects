// <======== Initializing Variables ========>
const formContainer = document.querySelector(".form");
const inputElement = document.querySelector(".input");
const ulElement = document.querySelector(".list");


// <======== JS Function to Retreive all the Task from Local-Storage ========>
let list = JSON.parse(localStorage.getItem("list"));
if (list) {
    list.forEach((task) => {
        toDoList(task);
    })
}

formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
})


// <======== JS Function to Add New Task in our App ========>
function toDoList(task) {
    let newTask = inputElement.value;
    const newLiElement = document.createElement("li");

    if (task) {
        newTask = task.name;
    }

    if (task && task.checked) {
        newLiElement.classList.add("checked");
    }

    newLiElement.innerText = newTask;
    ulElement.appendChild(newLiElement);
    inputElement.value = "";

    const checkBtn = document.createElement("div");
    checkBtn.innerHTML = `<i class="fas fa-check-square">`
    newLiElement.appendChild(checkBtn);

    const trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fas fa-trash">`
    newLiElement.appendChild(trashBtn);


    checkBtn.addEventListener("click", () => {
        newLiElement.classList.toggle("checked");
        updateLocalStorage();
    })

    trashBtn.addEventListener("click", () => {
        newLiElement.remove();
        updateLocalStorage();
    })

    updateLocalStorage();
}


// <======== JS Function to Store the Notes in Local-Storage ========>
function updateLocalStorage() {
    const allLiElements = document.querySelectorAll("li");
    let list = [];

    allLiElements.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked"),
        })
    })

    localStorage.setItem("list", JSON.stringify(list));
}