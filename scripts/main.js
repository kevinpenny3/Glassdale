import { getCriminals } from "./criminals/CriminalProvider.js";
import CriminalList from "./criminals/CriminalList.js";
import ConvictionSelect from "./convictions/ConvictionsSelect.js";
import { getConvictions } from "./convictions/ConvictionsDataProvider.js";
import noteFormComponent from "./notes/noteForm.js";
import NoteListComponent from "./notes/notesList.js";
import { getNotes, deleteNote } from "./notes/NoteProvider.js";
import { getWitnesses } from "./witnesses/witnessProvider.js";
import WitnessListComponent from "./witnesses/witnessList.js";
import witnessComponent from "./witnesses/witnessComponent.js";
import OfficerSelect from "./officers/officerSelect.js";
import { getOfficers } from "./officers/OfficerProvider.js";
import DialogComponent from "./dialogs/criminalDialogs.js";



getOfficers().then(
    () => OfficerSelect()
)

getNotes().then(
    () => NoteListComponent()
)

noteFormComponent()

getCriminals().then(
    () => CriminalList()
    ).then(
    () => DialogComponent()
    )
    
getConvictions().then(
    () => ConvictionSelect()
)

getWitnesses().then(
    () => WitnessListComponent()
    ).then(
    () => witnessComponent()
    )