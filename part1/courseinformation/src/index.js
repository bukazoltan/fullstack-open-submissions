import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.title} {props.amount}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part title={props.data[0].name} amount={props.data[0].exercises} />
      <Part title={props.data[1].name} amount={props.data[1].exercises} />
      <Part title={props.data[2].name} amount={props.data[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:{" "}
      {props.data[0].exercises +
        props.data[1].exercises +
        props.data[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content data={course.parts} />
      <Total data={course.parts} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
