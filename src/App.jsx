import React from "react"

import { Routes, Route } from "react-router-dom"

import { Dashboard } from "./pages/Dashboard"


function App() {

  return (
    <Routes>
        <Route index path="/" element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
