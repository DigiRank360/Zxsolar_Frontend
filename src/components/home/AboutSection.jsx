import React from 'react'
import { Award, ArrowRight, ShieldCheck, Headphones } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Image Banner */}
      <div className="relative">
        <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
            alt="Solar Installation Worker"
            className="w-full h-[500px] object-cover"
          />
        </div>
        {/* Award Badge Overlay */}
        <div className="absolute top-6 left-6 z-20 bg-ecoGold text-black p-6 rounded-sm shadow-2xl flex flex-col items-center justify-center text-center max-w-[180px]">
          <Award className="w-10 h-10 mb-2" />
          <span className="text-3xl font-black">15</span>
          <span className="text-xs font-bold uppercase tracking-wider mt-1">Awards Winner Company</span>
        </div>
      </div>

      {/* Right Content */}
      <div className="space-y-6">
        <div className="relative">
          <span className="text-ecoGreen text-xs font-bold uppercase tracking-widest block mb-1">About Our Company</span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-ecoDark leading-tight">
            Things to consider when defining a scheme.
          </h2>
        </div>
        <p className="text-gray-500 text-sm leading-relaxed border-l-2 border-ecoGreen pl-4">
          An Ecology or MSP who keeps your IT running smoothly at all times is like a plumber who fixes your pipes; that's what they are supposed to do. Many IT firms struggle.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-ecoGreen/10 rounded-lg text-ecoGreen">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-ecoDark text-sm">Moneyback Guarantee</h4>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-ecoGreen/10 rounded-lg text-ecoGreen">
              <Headphones className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-bold text-ecoDark text-sm">Technical Support</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
          <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-4 rounded-sm transition-all text-xs tracking-wider uppercase">
            <span>Contact Us!</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-ecoGold/20 text-ecoGold flex items-center justify-center font-bold">
              📞
            </div>
            <div>
              <p className="text-xs text-gray-500">Call for help</p>
              <p className="font-extrabold text-ecoDark text-base">91 124 3467 2345</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
