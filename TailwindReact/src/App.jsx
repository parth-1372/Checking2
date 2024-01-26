import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App(props) {
  let myObj = {
    username: "PArth",
    Age: 18
  }
  
  return (
    <>
   <Card someobj={myObj} />

    </>
  )
}

export default App
