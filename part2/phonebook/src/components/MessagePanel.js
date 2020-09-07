import React from "react";

const positiveMessage = {
  color: "green",
  width: "95%",
  background: "whitesmoke",
  margin: "2 auto",
  padding: "5px",
  border: "green 3px solid",
  borderRadius: 5,
};

const negativeMessage = {
  ...positiveMessage,
  color: "red",
  border: "red 3px solid",
};

const MessagePanel = ({ message }) => {
  if (message === null) return null;
  if (message.isPositive)
    return <h2 style={positiveMessage}>{message.message}</h2>;
  return <h2 style={negativeMessage}>{message.message}</h2>;
};

export default MessagePanel;
