let witnesses = []


// export const saveNote = note => {
//     return fetch('http://localhost:3000/notes', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(note)
//     })
//     .then(getNotes)
// }

export const getWitnesses = () => {
    return fetch("http://criminals.glassdale.us/witnesses")
    .then(response => response.json())
    .then(withnessArray => {
        witnesses = withnessArray.slice()
    })
}

export const useWitnesses = () => {
    return witnesses
}