import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import logo from '../../assets/logo.png'

export default function Footer() {
  // Social Media Links
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100093988596394',
      Icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/zxsolar_energies/?hl=en',
      Icon: Instagram,
    },
    {
      name: 'LinkedIn',
      href: 'YOUR_LINKEDIN_LINK',
      Icon: Linkedin,
    },
  ]

  // Footer Navigation
  const footerLinks = [
    {
      name: 'About us',
      href: '/about',
    },
    {
      name: 'Our services',
      href: '/services',
    },
    {
      name: 'Latest news',
      href: '/news',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-ecoDark text-white">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-10 solar-grid"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-16">
        <div className="mb-14 grid gap-12 lg:grid-cols-[1.25fr_0.7fr_1fr_1.2fr]">

          {/* =========================
              Logo / About
          ========================== */}
          <div>
            <a
              href="/"
              className="group relative inline-flex items-center focus:outline-none"
              aria-label="ZXSOLAR Home"
            >
              {/* Logo Glow */}
              <div
                className="
                  absolute inset-0
                  scale-90 rounded-full
                  bg-ecoGreen/10
                  blur-xl
                  transition-all duration-500
                  group-hover:bg-ecoGreen/20
                "
                aria-hidden="true"
              />

              <img
                src={logo}
                alt="ZXSOLAR"
                className="
                  relative z-10
                  h-16 w-auto
                  object-contain
                  drop-shadow-[0_0_10px_rgba(124,192,43,0.6)]
                  transition-all duration-500
                  group-hover:drop-shadow-[0_0_16px_rgba(124,192,43,0.75)]
                "
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Practical ecological advice and clean energy systems for a
              healthier, more resilient tomorrow.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex gap-3">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ZXSOLAR on ${name}`}
                  title={name}
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    border border-white/15
                    text-white/60
                    transition-all duration-300

                    hover:-translate-y-1
                    hover:border-ecoGreen
                    hover:bg-ecoGreen
                    hover:text-ecoDark
                    hover:shadow-[0_0_15px_rgba(124,192,43,0.35)]
                  "
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              Explore
          ========================== */}
          <div>
            <h3
              className="
                mb-5 text-sm font-bold
                uppercase tracking-[0.18em]
                text-ecoGold
              "
            >
              Explore
            </h3>

            <ul className="space-y-3 text-sm text-white/60">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className="
                      inline-flex items-center
                      transition-all duration-300
                      hover:translate-x-1
                      hover:text-ecoGreen
                    "
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a href={item.href} className="inline-flex items-center transition-all duration-300 hover:translate-x-1 hover:text-ecoGreen">
                      {item.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              Contact
          ========================== */}
          <div>
            <h3
              className="
                mb-5 text-sm font-bold
                uppercase tracking-[0.18em]
                text-ecoGold
              "
            >
              Get in touch
            </h3>

            <ul className="space-y-4 text-sm text-white/60">

              {/* Address */}
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ecoGreen" />

                <span>
                  Q No:-5, Bhawani town, Narela Sankari, Chhatrapati Nagar, Durgesh Vihar, Ayodhya Nagar
                  <br />
                  Bhopal, Madhya Pradesh 462021
                </span>
              </li>

              {/* Phone */}
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-ecoGreen" />

                <a
                  href="tel:+062327 50064"
                  className="
                    transition-colors duration-300
                    hover:text-ecoGreen
                  "
                >
                  062327 50064
                </a>
              </li>

              {/* Email */}
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-ecoGreen" />

                <a
                  href="mailto:info.zxsolarbhopal@gmail.com"
                  className="
                    transition-colors duration-300
                    hover:text-ecoGreen
                  "
                >
                  info.zxsolarbhopal@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* =========================
              Newsletter
          ========================== */}
          <div>
            <h3
              className="
                mb-5 text-sm font-bold
                uppercase tracking-[0.18em]
                text-ecoGold
              "
            >
              Stay in the loop
            </h3>

            <p className="mb-5 text-sm leading-6 text-white/60">
              Monthly ideas for lower-impact living and smarter energy.
            </p>

            <form
              className="
                flex items-center
                border-b border-white/25
                pb-2
                transition-colors duration-300
                focus-within:border-ecoGreen
              "
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="
                  min-w-0 flex-1
                  bg-transparent
                  text-sm text-white
                  placeholder:text-white/35
                  focus:outline-none
                "
                aria-label="Email address"
                required
              />

              <button
                type="submit"
                className="
                  text-ecoGreen
                  transition-all duration-300
                  hover:translate-x-1
                  hover:-translate-y-1
                  hover:text-ecoGold
                "
                aria-label="Subscribe"
              >
                <ArrowUpRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* =========================
            Bottom Footer
        ========================== */}
        <div
          className="
            flex flex-col
            justify-between gap-3
            border-t border-white/10
            pt-6
            text-xs text-white/40
            sm:flex-row
          "
        >
          <p>© 2026 ZXSOLAR. Better energy, better future.</p>

          <p>Open Mon - Sat · 8 am - 5 pm</p>
        </div>
      </div>
    </footer>
  )
}