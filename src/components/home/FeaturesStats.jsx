import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BatteryCharging, Factory, Home, Sparkles, CheckCircle2 } from 'lucide-react'

export default function FeaturesStats() {
  const cardsData = [
    {
      id: 1,
      title: 'Residential Solar',
      subTitle: 'Solar For Homes',
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&w=1200&q=85',
      icon: Home,
      description: 'Our solar and ecological services help homes and industries plan cleaner energy systems, improve efficiency, and make confident decisions from consultation to installation.'
    },
    {
      id: 2,
      title: 'Commercial Solar',
      subTitle: 'Solar For Businesses',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85',
      icon: Factory,
      description: 'Track site conditions, energy performance, and project progress with practical monitoring support that keeps every solar installation safe, efficient, and compliant.'
    },
    {
      id: 3,
      title: 'Energy Savings',
      subTitle: 'Smarter Solar Power',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=85',
      icon: BatteryCharging,
      description: 'Reduce electricity costs with right-sized solar systems, energy audits, efficient equipment, and smart recommendations designed around your property and usage.'
    }
  ]

  return (
    <section className="relative py-24 px-6 lg:px-16  mx-auto font-sans">
      
      {/* ================= TOP ATTRACTIVE TEXT SECTION ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
        
        {/* Left Content Header */}
        <div className="lg:col-span-6 space-y-4">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7cc02b]/10 border border-[#7cc02b]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#7cc02b] animate-pulse" />
            <span className="text-[#7cc02b] text-xs font-bold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>

          {/* Dynamic Catchy Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-[1.15] tracking-tight">
            We deliver smart solar &{' '}
            <span className="relative inline-block text-[#2e7d32]">
              sustainable energy solutions
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
            </span>{' '}
            for a brighter tomorrow.
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
            Empowering homes, businesses, and industries with high-efficiency solar systems designed to reduce electricity costs and deliver reliable clean power.
          </p>

          {/* Attractive Quick Feature Pills */}
          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-bold text-[#111827]">
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-[#7cc02b]" />
              <span>High-Efficiency Solar</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200">
              <CheckCircle2 className="w-4 h-4 text-[#7cc02b]" />
              <span>Certified Installation</span>
            </div>
          </div>
        </div>

        {/* Right Counter Cards */}
        <div className="lg:col-span-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#d4aa51] block">300+</span>
            <span className="text-xs font-bold text-gray-600 mt-2 block leading-snug">Happy homeowners</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#d4aa51] block">30+</span>
            <span className="text-xs font-bold text-gray-600 mt-2 block leading-snug">Trusted companies</span>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <span className="text-3xl lg:text-4xl font-extrabold text-[#d4aa51] block">10 MW</span>
            <span className="text-xs font-bold text-gray-600 mt-2 block leading-snug">Rooftop experience</span>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM FEATURE CARDS GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardsData.map((card) => {
          const IconComponent = card.icon

          return (
            <div
              key={card.id}
              className="group relative h-[420px] w-full overflow-hidden rounded-none shadow-xl bg-[#111827] cursor-pointer"
            >
              {/* Card Background Image */}
              <img
                src={card.image}
                alt={card.title}
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = '/about/team.png'
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Normal State: Center Green Square Icon Box */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
                <div className="w-20 h-20 bg-[#7cc02b] flex items-center justify-center text-white shadow-lg border-2 border-white/20">
                  <IconComponent className="w-10 h-10 stroke-[2]" />
                </div>
              </div>

              {/* Normal State: Bottom Title Bar */}
              <div className="absolute bottom-0 inset-x-0 z-10 bg-[#111827] py-4 px-6 text-center text-white font-extrabold text-lg tracking-wide group-hover:opacity-0 transition-opacity duration-300">
                {card.title}
              </div>

              {/* HOVER SLIDE-UP OVERLAY: Bottom se poora TOP tak slide hoga */}
              <div className="absolute inset-0 z-20 bg-[#111827] text-white p-8 flex flex-col items-center justify-center text-center transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                {/* Overlay Top Icon */}
                <div className="w-14 h-14 text-[#d4aa51] mb-6 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 stroke-[1.8]" />
                </div>

                {/* Overlay Title */}
                <h3 className="text-2xl font-extrabold text-white mb-4 tracking-tight">
                  {card.title}
                </h3>

                {/* Overlay Description */}
                <p className="text-xs text-gray-300 leading-relaxed mb-8 max-w-xs">
                  {card.description}
                </p>

                {/* Overlay Button */}
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-dashed border-gray-500 hover:border-ecoGreen hover:text-ecoGreen text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-sm text-gray-300 transition-all duration-300">
                  <span>Read more</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}