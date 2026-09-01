import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="hero-section relative grid min-h-[700px] w-full grid-cols-1 overflow-hidden bg-ecoDark text-white lg:min-h-[700px] lg:grid-cols-2">
      {/* Left Slider Navigation Dots */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col space-y-3 z-20">
        <span className="w-3 h-3 rounded-sm border-2 border-ecoGreen bg-transparent"></span>
        <span className="w-2 h-2 rounded-sm bg-ecoGreen/50"></span>
        <span className="w-2 h-2 rounded-sm bg-ecoGreen/50"></span>
      </div>

      <div className="p-8 lg:p-20 flex flex-col justify-center space-y-6 relative z-10 lg:pl-20">
        <div className="relative">
          <h1 className="text-4xl lg:text-7xl font-extrabold leading-tight text-white/10 absolute -top-12 -left-4 select-none pointer-events-none">
            ZXSOLAR
          </h1>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-tight">
            We also <span className="text-ecoGold">carry out</span> ecological risk.
          </h2>
        </div>
        <p className="text-gray-400 text-sm max-w-md leading-relaxed">
          Ecology Limited are a fully independent, specialist ecological consultancy, working across the UK.
        </p>
        <div>
          <button className="flex items-center space-x-2 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-6 py-3.5 rounded-sm transition-all text-xs tracking-wider uppercase">
            <span>About us</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="hero-image-wrap relative min-h-[480px] overflow-hidden lg:min-h-full">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=85&w=1600"
          alt="Solar Panel Field"
          className="hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="hero-image-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      </div>
    </section>
  )
}
