import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Home from './home'
import About from './about'
import Projects from './projects'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
