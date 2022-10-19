import React, { useState } from 'react'
import './index.css'
const App = () => {
  const [state, setState] = useState(0)
  return (
    <div>
      <h1> value = ${state}</h1>
      <button onClick={() => setState(state + 1)}>CLICK ME</button>
    </div>
  )
}

export default App
