import { Suspense, lazy } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import Home from './home'
const About = lazy(() => import('./about'))
const Projects = lazy(() => import('./projects'))
const NotFound = lazy(() => import('./notfound'))

function App() {

  return (
    <Router>
      <Header />
      <Suspense fallback={<div className='pt-24 text-center text-gray-500'>Loading…</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
