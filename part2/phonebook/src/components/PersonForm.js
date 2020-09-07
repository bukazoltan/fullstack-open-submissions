import React from "react";

const PersonForm = ({
  nameChange,
  numberChange,
  nameValue,
  numberValue,
  handleClick,
}) => {
  return (
    <form>
      <div>
        name: <input type="text" onChange={nameChange} value={nameValue} />
      </div>
      <div>
        number: <input type="tel" onChange={numberChange} value={numberValue} />
      </div>
      <div>
        <button onClick={handleClick} type="submit">
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
