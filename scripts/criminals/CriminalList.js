import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js";
import { getCriminalsByCrime } from "./CriminalProvider.js";
import CriminalComponent from "./CriminalComponent.js";



const eventHub = document.querySelector(".container")

const CriminalList = () => {
    const contentElement = document.querySelector(".criminalsContainer")
    

    const appStateCriminals = useCriminals()

    eventHub.addEventListener("filterClicked", event => {
        const crimeName = event.detail.crime
        const officerName = event.detail.officer

        const filteredCriminals = appStateCriminals.filter(
            (individualCriminal) => {
                if (individualCriminal.conviction === crimeName) {
                    return individualCriminal
                }
            }
        )
        .filter(criminal => {
            if (criminal.arrestingOfficer === officerName) {
                return criminal
            }
        })

        render(filteredCriminals)
    })

    // eventHub.addEventListener('crimeSelected', event => {
    //     const crimeName = event.detail.crime

    //         const filteredCriminals = appStateCriminals.filter(
    //             (individualCriminal) => {
    //                 if(individualCriminal.conviction === crimeName)
    //                 {
    //                     return individualCriminal
    //                 }
    //             }
    //         )
    //         render (filteredCriminals)
    //         console.log(filteredCriminals)

    //     })

    // eventHub.addEventListener('officerSelected', event => {
    //         if ("officerName" in event.detail) {
    //             if (event.detail.officerName === "0") {
    //                 render(appStateCriminals)
    //             } else {
    //                 const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
    //                 render(filteredCriminals)
    //             }
    //         }
    //     })

        eventHub.addEventListener("click", clickEvent => {
            if (clickEvent.target.id.startsWith("associates--")) {
    
                const [prefix, id] = clickEvent.target.id.split("--")
    
                const message = new CustomEvent("associateButtonClicked", {
                    detail: {
                        criminalId: id
                    }
                })
                eventHub.dispatchEvent(message)
            }
        })

    const render = (crimeCollection) => {
    contentElement.innerHTML = `
        ${
            crimeCollection.map(
                (currentCriminal) => {
                    return CriminalComponent(currentCriminal)
                }
            ).join("")
        }
   `
}
render(appStateCriminals)
}

export default CriminalList