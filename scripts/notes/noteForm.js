import { saveNote, getNotes } from "./NoteProvider.js"





const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const noteFormComponent = () => {


eventHub.addEventListener("click", clickEvent =>{
    if (clickEvent.target.id === "saveNote") {
        // make an object
        const newNote = {
            text: document.querySelector("#note-text").value,
            suspect: document.querySelector("#note-criminal").value,
            date: Date.now()

        }
        saveNote(newNote)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
    const message = new CustomEvent("showNoteButtonClicked")

    eventHub.dispatchEvent(message)
        }
    })


const render = () => {
    contentTarget.innerHTML = `
    <div class="note__field">
        Note: <input type="text" id="note-text" />
    </div>
    <div class="note__field">
        Criminal: <input type="text" id="note-criminal" />
    </div>
    <div class="note__field">
    <input type="submit" value="Submit" id="saveNote">
    </div>
    <div class="note__field">
    <input type="submit" value="Show Notes" id="showNotes">
    </div>
    <div class="note__field">
    <input type="submit" value="Hide Notes" id="hideNotes">
    </div>

    `
}

render()

}

export default noteFormComponent