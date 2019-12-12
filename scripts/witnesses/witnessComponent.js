import { useWitnesses } from "./witnessProvider.js";




const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessFormContainer")

const witnessComponent = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showWitnesses") {
        const message = new CustomEvent("showWitnessButtonClicked")
    
        eventHub.dispatchEvent(message)
            }
        })

        const render = () => {
            contentTarget.innerHTML = `
            <div class="witnessHeader">Witnesses</div>
            <div class="witnesses__field">
            <Button type="submit" value="Show Witnesses" id="showWitnesses">Show Witnesses</button>
            <Button type="submit" value="Hide Witnesses" id="hideWitnesses">Hide Witnesses</button>
            </div>
            `
        }
        
        render()
        
        }
        
        export default witnessComponent
