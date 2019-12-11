import { getNotes, useNotes } from "./NoteProvider.js"




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

    const render = (notesCollection) => {
        
        
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return  `
                <section class="displayedNotes">
                <div>Note: ${individualNote.suspect}</div>
                <div>Criminal: ${individualNote.text}</div>
                <div>Date: ${new Date(individualNote.date).toLocaleDateString('en-US')}</div>
                </section>
                `
            }
        ).join("")
    }
}

export default NoteListComponent