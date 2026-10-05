import React from 'react'
import { PhoneCall, Send, Sparkles } from 'lucide-react'
import { useQuoteModal } from '../common/QuoteModalContext'

export default function ConsultancyBar() {
  const { openQuote } = useQuoteModal()

  return (
    <section className="relative bg-[#0d1714] text-white py-16 sm:py-20 px-6 lg:px-16 overflow-hidden font-sans border-y border-white/10">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#2e7d32]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-[#d4aa51]/15 blur-[100px]" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Heading & Contact Info */}
        <div className="space-y-3 text-center lg:text-left max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2e7d32]/20 border border-[#2e7d32]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#2e7d32] animate-pulse" />
            <span className="text-[#2e7d32] text-xs font-bold uppercase tracking-widest">
              Instant Assistance
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Get Free Consultancy?
          </h3>

          <div className="flex items-center justify-center lg:justify-start gap-3 pt-1 text-xs sm:text-sm text-gray-300">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d4aa51]/20 text-[#d4aa51] shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <p>
              Discuss your project directly with an expert:{' '}
              <a
                href="tel:+0156789789"
                className="text-[#d4aa51] font-extrabold hover:underline tracking-wide"
              >
                +0156 789 789
              </a>
            </p>
          </div>
        </div>

        <div className="w-full p-4 sm:w-auto sm:p-5">
          <button
            type="button"
            onClick={openQuote}
            className="group relative inline-flex items-center justify-center gap-2 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-4  text-xs uppercase tracking-wider w-full sm:w-auto whitespace-nowrap shadow-lg shadow-ecoGreen/25 hover:shadow-xl hover:shadow-ecoGreen/35 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Get A Quote Now</span>
            <Send className="w-3.5 h-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[110%]" />
          </button>
        </div>

      </div>
    </section>
  )
}