
import "./PatientCaseList.scss"
import {PatientDataType, PatientIdentifierType} from "./types"

type PatientCaseListProps = {
  patientIdentifier: PatientIdentifierType;
} & PatientDataType;

function PatientCaseList() {
  return (
      <a href="/case/99999">
      <div className="row patient-case-box">
        <div className="row row-cols-auto patient-case-title-row">
          <div className="col">Patient Case #952285</div>
        </div>
        <div className="row row-cols-auto">
          <div className="col"><em>Keywords:</em> Postnatal Depression, Anxiety</div>
          <div className="col">Submitted: 02/03/2023</div>
        </div>
      </div>
      </a>
  );
}

export default PatientCaseList;