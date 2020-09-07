import React from "react";
import WeatherInfo from "./WeatherInfo";

function CountryInfo({ country, weatherData }) {
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
      </div>
      <h2>languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.iso639_2}>{language.name}</li>
        ))}
      </ul>
      <img
        width="200px"
        src={country.flag}
        alt={`The flag of ${country.name}`}
      ></img>
      {weatherData ? (
        <WeatherInfo data={weatherData} capital={country.capital} />
      ) : null}
    </div>
  );
}

export default CountryInfo;
