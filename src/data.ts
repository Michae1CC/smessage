import {PatientRecordsType} from "./types"

// This would usually be queried through a some sort of api call to a db.
export const mockPatientData: PatientRecordsType = {
    "023855": {
        dateSubmitted: "02/08/2023",
        keywords: ["PTSD"],
        description: "Patient has started showing concern over former abusive partner."
    },
    "423892": {
        dateSubmitted: "01/01/2023",
        keywords: ["Postnatal depression", "Anxiety"],
        description: "Patient experience heightened levels on insomina after birth."
    },
}