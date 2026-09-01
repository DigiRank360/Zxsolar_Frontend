import React from 'react'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ServicesTabs from '../components/home/ServicesTabs'
import FeaturesStats from '../components/home/FeaturesStats'
import SkillsSection from '../components/home/SkillsSection'
import Testimonials from '../components/home/Testimonials'
import ConsultancyBar from '../components/home/ConsultancyBar'
import BlogSection from '../components/home/BlogSection'
import Footer from '../components/common/Footer'

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-gray-900 relative">
      <div className="site-frame">
        <Header />
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesTabs />
          <FeaturesStats />
          <SkillsSection />
          <Testimonials />
          <ConsultancyBar />
          <BlogSection />
        </main>
      </div>
      <Footer />
    </div>
  )
}
