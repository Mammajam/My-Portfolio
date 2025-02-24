import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Home from './home'
import About from './about'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
