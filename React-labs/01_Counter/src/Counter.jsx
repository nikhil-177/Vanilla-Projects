import React, { useState } from 'react'

function Counter() {
    let [counter,setCounter] = useState(15)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(15)
    }

  return (
    <>
        <h1>Counter = {counter}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default Counter