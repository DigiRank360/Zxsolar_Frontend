import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, ClipboardCheck, Ruler, Sun } from 'lucide-react'
import projectImage from '../../assets/ourProjects/VD Pal.jpeg'

const projectStages = [
  {
    number: '01',
    title: 'Site assessment',
    detail: 'Understand your roof, energy use, and project requirements.',
    Icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'System engineering',
    detail: 'Plan a right-sized system around your site and usage.',
    Icon: Ruler,
  },
  {
    number: '03',
    title: 'Installation & handover',
    detail: 'Install, verify, and guide you through your solar system.',
    Icon: Sun,
  },
]

export default function SkillsSection() {
  return (
    <section className="bg-[#f4f7f3] px-6 py-20 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#568b20]">
              <span className="h-px w-7 bg-[#d4aa51]" /> How we work
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#17251e] sm:text-4xl lg:text-5xl">
              Solar expertise, from first survey to system handover.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Practical engineering and a clear process help make every rooftop solar project easier to plan and deliver.
          </p>
        </div>

        <div className="grid overflow-hidden border border-[#dfe7df] bg-white shadow-[0_24px_60px_rgba(23,37,30,0.08)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="group relative min-h-[400px] overflow-hidden bg-[#173728] sm:min-h-[500px]">
            <img
              src={projectImage}
              alt="Customer rooftop solar panel installation"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0b1b13]/80 via-transparent to-[#0b1b13]/10" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
              <div className="border-l-2 border-[#b5d941] pl-4 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#d3e99a]">Installed solar</p>
                <p className="mt-1 text-sm font-semibold sm:text-base">Residential rooftop system</p>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/25 bg-white/10 text-white backdrop-blur-sm" aria-hidden="true">
                <Sun className="h-5 w-5" />
              </span>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
            <div className="mb-8 flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#74ba00]/10 text-[#5ca000]">
                <Check className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#568b20]">Engineering-led delivery</p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight text-[#17251e] sm:text-3xl">A clear path to rooftop solar.</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  We guide each project through assessment, system planning, installation, and handover.
                </p>
              </div>
            </div>

            <ol className="divide-y divide-slate-200 border-y border-slate-200">
              {projectStages.map(({ number, title, detail, Icon }) => (
                <li key={number} className="group flex gap-4 py-5">
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center bg-[#f3f6f2] text-[#568b20] transition-colors duration-300 group-hover:bg-[#74ba00] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-extrabold tracking-wider text-[#8b9b8d]">{number}</span>
                      <h4 className="text-sm font-extrabold text-[#17251e]">{title}</h4>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">{detail}</p>
                  </div>
                  <ArrowRight className="mt-3 h-4 w-4 shrink-0 text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#568b20]" />
                </li>
              ))}
            </ol>

            <Link to="/contact" className="primary-button mt-7 w-fit">
              Plan your solar project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
