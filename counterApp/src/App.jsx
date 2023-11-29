import { useState } from 'react'
import './App.css'
import Incerement from '../src/Components/Incerement'
import Decrement from '../src/Components/Decrement'
import Reset from '../src/Components/Reset'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>

      <h1>{count}</h1>

      <div className='flexbox'>
        <Incerement/>
        <Decrement/>
        <Reset/>
      </div>
      
    </>
  )
}

export default App
