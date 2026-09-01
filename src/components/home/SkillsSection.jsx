import React from 'react'

export default function SkillsSection() {
  return (
    <section className="py-16 bg-white px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <span className="text-ecoGreen text-xs font-bold uppercase tracking-widest block">Our Company Skill</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ecoDark leading-tight">
            We are very helpful to get good business.
          </h2>
          <button className="bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-3.5 rounded-sm text-xs uppercase">
            Contact Us! →
          </button>
        </div>

        <div className="space-y-6">
          <p className="text-gray-500 text-sm">
            Our mission is to provide clear, high quality and affordable ecological advice and services to public.
          </p>

          {/* Progress Bars */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-ecoDark mb-1">
                <span>Energy Saving</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-ecoGreen h-full w-[90%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-ecoDark mb-1">
                <span>Staff Training</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-ecoGold h-full w-[95%]"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-ecoDark mb-1">
                <span>Translocation</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-gray-400 h-full w-[80%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
