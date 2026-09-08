import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 lg:px-16 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 gap-4">
      {/* Brand Logo */}
    <a href="/" className="flex items-center focus:outline-none">
      <img
        src={logo}
        alt="ZXSOLAR"
        className="h-16 w-auto object-contain"
      />
    </a>

      {/* Top Details (Right Aligned) */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="flex items-center space-x-3 border-r border-gray-100 pr-8">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#7cc02b]">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-[#111827] text-sm">Call Us:</p>
            <a href="tel:6783453456" className="text-gray-500 hover:text-[#7cc02b] transition-colors">062327 50064</a>
          </div>
        </div>

        <div className="flex items-center space-x-3 border-r border-gray-100 pr-8">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#7cc02b]">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-[#111827] text-sm">Mail Us:</p>
            <a href="mailto:info@ecohub.com" className="text-gray-500 hover:text-[#7cc02b] transition-colors">info.zxsolarbhopal@gmail.com</a>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-[#7cc02b]">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="font-bold text-[#111827] text-sm">Our Address:</p>
            <p className="text-gray-500">Bhopal, Madhya Pradesh 462021</p>
          </div>
        </div>
      </div>
    </header>
  )
}