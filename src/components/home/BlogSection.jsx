import React from 'react'

export default function BlogSection() {
  const blogs = [
    {
      title: 'Ecology Surveys and Planning Permission: A Guide',
      date: 'March 13, 2022',
      author: 'Russell Yates',
      img: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800',
      large: true,
    },
    {
      title: 'Preliminary Ecological Appraisal Guide',
      date: 'March 13, 2022',
      author: 'Russell Yates',
      img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'Ecology Scoping in the Survey Guidelines',
      date: 'March 13, 2022',
      author: 'Russell Yates',
      img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=600',
    },
    {
      title: 'How to have energy with solar panels',
      date: 'March 8, 2022',
      author: 'Russell Yates',
      img: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=600',
    },
  ]

  return (
    <section className="py-20 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-ecoGreen text-xs font-bold uppercase tracking-widest block mb-1">Our Latest News</span>
        <h2 className="text-3xl lg:text-5xl font-extrabold text-ecoDark">
          We would be happy to hear from you.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Big Card */}
        <div className="lg:col-span-1 relative rounded-2xl overflow-hidden shadow-lg group min-h-[400px]">
          <img src={blogs[0].img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
            <span className="text-[10px] text-ecoGold font-bold">📅 {blogs[0].date}</span>
            <h3 className="text-xl font-bold leading-snug">{blogs[0].title}</h3>
            <p className="text-xs text-gray-300">By {blogs[0].author}</p>
          </div>
        </div>

        {/* Right Side Cards Grid */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.slice(1).map((blog, idx) => (
            <div key={idx} className="relative rounded-2xl overflow-hidden shadow-md group min-h-[220px]">
              <img src={blog.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-2">
                <span className="text-[10px] text-ecoGold font-bold">📅 {blog.date}</span>
                <h4 className="text-sm font-bold leading-snug">{blog.title}</h4>
                <p className="text-[11px] text-gray-300">By {blog.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-ecoGreen hover:bg-ecoGreenDark text-white font-bold px-8 py-3.5 rounded-sm text-xs uppercase">
          Load More →
        </button>
      </div>
    </section>
  )
}
