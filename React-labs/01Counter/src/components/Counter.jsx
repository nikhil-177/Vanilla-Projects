import { useState } from "react"
import './Counter.css'

export const CounterProgram = () => {

    const [counter, setCounter] = useState(1);

    const [inputValue, setInputValue] = useState(1);

    function IncrementValue(){
        setCounter(counter + inputValue);
        
    }

    function DecrementValue(){
        setCounter(counter - inputValue);
    }

    function ResetValue(){
        setCounter(1);
    }

    return (
        <>
            <div className="main-container">
                <div className="container">
                    <h1>Counter Program</h1>
                    <span>Counter :</span> 
                    <span className="counter">{counter}</span>
                    <label htmlFor="input">Increase by :</label>
                    <input type="number"
                    id="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                    />
                    <div className="btn">
                        <button
                        onClick={IncrementValue}
                        disabled={counter >= 100}
                        >
                            Increment</button>
                        <button
                        onClick={DecrementValue}
                        disabled={counter <= 1}
                        >   
                            Decrement</button>
                        <button
                        onClick={ResetValue}
                        >   
                            Reset</button>
                    </div>
                </div>    
            </div>
        </>
    )
}