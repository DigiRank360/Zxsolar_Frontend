import React from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import ServicesTabs from '../components/home/ServicesTabs'
import FeaturesStats from '../components/home/FeaturesStats'
import SkillsSection from '../components/home/SkillsSection'
import TrustedByIndustry from '../components/home/TrustedByIndustry'
import Testimonials from '../components/home/Testimonials'
import ConsultancyBar from '../components/home/ConsultancyBar'
import BlogSection from '../components/home/BlogSection'
import Chatbot from './Chatbot'

export default function HomePage() {
  return (
    <div id="top" className="min-h-screen bg-white font-sans text-gray-900 relative">
      <div className="site-frame">
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesTabs />
          <FeaturesStats />
          <SkillsSection />
          <TrustedByIndustry />
          <Testimonials />
          <ConsultancyBar />
          <BlogSection />
          <Chatbot />
        </main>
      </div>
    </div>
  )
}
