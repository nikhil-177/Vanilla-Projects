import { use, useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  const increase = () => {
      setCounter(counter + 1)
  }

  const decrease = () => {
      setCounter(counter - 1)
  }

  return (
    <>
      <h1>Counter Program</h1>
      <h2>h= {counter}</h2>
      <div>div= {counter}</div>
      <p>p= {counter}</p>
      <button onClick={increase} >increase</button>
      <br />
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App
