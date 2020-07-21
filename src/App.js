import React, { useState, useEffect } from "react";
import "./App.css";
import countriesAll from "./countriesAll.json";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = countriesAll.filter(
      (country) =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <div className="header">
        <h2 className="header-text">Where in the world?</h2>
      </div>
      <div>
        <SearchBar handleChange={handleChange} />
      </div>
      <div className="all-countries">
        {searchResults.map((country, index) => {
          return <CountryCard oneCountry={country} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
