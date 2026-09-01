import React, { useState } from 'react'
import { 
  Check, 
  Globe, 
  Wind, 
  Sun, 
  Leaf, 
  Zap
} from 'lucide-react'

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0)

  // Dynamic Data Object matching the UI
  const tabsData = [
    {
      num: '01.',
      title: 'Eco Maintenance',
      Icon: Globe,
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
      description1: "All our ecologists members of the Chartered Institute of Ecology Environmental Management and work to the Institute's Code of Professional Conduct, British Standard and best practice guidelines.",
      description2: "We quickly provide detailed ecological reports of the highest quality We exceed expectations and satisfy requirements for planning and beyond. We deploy state.",
      checkpoints: [
        'Preliminary Ecology',
        'Structural Monitoring',
        'Ecological Mitigation',
        'low impact bat class licence'
      ]
    },
    {
      num: '02.',
      title: 'Wind Power',
      Icon: Wind,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000',
      description1: 'Wind energy solutions engineered for max efficiency and continuous performance in high-yield wind zones across commercial scale farms.',
      description2: 'We offer end-to-end turbine setup, site evaluation, and environmental impact assessments adhering strictly to modern standards.',
      checkpoints: [
        'Turbine Installation',
        'Wind Site Assessment',
        'Blade Maintenance',
        'Power Grid Integration'
      ]
    },
    {
      num: '03.',
      title: 'Solar Energy',
      Icon: Sun,
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1000',
      description1: 'State-of-the-art solar panel setups built to maximize sunlight absorption and deliver clean, consistent renewable energy.',
      description2: 'Full lifecycle service including rooftop audits, inverter deployment, and grid connectivity with long-term performance warranties.',
      checkpoints: [
        'Rooftop Solar Array',
        'Inverter Setup',
        'Battery Storage Systems',
        'Annual Efficiency Audit'
      ]
    },
    {
      num: '04.',
      title: 'Live eco-friendly',
      Icon: Leaf,
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=1000',
      description1: 'Practical sustainable living solutions tailored for modern households aiming to lower their carbon footprint effortlessly.',
      description2: 'From smart energy-saving appliances to zero-waste habitat consulting, we help transition your lifestyle step-by-step.',
      checkpoints: [
        'Home Energy Audits',
        'Zero-Waste Advisory',
        'Green Building Materials',
        'Rainwater Harvesting'
      ]
    },
    {
      num: '05.',
      title: 'Wind eco-power',
      Icon: Zap,
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1000',
      description1: 'Micro-wind power technology customized for rural and off-grid facilities providing uninterrupted clean electricity.',
      description2: 'Hybrid wind-solar solutions combined with modern energy management software to ensure 24/7 continuous operation.',
      checkpoints: [
        'Micro Turbine Systems',
        'Off-grid Deployment',
        'Hybrid Energy Storage',
        'Remote Telemetry'
      ]
    }
  ]

  const currentContent = tabsData[activeTab]

  return (
    <section className="relative bg-[#f8f9fa] px-4 py-20 font-sans sm:px-8 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center lg:mb-12">
          <span className="relative z-10 text-xs font-bold uppercase tracking-[0.24em] text-[#7cc02b]">Services We Offer</span>
          <div className="pointer-events-none -mb-5 -mt-6 select-none text-5xl font-black tracking-tight text-gray-200/70 sm:text-6xl">Services</div>
          <h2 className="relative text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl">We provide a comprehensive<br className="hidden sm:block" /> ecological service</h2>
        </div>
        
        {/* Top Service Tabs Grid */}
        <div className="mb-14 grid grid-cols-2 gap-2 bg-transparent sm:gap-3 md:grid-cols-5">
          {tabsData.map((tab, idx) => {
            const IconComponent = tab.Icon
            const isActive = activeTab === idx

            return (
              <button
                key={tab.num}
                onClick={() => setActiveTab(idx)}
                className={`group relative flex min-h-[142px] flex-col items-center justify-between rounded-none bg-white p-4 text-center shadow-[0_8px_24px_rgba(17,24,39,0.06)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7cc02b] sm:min-h-[158px] sm:p-5 ${
                  isActive
                    ? 'bg-[#7cc02b] text-white shadow-lg scale-[1.02]'
                    : 'bg-white text-gray-800 hover:bg-gray-50'
                }`}
              >
                {/* Number tag */}
                <span className={`text-sm font-bold w-full text-left transition-colors ${
                  isActive ? 'text-white' : 'text-[#7cc02b]/60'
                }`}>
                  {tab.num}
                </span>

                {/* Tab Icon */}
                <div className="my-2 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className={`w-10 h-10 stroke-[1.5] ${
                    isActive ? 'text-white' : 'text-gray-700'
                  }`} />
                </div>

                {/* Tab Label */}
                <span className={`font-bold text-xs sm:text-sm tracking-tight ${
                  isActive ? 'text-white' : 'text-gray-900'
                }`}>
                  {tab.title}
                </span>
              </button>
            )
          })}
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Image Side */}
          <div className="group relative h-[360px] w-full overflow-hidden rounded-none  bg-gray-100 shadow-[0_18px_40px_rgba(17,24,39,0.12)] sm:h-[390px] lg:h-[360px] xl:h-[400px]">
            <img
              key={currentContent.image}
              src={currentContent.image}
              alt={currentContent.title}
              className="block h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/35 to-transparent" aria-hidden="true" />
          </div>

          {/* Right Text Details Side */}
          <div className="space-y-6 lg:pl-3 lg:pt-1 xl:pl-5">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {currentContent.title}
            </h3>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              {currentContent.description1}
            </p>
            
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              {currentContent.description2}
            </p>

            {/* Checkpoints Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentContent.checkpoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-gray-800">
                  <Check className="w-4 h-4 text-[#7cc02b] stroke-[3]" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        {/* <div className="mt-28 mb-10 text-center">
          <div className="inline-block border border-dashed border-[#7cc02b] bg-white px-8 py-3.5 rounded-md text-xs font-semibold text-gray-600 shadow-sm">
            If you want to see more service{' '}
            <a href="#" className="text-[#f59e0b] hover:underline font-bold ml-1">
              Click here
            </a>
          </div>
        </div> */}
      </div>

    </section>
  )
}