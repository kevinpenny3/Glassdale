let officers = []

const useOfficers = () => {
    return officers
}

const getOfficers = () => {
    return fetch("http://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers.slice()
            }
        )
}