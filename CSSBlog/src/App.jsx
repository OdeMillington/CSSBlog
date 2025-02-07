import { useState } from 'react'
import HomePage from "/pages/HomePage"
import {BrowserRouter, Route, Routes} from "react-router-dom"

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomePage/>
    </>
  )
}

export default App
