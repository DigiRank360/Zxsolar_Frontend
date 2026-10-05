import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import Header from './components/common/Header'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import ScrollReveal from './components/common/ScrollReveal'
import { QuoteModalProvider } from './components/common/QuoteModalContext'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import Contact from './pages/Contact'
import ServicePage from './pages/ServicePage'
import ReferralPage from './pages/ReferralPage'

// App.jsx ke andar hi Layout component define kar diya gaya hai
function SharedLayout() {
  return (
    <QuoteModalProvider>
      <div id="top" className="min-h-screen bg-white font-sans text-gray-900 flex flex-col justify-between relative">
        <div className="site-frame">
          <Header />
          <Navbar />
          <main>
            <ScrollReveal />
            {/* Outlet ki jagah par active page (HomePage ya Contact) render hoga */}
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </QuoteModalProvider>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}

function AppRoutes() {
  return (
    <Routes>
      {/* SharedLayout ke andar sabhi routes ko wrap kar diya gaya hai */}
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="refer-a-friend" element={<ReferralPage />} />
        <Route path="services" element={<Navigate to="/services/solar-power-plants" replace />} />
        <Route path="news" element={<Navigate to="/projects" replace />} />
        <Route path="services/solar-power-plants" element={<ServicePage type="solar-power-plants" />} />
        <Route path="services/residential" element={<ServicePage type="residential" />} />
        <Route path="services/industrial" element={<ServicePage type="industrial" />} />
        <Route path="services/commercial" element={<ServicePage type="commercial" />} />
        <Route path="services/pm-surya-ghar-mufti-yojana" element={<ServicePage type="pm-surya-ghar-mufti-yojana" />} />
      </Route>
    </Routes>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  )
}

export default App