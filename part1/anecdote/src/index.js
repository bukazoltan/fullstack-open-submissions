import React, { useState } from "react";
import ReactDOM from "react-dom";

const VoteDisplay = ({ points, selected }) => {
  return <p>has {points[selected]} votes.</p>;
};

const AnecdoteDisplay = (props) => {
  if (props.points) {
    // determines the index of the anecdote with the highest score
    let mostVotesID = props.points.indexOf(Math.max(...props.points));
    return <p>{props.anecdotes[mostVotesID]}</p>;
  }
  return <p>{props.anecdotes[props.selected]}</p>;
};

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = (props) => {
  const [selected, setSelected] = useState(
    Math.floor(Math.random() * props.anecdotes.length)
  );
  const [points, setPoints] = useState(new Uint8Array(props.anecdotes.length));

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * props.anecdotes.length));
  };

  const handleVote = () => {
    let pointsCopy = [...points];
    pointsCopy[selected] += 1;
    setPoints(pointsCopy);
  };

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <AnecdoteDisplay anecdotes={props.anecdotes} selected={selected} />
      <VoteDisplay points={points} selected={selected} />
      <Button text="vote" handleClick={handleVote} />
      <Button text="next anecdote" handleClick={handleNext} />
      <h1>Anecdote with the most votes</h1>
      <AnecdoteDisplay anecdotes={props.anecdotes} points={points} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
