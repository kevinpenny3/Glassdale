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
                    <div></br>Conviction: </br>${criminal.conviction}</div>
                    <div></br>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
                    <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
                </div>
                <div class="associatesButton">
                    <button class="criminalDialogButton" id="associates--${criminal.id}">Known Associates</button>
                </section>
            <aside class="criminal--picture">
            <div class="criminal--img">
                <img src="defaultProfile.png" alt="criminal picture">
            </div>
            </aside>
            </main>

        </section>
     `   

}

export default CriminalComponent