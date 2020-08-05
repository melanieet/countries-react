import React, { useState } from "react";
import "./App.css";
import countriesAll from "./countriesAll.json";
import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import FilterRegion from "./FilterRegion";
import LargeCountryCard from "./LargeCountryCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function clickHandler(country) {
    setCountry(country);
  }

  function showAllCountries() {
    setCountry("");
  }

  return (
    <div>
      <div className="header">
        <h2 className="header-text">Where in the world?</h2>
      </div>

      {!country ? (
        <div>
          <div className="search">
            <SearchBar handleChange={handleChange} />
            <FilterRegion setRegion={setRegion} />
          </div>

          <div className="all-countries">
            {countriesAll
              .filter((country) => country.region.includes(region))
              .filter(
                (country) =>
                  country.name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  country.region
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
              )
              .map((country, index) => (
                <CountryCard
                  clickHandler={clickHandler}
                  oneCountry={country}
                  key={index}
                />
              ))}
          </div>
        </div>
      ) : (
        <LargeCountryCard
          country={country}
          showAllCountries={showAllCountries}
        />
      )}
    </div>
  );
}

export default App;
