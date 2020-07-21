import React from "react";

function SearchBar({ handleChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default SearchBar;
