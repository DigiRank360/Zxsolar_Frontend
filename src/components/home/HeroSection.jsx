import React, { useState, useEffect } from 'react'
import {
  ArrowRight,
  Leaf,
  Sun,
  ShieldCheck,
  Zap,
} from 'lucide-react'

// Array of background images for slider functionality
const slideImages = [
  "https://plus.unsplash.com/premium_photo-1682148194049-635e971252d6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg5fHxTb2xhcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661952328751-a958e0a1f7fb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY5fHxTb2xhcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1617269778723-73a40cf299bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fFNvbGFyfGVufDB8fDB8fHww"
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-play slide transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-[#0d1714] text-white">
      {/* Dynamic Animated Glow Effect */}
      <style>{`
        @keyframes subtleGlow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        .animate-image-glow {
          animation: subtleGlow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#3f8f4f]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[35%] h-[300px] w-[300px] rounded-full bg-[#d2a64b]/5 blur-[100px]" />

        {/* Subtle background grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
            `,
            backgroundSize: '70px 70px',
          }}
        />
      </div>

      <div className="relative grid min-h-[720px] grid-cols-1 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="relative z-20 flex items-center px-5 py-20 sm:px-8 md:px-12 lg:px-16 xl:px-24">
          {/* Functional Slider Controls */}
          <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex z-30">
            {slideImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`transition-all duration-300 rotate-45 border ${
                  currentSlide === idx
                    ? 'h-3 w-3 border-ecoGreen bg-ecoGreen scale-110 shadow-[0_0_10px_#74ba00]'
                    : 'h-2 w-2 border-ecoGreen/50 hover:bg-ecoGreen/80'
                }`}
              />
            ))}
            <span className="mt-2 h-16 w-px bg-gradient-to-b from-[#78b862]/60 to-transparent" />
          </div>

          <div className="mx-auto w-full max-w-[650px] lg:mx-0">
            {/* Eyebrow badge */}
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#79b965]/20 bg-[#79b965]/10">
                <Leaf className="h-4 w-4 text-[#87c872]" />
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#87c872]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b0c0b8]">
                  Renewable Energy Solutions
                </p>
              </div>
            </div>

            {/* Heading Section */}
            <div className="relative">
              {/* ZXSOLAR Visibility Enhanced (Opacity opacity-15 & gradient effect) */}
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  -left-1 -top-10
                  select-none whitespace-nowrap
                  text-[54px] font-black tracking-[-0.04em]
                  text-white/15
                  sm:text-[72px]
                  md:-top-14 md:text-[92px]
                  lg:-left-3 lg:text-[105px]
                  xl:text-[120px]
                  drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]
                "
              >
                ZXSOLAR
              </span>

              <h1
                className="
                  relative max-w-[620px]
                  text-[40px] font-extrabold
                  leading-[1.05] tracking-[-0.04em]
                  sm:text-[50px]
                  md:text-[58px]
                  xl:text-[68px]
                "
              >
                Powering a more
                <span className="block">
                  sustainable{' '}
                  <span className="relative inline-block text-[#d4aa51]">
                    future.
                    <svg
                      className="absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 200 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8C45 2 123 2 197 6"
                        stroke="#78B862"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </h1>
            </div>

            <p className="mt-8 max-w-[540px] text-sm leading-7 text-[#a6b1ac] sm:text-[15px] md:text-base">
              We deliver professional solar and ecological solutions designed
              to reduce environmental impact, improve energy efficiency, and
              create long-term sustainable value.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                className="
                  group relative inline-flex min-h-[54px]
                  items-center justify-center gap-4
                  overflow-hidden rounded-sm
                  bg-ecoGreen
                  px-7 py-4
                  text-xs font-bold uppercase tracking-[0.16em]
                  text-white
                  shadow-ecoGreen/25
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-ecoGreenDark
                  hover:shadow-ecoGreen/35
                "
              >
                <span className="relative z-10">Discover More</span>

                <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[110%]" />
              </button>

              <button
                className="
                  group inline-flex min-h-[54px]
                  items-center justify-center gap-3
                  border border-white/10
                  bg-white/[0.03]
                  px-7 py-4
                  text-xs font-semibold uppercase tracking-[0.15em]
                  text-[#d8dedb]
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:border-ecoGreen/40
                  hover:bg-white/[0.06]
                  hover:text-white
                "
              >
                Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Feature Badges */}
            <div className="mt-12 grid max-w-[560px] grid-cols-2 gap-4 border-t border-white/[0.08] pt-7 sm:grid-cols-3">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#78b862]" />
                  <span className="text-lg font-extrabold text-white">100%</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#718078]">
                  Clean Energy
                </p>
              </div>

              <div>
                <div className="mb-2 flex items-center gap-2">
                  <Sun className="h-4 w-4 text-[#d4aa51]" />
                  <span className="text-lg font-extrabold text-white">Solar</span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#718078]">
                  Smart Solutions
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#78b862]" />
                  <span className="text-lg font-extrabold text-white">
                    Efficient
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-[#718078]">
                  Performance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER & GLOW */}
        <div className="relative min-h-[520px] overflow-hidden lg:min-h-full">
          {/* Animated Background Glow Layer */}
          <div className="animate-image-glow pointer-events-none absolute inset-0 z-10 bg-gradient-to-tr from-[#78b862]/20 via-transparent to-[#d4aa51]/20 mix-blend-screen" />

          {/* 3 Switching Images */}
          {slideImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Solar panel slide ${index + 1}`}
              className={`
                absolute inset-0 h-full w-full object-cover object-center
                transition-all duration-1000 ease-in-out
                ${
                  currentSlide === index
                    ? 'opacity-100 scale-100 z-0'
                    : 'opacity-0 scale-105 z-0 pointer-events-none'
                }
              `}
            />
          ))}

          {/* Image Overlay Gradients */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d1714] via-[#0d1714]/15 to-transparent lg:from-[#0d1714]/60" />
          <div className="absolute inset-x-0 bottom-0 z-10 h-[45%] bg-gradient-to-t from-[#09120f]/80 via-[#09120f]/20 to-transparent" />
          <div className="absolute inset-0 z-10 bg-[#427d48]/[0.07] mix-blend-color" />

          {/* Status Badge */}
          <div className="absolute right-5 top-5 z-20 sm:right-8 sm:top-8">
            <div className="flex items-center gap-3 border border-white/15 bg-[#0c1712]/50 px-4 py-3 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#79bd64] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#79bd64]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                Sustainable Energy
              </span>
            </div>
          </div>

          {/* Floating Card */}
          <div
            className="
              absolute bottom-6 left-5 right-5 z-20
              border border-white/10
              bg-[#0b1712]/75
              p-5
              shadow-2xl
              backdrop-blur-xl
              sm:bottom-8 sm:left-8 sm:right-auto sm:w-[330px]
              lg:bottom-10 lg:left-10
            "
          >
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#83bd70]">
                  Our Commitment
                </p>

                <h3 className="text-lg font-bold text-white">
                  Cleaner energy.
                  <br />
                  Better tomorrow.
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#79b965]/10">
                <Sun className="h-5 w-5 text-[#d4aa51]" />
              </div>
            </div>

            <div className="h-[2px] w-full overflow-hidden bg-white/10">
              <div className="h-full w-[78%] bg-gradient-to-r from-[#79b965] to-[#d4aa51]" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                Sustainable Impact
              </span>

              <span className="text-xs font-bold text-white">78%</span>
            </div>
          </div>

          {/* Vertical Label */}
          <div className="absolute bottom-12 right-5 z-20 hidden xl:block">
            <p
              className="text-[9px] font-semibold uppercase tracking-[0.45em] text-white/30"
              style={{ writingMode: 'vertical-rl' }}
            >
              Renewable • Sustainable • Future
            </p>
          </div>
        </div>

        {/* Dynamic Progress Bar mapped to Active Slide */}
        <div className="absolute bottom-0 left-0 z-30 flex h-[3px] w-full">
          <div
            className="h-full bg-[#78b862] transition-all duration-700 ease-out"
            style={{
              width: `${((currentSlide + 1) / slideImages.length) * 100}%`,
            }}
          />
          <div className="flex-1 bg-white/[0.08]" />
        </div>
      </div>
    </section>
  )
}