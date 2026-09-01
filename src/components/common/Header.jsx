import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
      {/* Brand Logo */}
      <a href="/" className="flex items-center space-x-3 focus:outline-none">
        <div className="w-10 h-10 bg-[#7cc02b] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-sm">
          ⚡
        </div>
        <div>
          <span className="text-2xl font-black text-[#111827] tracking-tight block leading-none">ZXSOLAR</span>
          <span className="block text-[10px] text-gray-400 font-semibold tracking-wider uppercase mt-1">Ecology & Solar Energy</span>
        </div>
      </a>

      {/* Top Details (Right Aligned) */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex items-center space-x-3 border-r border-gray-100 pr-8">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#7cc02b]">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-[#111827] text-sm">Call Us:</p>
            <a href="tel:6783453456" className="text-gray-500 hover:text-[#7cc02b] transition-colors">(678) 345-3456</a>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-gray-100 pr-8">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#7cc02b]">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-[#111827] text-sm">Mail Us:</p>
            <a href="mailto:info@ecohub.com" className="text-gray-500 hover:text-[#7cc02b] transition-colors">info@ecohub.com</a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#7cc02b]">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-[#111827] text-sm">Our Address:</p>
            <p className="text-gray-500">380 Albert St, Melbourne, Australia</p>
          </div>
        </div>
      </div>
    </header>
  )
}