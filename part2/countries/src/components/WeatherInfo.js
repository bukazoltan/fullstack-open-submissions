import React from "react";

const WeatherInfo = ({ data, capital }) => (
  <div>
    <h2>weather in {capital}</h2>
    <div>temperature: {data.temperature}</div>
    <img src={data.weather_icons} alt={data.weather_descriptions}></img>
    <div>
      wind: {data.wind_speed} direction {data.wind_dir}
    </div>
  </div>
);

export default WeatherInfo;
