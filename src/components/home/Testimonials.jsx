import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alfred Rica',
      role: 'CEO & Founder',
      text: 'The Ecology Partnership are currently looking for a senior or consultant level ecologist to join our growing team for centralised.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Maya Angelou',
      role: 'Marketing Manager',
      text: 'The Ecology Partnership are currently looking for a senior or consultant level ecologist to join our growing team for centralised.',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    },
    {
      name: 'Roly Pham',
      role: 'Business Manager',
      text: 'The Ecology Partnership are currently looking for a senior or consultant level ecologist to join our growing team for centralised.',
      rating: 4,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    },
  ]

  return (
    <section className="py-20 bg-ecoGrayBg px-6 lg:px-16 text-center">
      <div className="max-w-7xl mx-auto">
        <span className="text-ecoGreen text-xs font-bold uppercase tracking-widest block mb-1">Client's Reviews</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ecoDark mb-12">
          We have many Reviews for our works.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm text-left relative flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <img src={rev.avatar} className="w-14 h-14 rounded-full object-cover" />
                  <div>
                    <h4 className="font-bold text-ecoDark text-base">{rev.name}</h4>
                    <p className="text-xs text-gray-400">{rev.role}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">"{rev.text}"</p>
              </div>
              <div className="flex text-ecoGold text-sm">
                {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
              </div>
            </div>
          ))}
        </div>

       {/* <button className="group relative inline-flex items-center mt-12 justify-center gap-3 bg-[#2e7d32] hover:bg-[#246327] text-white font-bold px-8 py-4 shadow-lg shadow-[#2e7d32]/25 hover:shadow-xl hover:shadow-[#2e7d32]/35 transition-all duration-300 text-xs tracking-wider uppercase overflow-hidden">
          <span className="relative z-10 cursor-pointer">View All Solar Articles</span>
          <ArrowUpRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[110%]" />
        </button> */}
      </div>
    </section>
  )
}
