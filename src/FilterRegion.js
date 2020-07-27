import React from "react";

function FilterRegion({ setRegion }) {
  function handleSelect(event) {
    setRegion(event.target.value);
  }

  return (
    <select onChange={handleSelect}>
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default FilterRegion;
