import "bootstrap/dist/css/bootstrap.min.css";
import "./Menu.css";

{
  /*SCP Menu Item Componet*/
}
function Menu({ scps, onSelect }) {
  return (
    /*The SCP Links are put in a container and then grid themselves to fill the space*/
    <div className="container">
      <div className="row g-2">
        {scps.map((scp, index) => (
          /*col-6 col-md-2 means the SCP Links with have a colum of 2 when on a full size screen and a column size of 2 when not*/
          /*This means there are 6 buttons on each row when on a full size screen and 2 when on a phone/tablet*/
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
