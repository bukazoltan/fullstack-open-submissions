import React from "react";

const Total = ({ parts }) => {
  let sum = parts.reduce((acc, curr) => acc + curr.exercises, 0);
  return (
    <p>
      <strong>total of {sum} exercises</strong>
    </p>
  );
};

export default Total;
