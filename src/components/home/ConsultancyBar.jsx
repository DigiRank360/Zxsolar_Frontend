import React from 'react'

export default function ConsultancyBar() {
  return (
    <section className="bg-ecoDark text-white py-12 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl lg:text-4xl font-extrabold">Get Free Consultancy?</h3>
          <p className="text-xs text-gray-400 mt-1">
            Discuss about your project to call <span className="text-ecoGold font-bold">+0156 789 789</span>
          </p>
        </div>

        <form className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <input
            type="text"
            placeholder="Your Name..."
            className="bg-white/10 border border-white/20 rounded px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-ecoGreen w-full sm:w-56"
          />
          <input
            type="email"
            placeholder="Your Mail Address..."
            className="bg-white/10 border border-white/20 rounded px-4 py-3 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-ecoGreen w-full sm:w-56"
          />
          <button className="bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-6 py-3 rounded text-xs uppercase w-full sm:w-auto whitespace-nowrap">
            Get a quote now
          </button>
        </form>
      </div>
    </section>
  )
}
