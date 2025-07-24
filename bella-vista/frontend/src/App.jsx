import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'


import './App.css'



function HomePage() 
{
  return (
    <div className="app">

      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
      <Footer />

    </div>
  )
}
function App() 
{
  return (
    <Router>
      <Routes>
        {/* Public site */}
        <Route path="/" element={<HomePage />} />

        {/* Admin pages */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

      </Routes>
    </Router>
  );
}


export default App
