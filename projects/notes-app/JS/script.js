// <======== Initializing Variables ========>
const addNodeBtn = document.querySelector(".btn");
const appContainer = document.querySelector(".app-container");


// <======== JS Program to Run the Notes App ========>
getNotes().forEach((note) => {
    const notes = createNote(note.id, note.content);
    appContainer.insertBefore(notes, addNodeBtn);
})
addNodeBtn.addEventListener("click", addNote);


// <======== JS Function to Create the Note ========>
function createNote(id, content) {
    const newElement = document.createElement("textarea");
    newElement.classList.add("note");
    newElement.placeholder = "Empty Note";
    newElement.value = content;

    newElement.addEventListener("dblclick", () => {
        const warning = confirm("Do You Want to Delete this Note ?");
        if (warning) {
            deleteNote(id, newElement);
        }
    })

    newElement.addEventListener("input", () => {
        updateNote(id, newElement.value);
    })

    return newElement;
}


// <======== JS Function to Add the Note ========>
function addNote() {
    const note = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    }

    const newNote = createNote(noteObj.id, noteObj.content);
    appContainer.insertBefore(newNote, addNodeBtn);

    note.push(noteObj);
    saveNote(note);
}


// <======== JS Function to Delete the Note ========>
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes);
    appContainer.removeChild(element);
}


// <======== JS Function to Update the Note ========>
function updateNote(id, content) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = content;
    saveNote(notes);
}


// <======== JS Function to Save the Notes in the Local Storage ========>
function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}


// <======== JS Function to Fetch the Notes From the Local Storage ========>
function getNotes() {
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}