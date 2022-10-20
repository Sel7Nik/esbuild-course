import React, { useState } from 'react'
import './index.css'
//@ts-ignore
import Logo from '../public/img/bike-1.jpg'

const App = () => {
  const [state, setState] = useState<number>(1)
  return (
    <div>
      <img src={Logo} alt="jpg" />
      <h1> value = ${state}</h1>
      <button onClick={() => setState(state + 1)}>CLICK ME</button>
    </div>
  )
}

export default App
