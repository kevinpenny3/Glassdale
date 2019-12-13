import { getWitnesses, useWitnesses } from "./witnessProvider.js"
import CriminalList from "../criminals/CriminalList.js"



const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

const WitnessListComponent = () => {
    eventHub.addEventListener("showWitnessButtonClicked", event => {
        getWitnesses().then(
            () => {
                const allWitnesses = useWitnesses()
                render(allWitnesses)
            }
        )
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "hideWitnesses")
        CriminalList()
    })

    const render = (witnessCollection) => {
        
        
        contentTarget.innerHTML = witnessCollection.map(
            (individualWitness) => {
                return  `
                <section class="displayedWitness">
                <div class="witnessName">${individualWitness.name}</div>
                <div class="witnessStatement">Statements: </br>${individualWitness.statements}</div>
                </section>
                `
            }
        ).join("")
    }
}

export default WitnessListComponent
