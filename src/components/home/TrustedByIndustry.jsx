import React from 'react'
import { ShieldCheck, Award, Leaf, Zap } from 'lucide-react'

const TrustedByIndustry = () => {
  // Real Brand Logos (Clean PNG/SVG URLs with transparent backgrounds)
  const clientLogos = [
    {
      name: 'Tata Power Solar',
      logoUrl: '/brands/tata-power-solar.svg',
    },
    {
      name: 'Adani Solar',
      logoUrl: '/brands/adani-solar.svg',
    },
    {
      name: 'adani-solar',
      logoUrl: '/brands/adani-solar.svg',
    },
    {
      name: 'JSW',
      logoUrl: '/brands/jsw.svg',
    },
    {
      name: 'havells Energies',
      logoUrl: '/brands/havells.svg',
    },
    {
      name: 'Vikram Solar',
      logoUrl: '/brands/vikram-solar.svg',
    },
  ]

  // Key Metrics Data
  const metrics = [
    { value: '500+', label: 'Commercial Projects Completed' },
    { value: '50 MW+', label: 'Clean Energy Generated' },
    { value: '99.8%', label: 'System Uptime & Efficiency' },
    { value: '150+', label: 'Corporate Partners' },
  ]

  return (
    <section className="bg-white py-16 lg:py-24 border-t border-b border-gray-100/80 overflow-hidden font-sans">
      {/* Inline Keyframe Animation for Guaranteed Smooth Infinite Scroll */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          display: flex;
          width: max-content;
          animation: infinite-scroll 25s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-ecoGreen/10 text-ecoGreen font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border border-ecoGreen/20">
            <Zap className="w-3.5 h-3.5 fill-ecoGreen text-ecoGreen" />
            Industry Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-ecoDark tracking-tight">
            Trusted By India’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecoGreen to-ecoGreenDark">Leading Enterprises</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg font-normal">
            We partner with top-tier industrial units, commercial complexes, and government organizations to deliver long-term solar efficiency.
          </p>
        </div>

        {/* Clean Logo Marquee Container (Transparent Background & Real Logos) */}
        <div className="relative py-6 overflow-hidden">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-20">
            Powering Industry Leaders Across the Nation
          </p>

          {/* Side Fading Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Wrapper */}
          <div className="animate-infinite-scroll items-center gap-12 sm:gap-16">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center min-w-[140px] sm:min-w-[170px] h-16 group cursor-pointer"
              >
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  className="h-12 w-auto max-w-[150px] object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.style.display = 'none'
                    e.target.parentNode.innerHTML = `<span class="text-sm font-bold text-gray-400 group-hover:text-ecoDark transition-colors">${client.name}</span>`
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* High-Contrast Metrics Banner */}
        <div className="text-white p-8 lg:p-12  relative overflow-hidden ">
          <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full  pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
            {metrics.map((metric, idx) => (
              <div key={idx} className={`space-y-2 ${idx > 0 ? 'pt-6 lg:pt-0' : ''}`}>
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-ecoGreen tracking-tight">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 font-medium max-w-[180px] mx-auto">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Certification Badges with Lucide Icons */}
        <div className="flex flex-wrap items-center justify-center gap-12 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-ecoGreen/10 flex items-center justify-center text-ecoGreen">
              <ShieldCheck className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <p className="text-xs font-bold text-ecoDark uppercase tracking-wider">ISO 9001:2015 Certified</p>
              <p className="text-[11px] text-gray-500">Highest Quality Solar Grid Standards</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-ecoGold/10 flex items-center justify-center text-ecoGold">
              <Award className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <p className="text-xs font-bold text-ecoDark uppercase tracking-wider">Tier-1 Components Only</p>
              <p className="text-[11px] text-gray-500">25 Years Extended Warranty</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-ecoGreen/10 flex items-center justify-center text-ecoGreen">
              <Leaf className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <p className="text-xs font-bold text-ecoDark uppercase tracking-wider">MNRE Approved</p>
              <p className="text-[11px] text-gray-500">Eligible for Government Subsidies</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TrustedByIndustry