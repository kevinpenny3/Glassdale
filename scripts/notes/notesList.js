import { getNotes, useNotes, deleteNote } from "./NoteProvider.js"





const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

const NoteListComponent = () => {

    eventHub.addEventListener("noteHasBeenEdited", event => {
        const updatedNotes = useNotes()
        render(updatedNotes)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editNote--")) {
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    noteId: noteId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }

        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            deleteNote(noteId).then(
                () => {
                    const theNewNotes = useNotes()
                    render(theNewNotes)
                }
            )
        }
    })




    eventHub.addEventListener("showNoteButtonClicked", event => {
        getNotes().then(
            () => {
                const allTheNotes = useNotes()
                render(allTheNotes)
            }
        )
    })
    

    eventHub.addEventListener("newNoteCreated", event => {
        const allTheNotes = useNotes()
        render(allTheNotes)
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
                <div>Date: ${new Date(individualNote.date).toLocaleDateString('en-US')}
                    </br>Time: ${new Date(individualNote.date).toLocaleTimeString("us-en")}
                </div>
                <button id="deleteNote--${individualNote.id}">Delete Note</button>
                <button id="editNote--${individualNote.id}">Edit Note</button>
                </section>
                `
            }
        ).join("")
    }
}

export default NoteListComponent