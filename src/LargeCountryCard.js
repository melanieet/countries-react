import React from "react";

function LargeCountryCard({ country, showAllCountries }) {
  return (
    <div>
      <div>
        <button className="back-button" onClick={() => showAllCountries()}>
          Back
        </button>
      </div>
      <div className="large-country-card">
        <img className="flag" src={country.flag} alt="Country flag"></img>

        <div className="first-column">
          <h2>{country.name}</h2>
          <p>
            <strong>Native name: </strong>
            {country.nativeName}
          </p>

          <p>
            <strong>Population: </strong>
            {country.population.toLocaleString()}
          </p>

          <p>
            <strong>Region: </strong>
            {country.region}
          </p>

          <p>
            <strong>Sub Region: </strong>
            {country.subregion}
          </p>

          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>

        <div className="second-column">
          <p>
            <strong>Top Level Domain: </strong>
            {country.topLevelDomain}
          </p>

          <p>
            <strong>Currencies: </strong>
            {country.currencies[0].name}
          </p>

          <p>
            <strong>Languages: </strong>
            {country.languages.map((language, index) => {
              return (
                <span key={index}>
                  {language.name}
                  {index < country.languages.length - 1 ? ", " : ""}
                </span>
              );
            })}
          </p>
        </div>
      </div>

      <div className="border-countries">
        <p>
          <strong>Border countries: </strong>
          {country.borders.map((place, index) => {
            return <button key={index}>{place}</button>;
          })}
        </p>
      </div>
    </div>
  );
}

export default LargeCountryCard;
