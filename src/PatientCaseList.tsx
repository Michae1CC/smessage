
import "./PatientCaseList.scss"

function PatientCaseList() {
  return (
    <div className="container-fluid outer-container">
      <div className="row patient-case-box">
        <div className="row row-cols-auto patient-case-title-row">
          <div className="col">Patient Case #952285</div>
        </div>
        <div className="row row-cols-auto">
          <div className="col"><em>Keywords:</em> Postnatal Depression, Anxiety</div>
          <div className="col">Submitted: 02/03/2023</div>
        </div>
      </div>
    </div>
  );
}

export default PatientCaseList;