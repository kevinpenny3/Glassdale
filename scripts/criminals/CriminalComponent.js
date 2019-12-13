const CriminalComponent = (criminal) => {
    let criminalName = criminal.name.split(" ").join("-")

    return `
        <section class="criminal--card">
            <header class="criminalFullName">${criminal.name}</header>
            <br>
            <main class="criminal">
                <section class="left--block"
                <div class="criminal--info">
                    <div>Age: ${criminal.age}</div>
                    <div>Conviction: ${criminal.conviction}</div>
                    <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
                    <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
                </div>
                <div class="associatesButton">
                    <button class="criminalDialogButton" id="criminal--${criminalName}">Known Associates</button>
                    <dialog class="dialog--button" id="details--${criminalName}">
                    <div>Known Associates</div>
                        <div>Associate: ${criminal.known_associates.map((individualName) =>{return individualName.name}).join(", ")} </div>
                        <div>Alibi: ${criminal.known_associates.map((individualAlibi) => {return individualAlibi.alibi}).join(", ")} </div>
                    <button class="button--close">Close Dialog</button>
                    </dialog>
                </div>
                </section>
            <aside class="criminal--picture">
                <div class="criminal--img">
                <img src="defaultprofile.png" alt="criminal">
                </div>
            </aside>
            </main>

        </section>
     `   

}

export default CriminalComponent