import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  Check, 
  Factory,
  Home,
  Landmark,
  Sun, 
  ArrowRight
} from 'lucide-react'
import pmImage from '../../assets/pm.png'

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(4)

  const tabsData = [
    {
      num: '01',
      title: 'Solar Power Plants',
      Icon: Sun,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=85',
      description1: 'Utility-scale solar power plants designed to generate dependable clean electricity for large facilities, institutions, and industrial operations.',
      description2: 'From feasibility and system design to installation, grid integration, and monitoring, our team manages the complete solar project lifecycle.',
      checkpoints: [
        'Site Feasibility & Design',
        'High-Performance Solar Modules',
        'Grid Integration & Net Metering',
        'Remote Performance Monitoring'
      ]
    },
    {
      num: '02',
      title: 'Residential Solar',
      Icon: Home,
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1600&q=85',
      description1: 'Customized rooftop solar systems for homes that help reduce monthly electricity bills and create reliable, clean power for everyday needs.',
      description2: 'We assess your roof, consumption, and budget to recommend the right on-grid or hybrid solution with professional installation and support.',
      checkpoints: [
        'Rooftop Inspection',
        'On-Grid & Hybrid Systems',
        'Savings-Based System Design',
        'Professional Installation'
      ]
    },
    {
      num: '03',
      title: 'Industrial Solar',
      Icon: Factory,
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1600&q=85',
      description1: 'High-capacity solar solutions for factories, warehouses, and industrial units looking to control operating costs and energy demand.',
      description2: 'Our engineering team plans systems around your load profile, available space, safety requirements, and long-term return on investment.',
      checkpoints: [
        'Load & Energy Audit',
        'Industrial Rooftop Design',
        'High-Efficiency Inverters',
        'Operations & Maintenance Support'
      ]
    },
    {
      num: '04',
      title: 'Commercial Solar',
      Icon: Landmark,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=85',
      description1: 'Smart solar systems for offices, shops, schools, hospitals, and commercial properties that want predictable energy savings.',
      description2: 'We deliver a practical end-to-end plan covering design, installation, financing guidance, subsidy support, and net-metering assistance.',
      checkpoints: [
        'Commercial Energy Assessment',
        'Custom Rooftop Solar Design',
        'Financing & Subsidy Guidance',
        'Net Metering Assistance'
      ]
    },
    {
      num: '05',
      title: 'PM Surya Ghar Muft Bijli Yojana',
      Icon: Sun,
      image: pmImage,
      description1: 'Get expert help to understand rooftop solar eligibility, system sizing, subsidy benefits, and the application process under PM Surya Ghar.',
      description2: 'Our team supports you from consultation and documentation to installation, net metering, and getting your home ready to generate solar power.',
      checkpoints: [
        'Eligibility & Savings Assessment',
        'Subsidy Documentation Support',
        'Rooftop Solar Installation',
        'Net Metering Process Support'
      ]
    }
  ]

  const currentContent = tabsData[activeTab]

  return (
    <section className="relative bg-[#f8faf9] px-6 py-20 lg:px-16 lg:py-28 overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-[#2e7d32]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-[#d4aa51]/10 blur-[120px]" />

      <div className="mx-auto  relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/20">
            <span className="h-2 w-2 rounded-full bg-[#2e7d32] animate-pulse" />
            <span className="text-[#2e7d32] text-xs font-bold uppercase tracking-widest">
              Services We Offer
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0d1714] leading-[1.15]">
            Complete solar solutions{' '}
            <span className="relative inline-block text-[#2e7d32]">
              solutions.
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8C45 2 123 2 197 6"
                  stroke="#d4aa51"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="mb-12 overflow-hidden  border border-gray-200 bg-white shadow-lg">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200/80 sm:grid-cols-3 md:grid-cols-5 md:divide-y-0">
            {tabsData.map((tab, idx) => {
              const IconComponent = tab.Icon
              const isActive = activeTab === idx

              return (
                <button
                  key={tab.num}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative flex flex-col justify-between p-6 text-left transition-all duration-300 ease-out focus:outline-none overflow-hidden ${
                    isActive
                      ? 'bg-ecoDark text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-900/[0.03]'
                  }`}
                >
                  {/* Active Card Glow Background */}
                  {isActive && (
                    <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-ecoGreen/30 blur-2xl" />
                  )}

                  {/* Mouse Hover Animated Shine Sweep Line */}
                  <span className="absolute inset-x-0 top-0 h-[2px] -translate-x-full bg-gradient-to-r from-transparent via-ecoGreen to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full z-20" />


                  {/* Top Number Tag & Status Indicator */}
                  <div className="relative z-10 flex items-center justify-between w-full mb-6">
                    <span
                      className={`text-xs font-black tracking-wider transition-colors duration-300 ${
                        isActive ? 'text-ecoGold' : 'text-gray-400 group-hover:text-ecoGreen'
                      }`}
                    >
                      {tab.num}
                    </span>
                    <div
                      className={`h-2 w-2 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-ecoGreen scale-125 shadow-[0_0_8px_#74ba00]'
                          : 'bg-gray-200 group-hover:bg-ecoGreen/50'
                      }`}
                    />
                  </div>

                  {/* Icon & Title with Creative Hover Shift Animation */}
                  <div className="relative z-10 space-y-4 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <div
                      className={`inline-flex p-3 rounded-xl transition-all duration-300 shadow-sm ${
                        isActive
                          ? 'bg-ecoGreen text-white shadow-ecoGreen/30'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-ecoGreen group-hover:text-white group-hover:shadow-md'
                      }`}
                    >
                      <IconComponent className="w-6 h-6 stroke-[1.8] transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <p
                      className={`font-black text-sm tracking-tight leading-snug transition-colors duration-300 ${
                        isActive ? 'text-white' : 'text-ecoDark group-hover:text-ecoGreen'
                      }`}
                    >
                      {tab.title}
                    </p>
                  </div>

                  {/* Bottom Active Pill Indicator */}
                  <div
                    className={`mt-4 h-0.5 w-full rounded-full transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-ecoGreen to-ecoGold opacity-100'
                        : 'bg-transparent opacity-0 group-hover:opacity-30'
                    }`}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab Content Display Card */}
        <div className=" border border-gray-200/80 bg-white p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-900/5 transition-all duration-500">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative group overflow-hidden">
              <div
                key={currentContent.image}
                role="img"
                aria-label={currentContent.title}
                className="relative h-[320px] w-full overflow-hidden bg-gray-100 bg-cover bg-center transition duration-700 ease-out sm:h-[380px] lg:h-[420px] group-hover:scale-[1.02]"
              >
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = '/about/team.png'
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1714]/90 via-[#0d1714]/20 to-[#0d1714]/5" />
                <div className="absolute inset-0 bg-[#0d1714]/10 mix-blend-multiply" />
              </div>

              {/* Tag overlay */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex items-center justify-between rounded-xl bg-[#0d1714]/80 p-4 backdrop-blur-md border border-white/10 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d4aa51]">
                  Service Detail #{currentContent.num}
                </span>
                <span className="text-xs font-semibold text-gray-300">
                  Certified Standards
                </span>
              </div>
            </div>

            {/* Right Details Container */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#2e7d32]">
                  Overview
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0d1714] tracking-tight leading-snug">
                  {currentContent.title}
                </h3>
              </div>

              <div className="space-y-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                <p>{currentContent.description1}</p>
                <p>{currentContent.description2}</p>
              </div>

              {/* Checkpoints Grid */}
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentContent.checkpoints.map((point, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs sm:text-sm font-bold text-[#0d1714]"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ecoGreen text-white">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="truncate">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link to="/contact" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ecoGreen hover:text-ecoGreenDark transition-colors">
                  <span>Get a Solar Quote</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}