import React from 'react'

export default function FeaturesStats() {
  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span className="text-ecoGreen text-xs font-bold uppercase tracking-widest block mb-1">Why Choose us?</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ecoDark leading-tight">
            We provide comprehensive ecological service
          </h2>
          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            An Ecology or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are supposed to do. Many IT firms struggle.
          </p>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <span className="text-3xl lg:text-4xl font-extrabold text-ecoGold block">2003</span>
            <span className="text-xs font-bold text-gray-600 mt-1 block">The Year of establishment</span>
          </div>
          <div>
            <span className="text-3xl lg:text-4xl font-extrabold text-ecoGold block">25 k+</span>
            <span className="text-xs font-bold text-gray-600 mt-1 block">of customers worldwide</span>
          </div>
          <div>
            <span className="text-3xl lg:text-4xl font-extrabold text-ecoGold block">15 +</span>
            <span className="text-xs font-bold text-gray-600 mt-1 block">Countries with active client base</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=600" className="w-full h-[320px] object-cover" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
          <div className="absolute bottom-0 inset-x-0 bg-ecoDark p-4 text-center text-white font-bold text-lg">
            Ecological Services
          </div>
        </div>

        <div className="bg-ecoDark text-white p-8 rounded-xl flex flex-col justify-between items-center text-center shadow-lg">
          <div className="w-12 h-12 text-ecoGold my-4">🌐</div>
          <h3 className="text-xl font-bold mb-3">Environmental Monitoring</h3>
          <p className="text-xs text-gray-400 mb-6">Our construction monitoring services are also fully integrated with Plowman and Craven's Planning.</p>
          <button className="border border-dashed border-gray-600 hover:border-ecoGreen text-xs px-6 py-2.5 rounded text-gray-300">Read more</button>
        </div>

        <div className="relative group overflow-hidden rounded-xl shadow-lg">
          <img src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=600" className="w-full h-[320px] object-cover" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
          <div className="absolute bottom-0 inset-x-0 bg-ecoDark p-4 text-center text-white font-bold text-lg">
            Energy Saving
          </div>
        </div>
      </div>
    </section>
  )
}
