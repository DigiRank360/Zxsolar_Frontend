import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import logo from '../../assets/logo.png'

export default function Header() {
  return (
    <header className="flex w-full flex-col items-stretch gap-5 border-b border-gray-100 bg-white px-4 py-4 text-xs text-gray-600 sm:px-6 xl:flex-row xl:items-center xl:justify-between xl:gap-6 xl:px-16">
      {/* Brand Logo */}
    <a href="/" className="flex items-center self-center focus:outline-none xl:shrink-0">
      <img
        src={logo}
        alt="ZXSOLAR"
        className="h-16 w-auto object-contain"
      />
    </a>

      {/* Top Details (Right Aligned) */}
      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 xl:ml-auto xl:w-[min(100%,780px)] xl:flex-none xl:grid-cols-[minmax(130px,0.65fr)_minmax(180px,1fr)_minmax(280px,1.5fr)] xl:items-center xl:gap-x-2">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#7cc02b]">
            <Phone className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-[#111827] text-sm">Call Us:</p>
            <a href="tel:6783453456" className="text-gray-500 hover:text-[#7cc02b] transition-colors">062327 50064</a>
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#7cc02b]">
            <Mail className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-[#111827] text-sm">Mail Us:</p>
            <a href="mailto:info.zxsolarbhopal@gmail.com" className="break-all text-gray-500 transition-colors hover:text-[#7cc02b]">info.zxsolarbhopal@gmail.com</a>
          </div>
        </div>

        <div className="flex min-w-0 items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#7cc02b]">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <p className="font-bold text-[#111827] text-sm">Head Office</p>
            <p className="break-words text-gray-500">Q-05, Bhawani Town, Near Nerala Shankari, Bhopal, Madhya Pradesh 462022</p>
          </div>
        </div>

      </div>
    </header>
  )
}