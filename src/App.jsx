import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import ServicePage from './pages/ServicePage'

// App.jsx ke andar hi Layout component define kar diya gaya hai
function SharedLayout() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-gray-900 flex flex-col justify-between relative">
      <div className="site-frame">
        <Header />
        <Navbar />
        <main>
          {/* Outlet ki jagah par active page (HomePage ya Contact) render hoga */}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        {/* SharedLayout ke andar sabhi routes ko wrap kar diya gaya hai */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="services/solar-power-plants" element={<ServicePage type="solar-power-plants" />} />
          <Route path="services/residential" element={<ServicePage type="residential" />} />
          <Route path="services/industrial" element={<ServicePage type="industrial" />} />
          <Route path="services/commercial" element={<ServicePage type="commercial" />} />
          <Route path="services/pm-surya-ghar-mufti-yojana" element={<ServicePage type="pm-surya-ghar-mufti-yojana" />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App