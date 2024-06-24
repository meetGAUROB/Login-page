import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Basic Concept of Context hook</h1>
      <Login/>
      <Profile/>
    </>
  )
}

export default App
