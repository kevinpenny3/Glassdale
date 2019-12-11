let criminals = []

export const useCriminals = () => {
    return criminals
}
console.log("*** I am going to fetch the data ***")

export const getCriminals = () => {     
    return fetch("http://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals) 
                console.log("*** I have the Data ***")
                criminals = parsedCriminals.slice()
            }
        )
}

