import React, { useState } from 'react'
import { 
  Menu, X, ChevronDown, Search, 
  Facebook, Instagram, Twitter, Disc as Pinterest 
} from 'lucide-react'

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState(null)

  const navItems = [
    { name: 'Home', href: '#',  },
    { name: 'About Us', href: '#',  },
    { name: 'Our Projects', href: '#', },
    { name: 'Services', href: '#', links: ['Solar Power Plants', 'Residential', 'Industrial', 'Commercial'] },
    { name: 'Contact', href: 'https://www.zxsolarenergies.com/Contactus.html' },
  ]

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`)
      setIsSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <>
      {/* Transparent Sticky Navbar */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 lg:px-16 py-3 transition-all">
        <div className="flex items-center justify-between">
          
          {/* Left: Permanent Hamburger Icon */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-1.5 text-gray-800 hover:text-[#7cc02b] transition-colors focus:outline-none"
            aria-label="Open Sidebar Menu"
          >
            <Menu className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 text-xs font-bold text-gray-800 uppercase tracking-wider">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative py-2"
                onMouseEnter={() => item.links && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href} 
                  className="flex items-center gap-1 hover:text-[#7cc02b] transition-colors"
                >
                  {item.name}
                  {item.links && <ChevronDown className="w-3.5 h-3.5" />}
                </a>

                {/* Dropdown Box */}
                {item.links && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-lg border border-gray-100 py-2 capitalize font-medium text-xs text-gray-700 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.links.map((subLink) => (
                      <a 
                        key={subLink} 
                        href="#" 
                        className="block px-4 py-2 hover:bg-emerald-50 hover:text-[#7cc02b] transition-colors"
                      >
                        {subLink}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Cart, Search & Social Icons */}
          <div className="flex items-center space-x-5">
            {/* Working Search Icon */}
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="p-1 text-gray-700 hover:text-[#7cc02b] transition-colors"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-2 border-l border-gray-200 pl-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#7cc02b] hover:text-white transition-all duration-200"
                >
                  <Icon className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* 1. Working Search Overlay Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button 
            onClick={() => setIsSearchOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#7cc02b] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <form onSubmit={handleSearchSubmit} className="w-full max-w-2xl relative">
            <input 
              type="text"
              placeholder="Search products, services, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white/50 text-white text-xl md:text-2xl py-3 px-2 focus:outline-none focus:border-[#7cc02b] placeholder-gray-400 font-light"
              autoFocus
            />
            <button 
              type="submit" 
              className="absolute right-2 top-3 text-white hover:text-[#7cc02b]"
            >
              <Search className="w-6 h-6" />
            </button>
          </form>
        </div>
      )}

      {/* 2. Slide-out Left Sidebar (Hamburger Menu) */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 transition-opacity"
            onClick={() => setIsSidebarOpen(false)}
          />

          {/* Sidebar Content */}
          <div className="relative w-80 max-w-full bg-[#111827] text-white h-full p-6 shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-left duration-250">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-800">
                <span className="text-xl font-bold tracking-wider text-[#7cc02b]">ZXSOLAR</span>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-col space-y-4 text-sm font-semibold">
                {navItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href}
                    className="hover:text-[#7cc02b] transition-colors py-1"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 text-xs text-gray-400">
              <p>© 2026 ZXSOLAR Energy Solutions.</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}