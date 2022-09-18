import React from "react";
// import { Dropdown } from "reactstrap";

function DropDown({ drop, dropSet }) {
  const handleChange = (e) => {
    dropSet(e.target.value);
  };
  return (
    <span className="drop">
      <select className="button" value={drop} onChange={handleChange}>
        <option value="sculptures">Sculptures</option>
        <option value="map">Map</option>
      </select>
    </span>
  );
}

export default DropDown;
