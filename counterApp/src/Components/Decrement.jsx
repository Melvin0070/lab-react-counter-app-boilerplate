import React from 'react'

function Decrement() {
  return (
    <div className="card">
    <button onClick={() => setCount((count) => 0)}>
    Reset
    </button>
  </div>
  )
}

export default Decrement
