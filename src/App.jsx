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
              src={`${import.meta.env.BASE_URL}l-03-5-1-1200x675.webp`}
              alt="Background"
              className="img-fluid rounded border border-dark border-4"
              style={{ maxHeight: "50vh", width: "100%", objectFit: "cover" }}
            />
          </div>
          {/* Default container: disappears when an SCP is selected */}
          {!selectedSCP && (
            <div className="col-12 my-2 p-4 border rounded bg-light">
              <h1 className="text-danger">About The SCP Foundation</h1>
              <div className="text-start">
              <h3 className="fw-bold">
                Mankind in its present state has been around for a quarter of a
                million years, yet only a small fraction of that has been of any
                significance.
              </h3>
              <p>
                <br></br>
                So, what did we do for nearly 250,000 years? We huddled in caves
                and around small fires, fearful of the things that we didn't
                understand. It was more than explaining why the sun came up, it
                was the mystery of enormous birds with heads of men and rocks
                that came to life. So we called them "gods" and "demons", begged
                them to spare us, and prayed for salvation. In time, their
                numbers dwindled and ours rose. The world began to make more
                sense when there were fewer things to fear, yet the unexplained
                can never truly go away, as if the universe demands the absurd
                and impossible.
              </p>
              <p>
                <strong>Mankind must not go back to hiding in fear. </strong>No
                one else will protect us, and we must stand up for ourselves.
                While the rest of mankind dwells in the light, we must stand in
                the darkness to fight it, contain it, and shield it from the
                eyes of the public, so that others may live in a sane and normal
                world.
              </p>
              <h3 className="text-danger">We secure. We contain. We protect. — <strong className="text-dark">The Administrator</strong></h3>
            </div>
            </div>
          )}
          {selectedSCP && <SCP selectedSCP={selectedSCP} />}
        </div>
      </div>
    </div>
  );
}

export default App;
