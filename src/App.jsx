import Menu from "./Menu";
import SCP from "./SCP";
import { useState } from "react";
import data from "./data.json";
import "./App.css"; // optional for extra styling
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [scps, setSCPs] = useState(data);
  const [selectedSCP, setSelectedSCP] = useState(null);

  return (
    <div className="bg-offwhite p-3">
      <div className="app-container d-flex flex-column align-items-center text-center">
        <div className="content container my-4 p-4 striped-border shadow-lg bg-white rounded row">
          <div className="text-warning py-2 bg-dark rounded col-md-8 col-12">
            <h1 className="text-decoration-underline">SCP React Application</h1>
            <div className="d-flex">
              <Menu scps={scps} onSelect={setSelectedSCP} />
            </div>
          </div>
          <div className="col-md-4 col-12 my-2">
            <img
              src={
                selectedSCP
                  ? `${import.meta.env.BASE_URL}${selectedSCP.image}`
                  : ""
              }
              alt={selectedSCP?.item || ""}
              className="img-fluid rounded border border-dark border-4"
              style={{ maxHeight: "50vh", width: "100%", objectFit: "cover" }}
            />
          </div>
          {selectedSCP && <SCP selectedSCP={selectedSCP} />}
        </div>
      </div>
    </div>
  );
}

export default App;
