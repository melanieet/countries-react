import React from "react";
import "./App.css";
import countriesAll from "./countriesAll.json";
import CountryCard from "./CountryCard";

function App() {
  return (
    <div>
      <div className="header">
        <h2 className="header-text">Where in the world?</h2>
      </div>
      <div className="all-countries">
        {countriesAll.map((country) => {
          return <CountryCard oneCountry={country} />;
        })}
      </div>
    </div>
  );
}

export default App;
