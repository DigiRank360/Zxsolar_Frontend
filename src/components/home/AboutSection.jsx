import React from 'react'
import { Link } from 'react-router-dom'
import {
  Award,
  ArrowRight,
  ShieldCheck,
  Headphones,
  PhoneCall,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="relative py-28 px-6 lg:px-16  mx-auto overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[#3f8f4f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-[#d2a64b]/10 blur-[100px]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* ================= LEFT IMAGE BANNER ================= */}
        <div className="lg:col-span-6 relative">
          {/* Decorative Backing Frame */}
          <div className="absolute -inset-4  bg-gradient-to-tr from-[#2e7d32]/20 via-[#4e994d]/10 to-[#d4aa51]/20 blur-xl opacity-70" />
          <div className="absolute -bottom-6 -left-6 w-48 h-48  border-2 border-[#2e7d32]/20 -z-10 hidden sm:block" />

          {/* Main Image Container */}
          <div className="relative z-10 overflow-hidden shadow-2xl border border-black/5 bg-[#0d1714]/5 group">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Solar installation in progress"
              className="w-full h-[480px] sm:h-[540px] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            >
              <source
                src="https://res.cloudinary.com/cqiwcyw7/video/upload/f_mp4,q_auto/why_choose_video.mp4"
                type="video/mp4"
              />
            </video>
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1714]/60 via-transparent to-transparent opacity-80" />
          </div>

          {/* Top-Left Award Badge */}
          <div className="absolute -top-4 -left-2 sm:top-6 sm:left-6 z-20 bg-gradient-to-br from-[#d4aa51] to-[#b88e36] text-slate-950 p-5 sm:p-6 rounded-2xl shadow-[0_20px_40px_rgba(212,170,81,0.3)] border border-white/20 flex flex-col items-center justify-center text-center max-w-[160px] sm:max-w-[180px] backdrop-blur-md transition-transform duration-300 hover:-translate-y-1">
            <div className="p-2.5 bg-black/10 rounded-xl mb-2">
              <Award className="w-7 h-7 text-slate-950" />
            </div>
            <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none">15+</span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-1.5 opacity-90 leading-snug">
              Awards Winner Company
            </span>
          </div>

          {/* Bottom-Right Floating Experience Card */}
          <div className="absolute -bottom-6 -right-2 sm:right-6 z-20 bg-[#0d1714]/90 text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md flex items-center gap-4 max-w-[260px] transition-transform duration-300 hover:translate-y-1">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2e7d32]/20 border border-[#2e7d32]/40 text-[#4e994d]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#d4aa51]">Solar Certified</p>
              <p className="text-xs text-gray-300 mt-0.5 leading-snug">Reliable solar engineering for cleaner energy savings</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT ================= */}
        <div className="lg:col-span-6 space-y-8">
          
          {/* Section Eyebrow & Title */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/20">
              <span className="h-2 w-2 rounded-full bg-[#2e7d32] animate-pulse" />
              <span className="text-[#2e7d32] text-xs font-bold uppercase tracking-widest">
                About Our Company
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1714] leading-[1.15] tracking-tight">
              Smart solar solutions for a{' '}
              <span className="relative inline-block text-[#2e7d32]">
                brighter future.
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

          {/* Highlight Description Box */}
          <div className="relative p-5 rounded-2xl bg-[#0d1714]/[0.02] border-l-4 border-[#2e7d32] shadow-sm">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              We design and install reliable solar systems for homes, housing societies, businesses, and industries. Our experts help you choose the right system to reduce electricity costs and generate clean power.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            
            {/* Feature 1 */}
            <div className="group p-4 rounded-xl border border-gray-100 bg-white hover:border-[#2e7d32]/30 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
              <div className="p-3 bg-[#2e7d32]/10 rounded-xl text-[#2e7d32] group-hover:bg-[#2e7d32] group-hover:text-white transition-colors duration-300 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#0d1714] text-base">Quality Solar Systems</h4>
                <p className="text-xs text-gray-500 mt-1 leading-snug">Carefully designed solutions for dependable performance.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group p-4 rounded-xl border border-gray-100 bg-white hover:border-[#2e7d32]/30 hover:shadow-lg transition-all duration-300 flex items-start space-x-4">
              <div className="p-3 bg-[#2e7d32]/10 rounded-xl text-[#2e7d32] group-hover:bg-[#2e7d32] group-hover:text-white transition-colors duration-300 shrink-0">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-[#0d1714] text-base">Expert Solar Support</h4>
                <p className="text-xs text-gray-500 mt-1 leading-snug">Guidance from consultation through installation and support.</p>
              </div>
            </div>

          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-4 border-t border-gray-100">
            {/* CTA Button */}
            <Link to="/contact" className="group relative inline-flex items-center justify-center space-x-3 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-4 shadow-lg shadow-ecoGreen/25 hover:shadow-xl hover:shadow-ecoGreen/35 transition-all duration-300 text-xs tracking-wider uppercase overflow-hidden">
              <span className="relative z-10">Contact Us Now</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[110%]" />
            </Link>

            {/* Helpline Call Pill */}
            <div className="flex items-center space-x-4 p-2 px-3 rounded-xl bg-gray-50 border border-gray-100 sm:bg-transparent sm:border-0 sm:p-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#d4aa51] to-[#b88e36] text-slate-950 flex items-center justify-center font-bold shadow-md shadow-[#d4aa51]/20 shrink-0">
                <PhoneCall className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Call for immediate help</p>
                <p className="font-extrabold text-[#0d1714] text-base tracking-tight hover:text-[#2e7d32] transition-colors cursor-pointer">
                  +91 62327 50064
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}