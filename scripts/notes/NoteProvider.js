let notes = []


export const useNotes = () => notes.slice()

export const editNote = (noteObject) => {
    return fetch(`http://localhost:3000/notes/${noteObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObject)
    })
        .then(getNotes)

}

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