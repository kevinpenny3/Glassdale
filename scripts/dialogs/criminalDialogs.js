import { useCriminals } from "../criminals/CriminalProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")


const DialogComponent = () => {

    eventHub.addEventListener("associateButtonClicked", event => {
        const criminals = useCriminals()
        console.log(event.detail.criminalId)

        /**
         * I've got all the criminals. I've got the id
         * of the criminal that was clicked.
         *
         * How does me get the full criminal object from the array?
         */
        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
        )


        const alibisHTML = foundCriminal.known_associates.map(
            (singleAssociate) => {
                return `
                    <div>
                        ${singleAssociate.name}: ${singleAssociate.alibi}
                    </div>
                `
            }
        ).join("")

        document.querySelector(".alibi__text").innerHTML = alibisHTML
        document.querySelector(".alibies").showModal()

    })

    eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("button--close")){
            const theDialog = event.target.parentNode
            theDialog.close();
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <dialog class="alibies">
                <div class="alibi__text"></div>
                <button class="button--close" id="closeDialog">Close Details</button>
            </dialog>
        `
    }

    render()
}

export default DialogComponent