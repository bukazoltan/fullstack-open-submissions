import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Statistic = (props) => {
  return (<tr><td>{props.text}</td><td>{props.value}</td></tr>)
}

const Statistics = ({good, neutral, bad, avarage}) => {
  if (good === 0 && neutral === 0 && bad === 0) return <div>no statistics</div>
  return (
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/>
          <Statistic text="all" value={good + neutral + bad}/>
          <Statistic text="avarage" value={avarage}/>
          <Statistic text="positive" value={`${good / (good + neutral + bad) * 100}%`}/>
        </tbody>
      </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getAvarage = () => {
    return (good * 1 + bad * -1) / (good + neutral + bad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} avarage={getAvarage()}></Statistics>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)