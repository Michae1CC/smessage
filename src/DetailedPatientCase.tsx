
import "./DetailedPatientCase.scss"
import {useParams} from "react-router-dom";

function DetailedPatientCase() {
    const {patientId} = useParams();
    return (
        <h1>{patientId}</h1>
    )
}

export default DetailedPatientCase;