import React from 'react'
import { Calendar, User, ArrowUpRight, Sparkles } from 'lucide-react'

export default function BlogSection() {
  const blogs = [
    {
      title: 'Maximizing Solar Panel Efficiency: A Complete Installation Guide',
      date: 'March 13, 2026',
      author: 'Russell Yates',
      category: 'Solar Installation',
      img: 'https://plus.unsplash.com/premium_photo-1679917152960-b9e43c2141f1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww',
    },
    {
      title: 'Next-Gen Battery Storage Systems for Continuous Solar Power',
      date: 'March 13, 2026',
      author: 'Russell Yates',
      category: 'Battery Storage',
      img: 'https://plus.unsplash.com/premium_photo-1668078530961-32f4a1107791?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww',
    },
    {
      title: 'Solar Inverter Maintenance & Efficiency Optimization',
      date: 'March 13, 2026',
      author: 'Russell Yates',
      category: 'Inverter Tech',
      img: 'https://images.unsplash.com/photo-1617269778723-73a40cf299bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fHNvbGFyJTIwZW5lcmd5fGVufDB8fDB8fHww',
    },
    {
      title: 'How Commercial Solar Audits Cut Energy Expenses by 40%',
      date: 'March 8, 2026',
      author: 'Russell Yates',
      category: 'Commercial Solar',
      img: 'https://plus.unsplash.com/premium_photo-1682148024043-79f4f7bfc84d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA5fHxzb2xhciUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D',
    },
     {
      title: 'How Residential Solar Audits Cut Energy Expenses by 40%',
      date: 'January 8, 2026',
      author: 'Russell Yates',
      category: 'Residential Solar',
      img: 'https://plus.unsplash.com/premium_photo-1663091595941-65815fcfeb32?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxzb2xhciUyMGVuZXJneXxlbnwwfHwwfHx8MA%3D%3D',
    },
  ]

  const featuredPost = blogs[0]
  const secondaryPosts = blogs.slice(1)

  return (
    <section className="relative py-24 px-6 lg:px-16 mx-auto font-sans overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-[#2e7d32]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-1/3 h-80 w-80 rounded-full bg-[#d4aa51]/10 blur-[120px]" />

      {/* ================= SECTION HEADER ================= */}
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2e7d32]/10 border border-[#2e7d32]/20">
          <Sparkles className="w-3.5 h-3.5 text-[#2e7d32] animate-pulse" />
          <span className="text-[#2e7d32] text-xs font-bold uppercase tracking-widest">
            Solar Insights & News
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0d1714] leading-[1.15] tracking-tight">
          Latest solar tech &{' '}
          <span className="relative inline-block text-[#2e7d32]">
            energy updates.
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

      {/* ================= ARTICLES GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Featured Large Card (Left) */}
        <div className="lg:col-span-5 group relative overflow-hidden shadow-2xl  bg-[#0d1714] min-h-[480px] lg:min-h-full flex flex-col justify-end cursor-pointer transition-all duration-500 hover:-translate-y-1.5">
          {/* Card Image */}
          <img
            src={featuredPost.img}
            alt={featuredPost.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-60"
          />

          {/* Dark Overlay Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1714] via-[#0d1714]/40 to-transparent" />

          {/* Top Badge Overlay */}
          <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-[#2e7d32] text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
              {featuredPost.category}
            </span>
            <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-transform duration-300 group-hover:bg-[#d4aa51] group-hover:text-black">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Article Info Details */}
          <div className="relative z-10 p-6 sm:p-8 space-y-3">
            <div className="flex items-center gap-4 text-xs font-bold text-[#d4aa51]">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {featuredPost.date}
              </span>
              <span className="text-gray-400">•</span>
              <span className="inline-flex items-center gap-1.5 text-gray-300">
                <User className="w-3.5 h-3.5" />
                {featuredPost.author}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight group-hover:text-[#d4aa51] transition-colors duration-300">
              {featuredPost.title}
            </h3>
          </div>
        </div>

        {/* Secondary Cards Column Grid (Right) */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryPosts.map((blog, idx) => (
            <div
              key={idx}
              className="group relative  overflow-hidden shadow-xl  bg-[#0d1714] min-h-[260px] flex flex-col justify-end cursor-pointer transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Card Image */}
              <img
                src={blog.img}
                alt={blog.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-75 group-hover:opacity-60"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1714] via-[#0d1714]/40 to-transparent" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/20 text-[#d4aa51] text-[10px] font-extrabold uppercase tracking-widest">
                  {blog.category}
                </span>
              </div>

              {/* Card Meta Content */}
              <div className="relative z-10 p-5 space-y-2">
                <div className="flex items-center gap-3 text-[11px] font-bold text-gray-300">
                  <span className="inline-flex items-center gap-1 text-[#d4aa51]">
                    <Calendar className="w-3 h-3" />
                    {blog.date}
                  </span>
                  <span>•</span>
                  <span>{blog.author}</span>
                </div>

                <h4 className="text-base font-extrabold text-white leading-snug group-hover:text-[#d4aa51] transition-colors duration-300">
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ================= BOTTOM ACTION ================= */}
      <div className="mt-16 text-center">
        <button className="group relative inline-flex items-center justify-center gap-3 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-4 shadow-lg shadow-ecoGreen/25 hover:shadow-xl hover:shadow-ecoGreen/35 transition-all duration-300 text-xs tracking-wider uppercase overflow-hidden">
          <span className="relative z-10 cursor-pointer">View All Solar Articles</span>
          <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[110%]" />
        </button>
      </div>
    </section>
  )
}