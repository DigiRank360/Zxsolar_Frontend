import React from 'react'

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

        <button className="mt-12 bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-3.5 rounded-sm text-xs uppercase">
          View More →
        </button>
      </div>
    </section>
  )
}
