import React from 'react'
import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ecoDark text-white">
      <div className="absolute inset-0 opacity-10 solar-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-16">
        <div className="mb-14 grid gap-12 lg:grid-cols-[1.25fr_0.7fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="mb-6 flex items-center gap-3" aria-label="ZXSOLAR home">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ecoGreen text-2xl font-black text-ecoDark">⚡</span>
              <span>
                <strong className="block text-2xl font-black tracking-tight">ZXSOLAR</strong>
                <small className="text-[10px] uppercase tracking-[0.22em] text-white/50">Solar Energy Solutions</small>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-7 text-white/60">Practical ecological advice and clean energy systems for a healthier, more resilient tomorrow.</p>
            <div className="mt-7 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href="#contact" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition hover:border-ecoGreen hover:bg-ecoGreen hover:text-ecoDark" aria-label="Social media">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-ecoGold">Explore</h3>
            <ul className="space-y-3 text-sm text-white/60">
              {['About us', 'Our services', 'Latest news', 'Contact'].map((item) => <li key={item}><a href="#top" className="transition hover:text-ecoGreen">{item}</a></li>)}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-ecoGold">Get in touch</h3>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ecoGreen" /><span>30 Commercial Road<br />Fratton, Australia</span></li>
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-ecoGreen" /><span>+61 3 9283 2222</span></li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-ecoGreen" /><span>hello@ecohub.com</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-ecoGold">Stay in the loop</h3>
            <p className="mb-5 text-sm leading-6 text-white/60">Monthly ideas for lower-impact living and smarter energy.</p>
            <form className="flex border-b border-white/25 pb-2">
              <input type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none" aria-label="Email address" />
              <button type="submit" className="text-ecoGreen transition hover:text-ecoGold" aria-label="Subscribe"><ArrowUpRight className="h-5 w-5" /></button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 ZXSOLAR. Better energy, better future.</p>
          <p>Open Mon - Sat · 8 am - 5 pm</p>
        </div>
      </div>
    </footer>
  )
}