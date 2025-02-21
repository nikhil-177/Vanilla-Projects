import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('lightseagreen');
  console.log(inputValue);
  

  return (
    <>
      <div className='w-screen m-0 h-screen  flex justify-center items-center' style={{backgroundColor : inputValue}}>
        <div className='bg-white p-1.5'>
          <input type="color" 
          className='text-xl'
          onChange={(e) => setInputValue(e.target.value)}  
          />
        </div>
       
      </div>
    </>
  )
}

export default App
