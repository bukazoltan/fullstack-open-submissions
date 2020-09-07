import React from "react";

const Person = ({ name, number, id, handleClick }) => {
  return (
    <p>
      {name} {number}{" "}
      <button onClick={(e) => handleClick(e, id, name)}>delete</button>
    </p>
  );
};

export default Person;
