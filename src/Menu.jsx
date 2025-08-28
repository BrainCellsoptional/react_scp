import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

function Menu({ scps, onSelect }) {
  return (
    <div className="container">
      <div className="row g-2">
        {scps.map((scp, index) => (
          <div key={index} className="col-6 col-md-2">
            <div
              className="bg-light text-dark text-center py-1 fs-5 rounded w-100 menu-item"
              style={{ cursor: "pointer", height: "40px" }}
              onClick={() => onSelect(scp)}
            >
              {scp.item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

