import React from "react"
import Diagramm from "./components/Diagramm/Diagramm"

import { Routes, Route } from "react-router-dom"

import { Dashboard } from "./pages/Dashboard"
import { Layout } from "./pages/Layout"


function App() {

  return (
    <Layout>
      <Routes>
        <Route index path="/" element={<Dashboard/>}/>
      </Routes>
    </Layout>
  )
}

export default App
