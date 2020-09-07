import React from "react";
import Country from "./Country";

function CountryList({ filteredData }) {
  if (filteredData.length === 0) {
    return <div>No country found.</div>;
  }

  if (filteredData.length > 10) {
    return <div>Too many matches, specify another filter.</div>;
  }

  if (filteredData.length > 1) {
    return (
      <div>
        {filteredData.map((country) => (
          <Country key={country.numericCode} country={country} />
        ))}
      </div>
    );
  }
  return <Country single={true} country={filteredData[0]} />;
}

export default CountryList;
