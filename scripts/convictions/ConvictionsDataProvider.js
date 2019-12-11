let convictions = []

export const useConvictions = () => {
    return convictions
}
console.log("*** I am going to fetch the data ***")

export const getConvictions = () => {     

    // request data from api 
    return fetch("http://criminals.glassdale.us/crimes")

        // when the other place responds with a string, parse the string
        .then(response => response.json())
        
        // Then do something with my datat that is now parsd into a javascript array
        .then(
            parsedConvictions => {
                console.table(parsedConvictions) 
                convictions = parsedConvictions.slice()
            }
        )
}

export default getConvictions