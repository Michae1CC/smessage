// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";

function App() {
  // https://getbootstrap.com/docs/4.3/utilities/overflow/
  // https://bootsnipp.com/snippets/6XlB5
  return (
    <>
      <div className="container-fluid outer">
        <div className="row justify-content-center h-100">
          <div className="h-100 d-flex flex-column">
            <div className="row justify-content-center flex-grow-1 main-display">
              <div className="text-white">ROW 2 - grow remaining height</div>
            </div>
            <div className="row justify-content-center main-input">
              <div className="input-group" style={{ padding: "2px" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
