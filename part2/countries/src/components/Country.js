import React, { useState, useEffect } from "react";
import axios from "axios";

import CountryInfo from "./CountryInfo";

const Country = ({ country, single }) => {
  const api_key = process.env.REACT_APP_API_KEY;

  let [weatherData, setWeatherData] = useState([]);
  const weatherHook = () => {
    const source = axios.CancelToken.source();

    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`,
        {
          cancelToken: source.token,
        }
      )
      .then(
        (response) => setWeatherData(response.data),
        (error) => {
          if (axios.isCancel(error)) {
          } else {
            throw error;
          }
        }
      );

    return () => {
      source.cancel();
    };
  };

  useEffect(weatherHook, []);

  const [showCountryInfo, setShowCountryInfo] = useState(single ? true : false);
  return (
    <div>
      {!single ? (
        <div>
          <p>{country.name}</p>
          <button onClick={() => setShowCountryInfo(!showCountryInfo)}>
            show
          </button>
        </div>
      ) : null}
      {showCountryInfo ? (
        <CountryInfo country={country} weatherData={weatherData.current} />
      ) : null}
    </div>
  );
};

export default Country;
