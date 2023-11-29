import React from 'react'

function Reset() {
  return (
    <div className="card">
    <button onClick={() => setCount((count) => count - 1)}>
      - 
    </button>
  </div>
  )
}

export default Reset
