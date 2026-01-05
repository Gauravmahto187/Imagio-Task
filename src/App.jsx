import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import Program from './components/Program'
import Accommodation from './components/Accommodation'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Program />
      <Accommodation />
      <Footer />
    </div>
  )
}

export default App
