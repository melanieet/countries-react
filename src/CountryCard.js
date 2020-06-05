import React from "react";

const CountryCard = (props) => {
  return (
    <div className="one-country">
      <img className="img" src={props.oneCountry.flag} alt="country flag"></img>
      <div className="info">
        <h3 className="heading">{props.oneCountry.name}</h3>
        <p>
          <strong>Population:</strong> {props.oneCountry.population}
        </p>
        <p>
          <strong>Region:</strong> {props.oneCountry.region}
        </p>
        <p>
          <strong>Capital:</strong> {props.oneCountry.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
