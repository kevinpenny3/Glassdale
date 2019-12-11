import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./CriminalComponent.js";



const eventHub = document.querySelector(".container")

const CriminalList = () => {
    const contentElement = document.querySelector(".criminalsContainer")
    

    const appStateCriminals = useCriminals()

    eventHub.addEventListener('crimeSelected', event => {
        const crimeName = event.detail.crime

            const filteredCriminals = appStateCriminals.filter(
                (individualCriminal) => {
                    if(individualCriminal.conviction === crimeName)
                    {
                        return individualCriminal
                    }
                }
            )
            render (filteredCriminals)
            console.log(filteredCriminals)

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