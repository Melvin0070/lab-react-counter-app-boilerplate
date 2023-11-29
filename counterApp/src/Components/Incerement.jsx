import React from 'react'
import { useState } from 'react'


function Incerement() {
    const [count, setCount] = useState(0)
  return (
    <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      + 
    </button>
  </div>
  )
}

export default Incerement
