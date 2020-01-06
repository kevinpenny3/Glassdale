import { saveNote, getNotes, useNotes, editNote} from "./NoteProvider.js"





const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const noteFormComponent = () => {

    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.noteId

        const allNotesArray = useNotes()

        const theFoundedNote = allNotesArray.find(
            (currentNoteObject) => {
                return currentNoteObject.id === parseInt(noteToBeEdited, 10)
            }
        )

        document.querySelector("#note-id").value = theFoundedNote.id
        document.querySelector("#note-text").value = theFoundedNote.text
        document.querySelector("#note-criminal").value = theFoundedNote.suspect
    })


eventHub.addEventListener("click", clickEvent =>{
    if (clickEvent.target.id === "saveNote") {


        const hiddenInputValue = document.querySelector("#note-id").value

        // If so, edit the note with a PUT operation
        if (hiddenInputValue !== "") {
            const editedNote = {
                id: parseInt(document.querySelector("#note-id").value, 10),
                text: document.querySelector("#note-text").value,
                suspect: document.querySelector("#note-criminal").value,
                date: Date.now()
            }

            editNote(editedNote).then(() => {
                eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
            })
        } else {

        // make an object
        const newNote = {
            text: document.querySelector("#note-text").value,
            suspect: document.querySelector("#note-criminal").value,
            date: Date.now()

        }
        saveNote(newNote).then(
            () => {
                const message = new CustomEvent("newNoteCreated")
                eventHub.dispatchEvent(message)
            }
        )
    }
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
    <input type="hidden" id="note-id" />
    <div class="note__field">
        Criminal: <input type="text" id="note-criminal" />
    </div>
    <div class="note__field">
    <input class="noteFieldButton" type="submit" value="Submit" id="saveNote">
    </div>
    <div class="note__field">
    <input class="noteFieldButton" type="submit" value="Show Notes" id="showNotes">
    </div>
    <div class="note__field">
    <input class="noteFieldButton" type="submit" value="Hide Notes" id="hideNotes">
    </div>

    `
}

render()

}

export default noteFormComponent