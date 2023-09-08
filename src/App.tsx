import "./App.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PatientCaseList from "./PatientCaseList";
import DetailedPatientCase from "./DetailedPatientCase";
import Chat from "./Chat" 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PatientCaseList />
    },
    {
      path: "/chat",
      element: <Chat />
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
