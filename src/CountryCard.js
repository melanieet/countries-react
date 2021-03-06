import React from "react";

function CountryCard({ oneCountry, clickHandler }) {
  return (
    <div className="one-country">
      <img
        className="img"
        onClick={() => clickHandler(oneCountry)}
        src={oneCountry.flag}
        alt="country flag"
      ></img>

      <div className="info">
        <h3 className="heading">{oneCountry.name}</h3>

        <p>
          <strong>Population:</strong> {oneCountry.population.toLocaleString()}
        </p>

        <p>
          <strong>Region:</strong> {oneCountry.region}
        </p>

        <p>
          <strong>Capital:</strong> {oneCountry.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
