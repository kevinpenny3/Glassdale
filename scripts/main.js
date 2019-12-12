import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalList from "./criminals/CriminalList.js";
import ConvictionSelect from "./convictions/ConvictionsSelect.js";
import { getConvictions } from "./convictions/ConvictionsDataProvider.js";
import noteFormComponent from "./notes/noteForm.js";
import NoteListComponent from "./notes/notesList.js";
import { getNotes } from "./notes/NoteProvider.js";
import initializeDetailButtonEvents from "./dialogs/criminalDialogs.js";
import { getWitnesses } from "./witnesses/witnessProvider.js";
import WitnessListComponent from "./witnesses/witnessList.js";
import witnessComponent from "./witnesses/witnessComponent.js";



getNotes().then(
    () => NoteListComponent()
)

noteFormComponent()

getCriminals().then(
    () => CriminalList()
    ).then(
    () => initializeDetailButtonEvents()
    )
    
getConvictions().then(
    () => ConvictionSelect()
)

getWitnesses().then(
    () => WitnessListComponent()
    ).then(
    () => witnessComponent()
    )


// getCriminals().then(CriminalListComponent) ---- short hand version