/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */
import { useConvictions } from "./ConvictionsDataProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

const ConvictionSelect = () => {
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id==="crimeSelect") {
            const selectedCrime = changeEvent.target.value
            const crimeNewMessage = new CustomEvent("crimeSelected", {
                detail: {
                    crime: selectedCrime
                }
            })

            eventHub.dispatchEvent(crimeNewMessage)
        }
    })



    const render = convictionsCollection => {

        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${
                    convictions.map(convictions =>
                        `<option>${convictions.split(",").join(" ")}</option>`
                    ).join("")
                }
            </select>
        `
    }

    render(convictions)
}


export default ConvictionSelect