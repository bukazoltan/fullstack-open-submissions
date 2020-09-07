import React from "react";
import Person from "./Person";

const Persons = ({ persons, handleClick }) => {
  return persons.map((person) => (
    <Person
      id={person.id}
      key={person.id}
      name={person.name}
      number={person.number}
      handleClick={handleClick}
    />
  ));
};

export default Persons;
