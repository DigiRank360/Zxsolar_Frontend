import React, { useEffect, useRef, useState } from 'react'
import { ShieldCheck, Award, Leaf, Zap } from 'lucide-react'

const clientLogos = [
  { name: 'Tata Power Solar', logoUrl: '/brands/tata-power-solar.svg' },
  { name: 'Adani Solar', logoUrl: '/brands/adani-solar.svg' },
  { name: 'JSW', logoUrl: '/brands/jsw.svg' },
  { name: 'Havells', logoUrl: '/brands/havells.svg' },
  { name: 'Vikram Solar', logoUrl: '/brands/vikram-solar.svg' },
]

const metrics = [
  { target: 500, suffix: '+', label: 'Commercial projects completed' },
  { target: 50, suffix: ' MW+', label: 'Clean energy generated' },
  { target: 99.8, suffix: '%', label: 'System uptime & efficiency' },
  { target: 150, suffix: '+', label: 'Corporate partners' },
]

const certifications = [
  {
    title: 'ISO 9001:2015 Certified',
    detail: 'Quality management standards',
    Icon: ShieldCheck,
    tone: 'green',
  },
  {
    title: 'Tier-1 Components',
    detail: 'Long-term product warranties',
    Icon: Award,
    tone: 'gold',
  },
  {
    title: 'MNRE Approved',
    detail: 'Government scheme eligible',
    Icon: Leaf,
    tone: 'green',
  },
]

function CountUpMetric({ target, suffix, label }) {
  const [value, setValue] = useState(0)
  const metricRef = useRef(null)

  useEffect(() => {
    const element = metricRef.current
    if (!element) return undefined

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setValue(target)
      return undefined
    }

    let frameId
    let observer
    observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const startTime = performance.now()
      const duration = 1500
      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setValue(target * easedProgress)

        if (progress < 1) frameId = requestAnimationFrame(animate)
        else setValue(target)
      }

      frameId = requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.5 })

    observer.observe(element)
    return () => {
      observer?.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [target])

  const formattedValue = target % 1 === 0
    ? Math.round(value).toLocaleString('en-IN')
    : value.toFixed(1)

  return (
    <div ref={metricRef} className="px-4 py-6 text-center sm:px-6 lg:py-2">
      <p className="min-h-11 text-3xl font-extrabold tracking-tight text-[#5ca000] sm:text-4xl lg:text-[2.6rem]" aria-label={`${target}${suffix}`}>
        <span aria-hidden="true">{formattedValue}{suffix}</span>
      </p>
      <p className="mx-auto mt-2 max-w-[190px] text-xs font-medium leading-5 text-slate-500 sm:text-sm">
        {label}
      </p>
    </div>
  )
}

function LogoSet({ duplicate = false }) {
  return (
    <div className="flex shrink-0 items-center gap-12 px-6 sm:gap-20 sm:px-10" aria-hidden={duplicate || undefined}>
      {clientLogos.map((client) => (
        <div key={client.name} className="flex h-16 w-32 shrink-0 items-center justify-center sm:w-40">
          <img
            src={client.logoUrl}
            alt={duplicate ? '' : client.name}
            loading="lazy"
            className="max-h-10 max-w-[130px] object-contain grayscale opacity-55 transition duration-300 hover:grayscale-0 hover:opacity-100 sm:max-w-[150px]"
          />
        </div>
      ))}
    </div>
  )
}

export default function TrustedByIndustry() {
  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-16 font-sans sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 border border-[#74ba00]/20 bg-[#74ba00]/[0.08] px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#568b20]">
            <Zap className="h-3.5 w-3.5 fill-current" /> Industry leadership
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#17251e] sm:text-4xl lg:text-5xl">
            Trusted by India’s <span className="text-[#68a900]">leading enterprises</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            We partner with industrial units, commercial complexes, and government organizations to deliver dependable solar projects.
          </p>
        </div>

        <div className="mt-14 sm:mt-16">
          <p className="mb-5 text-center text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400 sm:text-xs">
            Powering industry leaders across the nation
          </p>
          <div className="trust-logo-marquee relative overflow-hidden" aria-label="Partner brands">
            <div className="trust-logo-track flex w-max items-center">
              <LogoSet />
              <LogoSet duplicate />
            </div>
          </div>
        </div>

        <div className="mt-12 border-y border-slate-200 bg-[#f8faf8] py-3 sm:mt-14 sm:py-8">
          <div className="grid grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">
            {metrics.map((metric) => (
              <CountUpMetric key={metric.label} {...metric} />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 border-t border-slate-100 pt-8 sm:grid-cols-3 sm:gap-6 lg:mt-12">
          {certifications.map(({ title, detail, Icon, tone }) => (
            <div key={title} className="flex items-center gap-3 sm:justify-center">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center ${tone === 'gold' ? 'bg-[#f5a623]/10 text-[#bd7e13]' : 'bg-[#74ba00]/10 text-[#5ca000]'}`}>
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <span>
                <span className="block text-[10px] font-extrabold uppercase tracking-wide text-[#17251e] sm:text-[11px]">{title}</span>
                <span className="mt-1 block text-[11px] leading-4 text-slate-500">{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}