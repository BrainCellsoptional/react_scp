import "bootstrap/dist/css/bootstrap.min.css";

{
  /*SCP data component*/
}
function SCP({ selectedSCP }) {
  if (!selectedSCP) return null;

  return (
    <div className="container my-3 text-start">
      {/*SCP Item & Class */}
      <h2 className="fw-bold">{selectedSCP.item}</h2>
      <h3 className="fw-bold">{selectedSCP.class}</h3>

      {/*Image + Containment */}
      <div className="row mb-3">
        {/*Image column */}
        {/*agian using the 2 cols to make the image mobile responsive*/}
        <div className="col-md-5 col-12">
          {/*agian not sure exactly how this works but images wont load on GitHub PAges without it*/}
          <img
            src={`${import.meta.env.BASE_URL}${selectedSCP.image}`}
            alt={selectedSCP.item}
            className="img-fluid rounded border border-dark border-4"
            style={{ maxHeight: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>

        {/*Containment column */}
        <div className="col-md-7 col-12">
          <p>
            <strong>Containment:</strong>
            <br />
            {selectedSCP.containment}
          </p>
        </div>
      </div>

      {/*Description row */}
      <div className="row">
        <div className="col-12">
          <p>
            <strong>Description:</strong>
            <br />
            {selectedSCP.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SCP;
