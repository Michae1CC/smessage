import "./App.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PatientCaseList from "./PatientCaseList";
import DetailedPatientCase from "./DetailedPatientCase";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PatientCaseList />
    },
    {
      path: "/case/:patientId",
      element: <DetailedPatientCase />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
