let notes = []


export const saveNote = note => {
    return fetch('http://localhost:3000/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}

export const getNotes = () => {
    return fetch("http://localhost:3000/notes")
    .then(response => response.json())
    .then(noteArray => {
        notes = noteArray.slice()
    })
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:3000/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}

export const useNotes = () => {
    return notes
}