import React, { useState, useEffect } from "react";
import personService from "./services/persons";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import MessagePanel from "./components/MessagePanel";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [message, setMessage] = useState(null);

  const hook = () => {
    personService.getAll().then((response) => setPersons(response));
  };

  useEffect(hook, []);

  const updateMessage = (message, time, isPositive) => {
    setMessage({ message, isPositive });
    setTimeout(() => setMessage(null), time);
  };

  const handleAddClick = (e) => {
    e.preventDefault();
    if (newName.length === 0) return;
    if (persons.some((person) => person.name === newName)) {
      if (
        !window.confirm(
          `${newName} is already in the phonebook. Replace the old number with the new one?`
        )
      ) {
        return;
      }
      let duplicate = persons.find((person) => person.name === newName);
      personService
        .updateItem(duplicate.id, {
          ...duplicate,
          number: newNumber,
        })
        .then((response) => {
          const elementIndex = persons.findIndex(
            (element) => element.id === duplicate.id
          );
          const personsCopy = [...persons];
          personsCopy[elementIndex] = response;
          setPersons(personsCopy);
          updateMessage(
            `The number  of ${response.name} has been replaced.`,
            2000
          );
        });
      return;
    }
    const personList = persons;
    let newPerson = {
      name: newName,
      number: newNumber,
    };
    personService
      .create(newPerson)
      .then((response) => setPersons(personList.concat(response)));
    updateMessage(`${newName} has been added to the list.`, 2000, true);
    setNewName("");
    setNewNumber("");
  };

  const handleDeleteClick = (e, id, name) => {
    e.preventDefault();
    personService
      .deleteItem(id)
      .then((response) => {
        updateMessage(`${name} has been deleted from the list.`, 2000, true);
        let newArray = persons.filter((person) => person.id !== id);
        setPersons(newArray);
        console.log(response);
      })
      .catch((error) =>
        updateMessage(
          `The entry of "${name}" has been already deleted`,
          2000,
          false
        )
      );
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filtering = (filter, list) => {
    return list.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <MessagePanel message={message} />
      <Filter onChange={handleFilterChange} value={filter} />
      <h2>Add a new</h2>
      <PersonForm
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
        nameValue={newName}
        numberValue={newNumber}
        handleClick={handleAddClick}
      />
      <h2>Numbers</h2>
      <Persons
        persons={filtering(filter, persons)}
        handleClick={handleDeleteClick}
      />
    </div>
  );
};

export default App;
