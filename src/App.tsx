import "./App.scss";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import PatientCaseList from "./PatientCaseList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PatientCaseList />
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
