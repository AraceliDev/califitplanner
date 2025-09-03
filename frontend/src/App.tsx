import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Rutinas from './pages/Rutinas'
import Recursos from './pages/Recursos'
import TestSimple from './pages/TestSimple'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <BrowserRouter>
    <Header /> 
        <Routes>
          <Route path="/" element={<TestSimple />} />
          <Route path="/test" element={<TestSimple />} />
          <Route path="/home" element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/rutinas" element={<Rutinas />} />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
    <Footer />  
    </BrowserRouter>
  )
}

export default App