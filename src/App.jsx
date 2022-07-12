import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import NavBar from './Components/Navbar'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavBar />
      
      {/* the outlet component renders the component currently selected in the url */}
      <Outlet /> 

    </div>
  )
}

export default App
