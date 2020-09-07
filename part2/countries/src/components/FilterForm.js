import React from "react";

const FilterForm = ({ onChange, filter }) => {
  return (
    <form>
      <label>find countries: </label>
      <input type="text" onChange={onChange} value={filter}></input>
    </form>
  );
};

export default FilterForm;
