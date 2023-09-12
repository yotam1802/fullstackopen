import { useState } from 'react'

const Statistics = ({ all, average, positive }) => {
  return (
    <>
        all {all}
        <br></br>
        average {average}
        <br></br>
        positive {positive}%
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good + (bad * -1)) / all
  const positive = good / all * 100

  const handleGood = () => {
    const newGood = good + 1
    console.log("Number of Good Feedback", {newGood})
    setGood(newGood)
  }

  const handleNeutral = () => {
    const newNeutral = neutral + 1
    console.log("Number of Neutral Feedback", {newNeutral})
    setNeutral(newNeutral)
  }

  const handleBad = () => {
    const newBad = bad + 1
    console.log("Number of Bad Feedback", {newBad})
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>

      <div>
        <button onClick={handleGood}>good</button>
        <button onClick={handleNeutral}>neutral</button>
        <button onClick={handleBad}>bad</button>
      </div>

      <h1>statistics</h1>
      
      <div>
        <p>
          good {good}
          <br></br>
          neutral {neutral}
          <br></br>
          bad {bad}
          <br></br>
          <Statistics all={all} average={average} positive={positive}/>
        </p>
      </div>
    </div>
  )
}

export default App