import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Award } from 'lucide-react'

export default function SkillsSection() {
  const skillsData = [
    {
      title: 'Energy Saving',
      percentage: 90,
      gradient: 'from-[#2e7d32] to-[#4e994d]',
      shadow: 'shadow-[0_0_12px_rgba(46,125,50,0.3)]',
    },
    {
      title: 'Staff Training',
      percentage: 95,
      gradient: 'from-[#d4aa51] to-[#b88e36]',
      shadow: 'shadow-[0_0_12px_rgba(212,170,81,0.3)]',
    },
    {
      title: 'Translocation',
      percentage: 80,
      gradient: 'from-[#111827] to-[#374151]',
      shadow: 'shadow-[0_0_12px_rgba(17,24,39,0.2)]',
    },
  ]

  return (
    <section className="relative py-20 px-6 lg:px-16 max-w-7xl mx-auto font-sans overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#2e7d32]/5 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[#d4aa51]/10 blur-[120px]" />

      <div className="relative z-10 bg-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-gray-900/5 border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* ================= LEFT CONTENT ================= */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#2e7d32] animate-pulse" />
            <span className="text-[#2e7d32] text-xs font-bold uppercase tracking-widest">
              Our Company Skill
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] leading-[1.15] tracking-tight">
            We are dedicated to scaling your business with{' '}
            <span className="relative inline-block text-[#2e7d32]">
              proven expertise.
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

          {/* Trust Callout */}
          <div className="flex items-center gap-3 pt-2 text-xs font-bold text-gray-500">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4aa51]/20 text-[#d4aa51]">
              <Award className="w-4 h-4" />
            </div>
            <span>Certified Standards • ISO 14001 Environmental Compliance</span>
          </div>

          {/* CTA Button */}
          <div className="pt-2">
            <Link to="/contact" className="group relative inline-flex items-center justify-center gap-3 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-4 shadow-lg shadow-ecoGreen/25 hover:shadow-xl hover:shadow-ecoGreen/35 transition-all duration-300 text-xs tracking-wider uppercase overflow-hidden">
              <span className="relative z-10">Contact Us Today</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[110%]" />
            </Link>
          </div>
        </div>

        {/* ================= RIGHT PROGRESS BARS ================= */}
        <div className="lg:col-span-6 space-y-8 lg:pl-4">
          
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed p-4 rounded-2xl bg-gray-50/80 border border-gray-100">
            Our mission is to deliver clear, high-quality, and affordable ecological advice and solutions tailored to empower public and corporate infrastructures.
          </p>

          {/* Progress Bars Container */}
          <div className="space-y-6 pt-2">
            {skillsData.map((skill, index) => (
              <div key={index} className="space-y-2">
                
                {/* Skill Label & Percentage */}
                <div className="flex justify-between items-center text-xs sm:text-sm font-extrabold text-[#111827]">
                  <span className="tracking-tight">{skill.title}</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-gray-100 text-[#2e7d32] border border-gray-200">
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full bg-gray-100 h-3 rounded-full p-0.5 overflow-hidden border border-gray-200/60">
                  <div
                    className={`bg-gradient-to-r ${skill.gradient} h-full rounded-full transition-all duration-1000 ease-out ${skill.shadow}`}
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}