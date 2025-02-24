import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BeginnerCourses from './components/BeginnerCourses'
import IntermediateCourses from './components/IntermediateCourses'
import AdvancedCourses from './components/AdvancedCourses'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beginner" element={<BeginnerCourses />} />
          <Route path="/intermediate" element={<IntermediateCourses />} />
          <Route path="/advanced" element={<AdvancedCourses />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App 