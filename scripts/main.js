import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalList from "./criminals/CriminalList.js";
import ConvictionSelect from "./convictions/ConvictionsSelect.js";
import { getConvictions } from "./convictions/ConvictionsDataProvider.js";
import noteFormComponent from "./notes/noteForm.js";
import NoteListComponent from "./notes/notesList.js";
import { getNotes } from "./notes/NoteProvider.js";
import initializeDetailButtonEvents from "./dialogs/criminalDialogs.js";




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


// getCriminals().then(CriminalListComponent) ---- short hand version