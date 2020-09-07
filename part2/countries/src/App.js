import React, { useState, useEffect } from "react";
import axios from "axios";

import FilterForm from "./components/FilterForm";
import CountryList from "./components/CountryList";

function App() {
  let [data, setData] = useState([]);
  let [filter, setFilter] = useState("");
  let [filteredData, setFilteredData] = useState(data);

  const countriesHook = () => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => setData(response.data));
  };

  useEffect(countriesHook, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase());
    setFilteredData(
      data.filter((country) => country.name.toLowerCase().includes(filter))
    );
  };

  return (
    <div>
      <FilterForm onChange={handleFilterChange} filter={filter} />
      <CountryList filteredData={filteredData} />
    </div>
  );
}

export default App;
