import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"





const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteListComponent = () => {
    eventHub.addEventListener("showNoteButtonClicked", event => {
        getNotes().then(
            () => {
                const allTheNotes = useNotes()
                render(allTheNotes)
            }
        )
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "hideNotes")
        contentTarget.innerHTML =``
    })

    eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        
        const message = new CustomEvent("deleteNoteClicked", {
            detail: {
                noteId: id
            }
        })

        eventHub.dispatchEvent(message)
        
        
        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then( () => render(useNotes()) )
    }
})

    const render = (notesCollection) => {
        
        
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return  `
                <section class="displayedNotes">
                <div>Note: ${individualNote.suspect}</div>
                <div>Criminal: ${individualNote.text}</div>
                <div>Date: ${new Date(individualNote.date).toLocaleDateString('en-US')}</div>
                <button id="deleteNote--${individualNote.id}">Delete</button>
                </section>
                `
            }
        ).join("")
    }
}

export default NoteListComponent