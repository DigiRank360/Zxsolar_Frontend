import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Quote, ShieldCheck } from 'lucide-react'
import Anita from '../../assets/ourProjects/Anita Vishwakarma.jpeg'
import Laxmi from '../../assets/ourProjects/Laxmi Oswal.jpeg'
import Manju from '../../assets/ourProjects/Manju Dwevedi.jpeg'
import NeerajKumar from '../../assets/ourProjects/Neeraj Kumar.jpeg'
import NeerajSahni from '../../assets/ourProjects/Neeraj Sahni.jpeg'
import Nitin from '../../assets/ourProjects/Nitin Sahu.jpeg'
import Pramod from '../../assets/ourProjects/Pramod Jain.jpeg'
import Ramesh from '../../assets/ourProjects/Ramesh Sinha.jpeg'
import Ranbir from '../../assets/ourProjects/Ranbir Ghosh.jpeg'
import Sunil from '../../assets/ourProjects/Sunil Kumar.jpeg'
import Urmila from '../../assets/ourProjects/Urmila Mathur.jpeg'
import VDPal from '../../assets/ourProjects/VD Pal.jpeg'

const testimonials = [
  {
    name: 'Dr R K Sharma',
    context: '2 MW solar project',
    quote: 'Solar team was very professional and had excellent interpersonal relations. The 2MW Solar Project was completed within 3 months without escalations.',
  },
  {
    name: 'Vineet Agrawal',
    context: 'Quality & safety',
    quote: 'Zxsolar has met the strictest Quality & Safety norms dictated by the Global Standards of Johnson & Johnson.',
  },
]

const clients = [
  ['Nitin Sahu', 'Bhopal, MP', '3 kW rooftop system', Nitin],
  ['Neeraj Sahni', 'Bhopal, MP', '5 kW rooftop system', NeerajSahni],
  ['Anita Vishwakarma', 'Bhopal, MP', '5 kW rooftop system', Anita],
  ['Ranbir Ghosh', 'Bhopal, MP', '3 kW rooftop system', Ranbir],
  ['Pramod Jain', 'Bhopal, MP', '6 kW rooftop system', Pramod],
  ['Sunil Kumar', 'Vidisha, MP', '6 kW rooftop system', Sunil],
  ['Manju Dwevedi', 'Jabalpur, MP', '3 kW rooftop system', Manju],
  ['Laxmi Oswal', 'Jabalpur, MP', '6 kW rooftop system', Laxmi],
  ['Neeraj Kumar', 'Bhopal, MP', '3 kW rooftop system', NeerajKumar],
  ['Urmila Mathur', 'Bhopal, MP', '6 kW rooftop system', Urmila],
  ['Ramesh Sinha', 'Bhopal, MP', '3 kW rooftop system', Ramesh],
  ['VD Pal', 'Bhopal, MP', '6 kW rooftop system', VDPal],
]

function ClientTrack({ copy = false }) {
  return (
    <div className="flex shrink-0 gap-5 pr-5" aria-hidden={copy || undefined}>
      {clients.map(([name, location, system, image]) => (
        <Link
          key={name}
          to="/projects#client-projects"
          tabIndex={copy ? -1 : undefined}
          className="group w-[230px] shrink-0 overflow-hidden border border-white/10 bg-[#10251b] text-white transition-colors duration-300 hover:border-[#b5d941]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b5d941]"
        >
          <div className="h-[190px] overflow-hidden bg-[#1c3529]">
            <img
              src={image}
              alt={`${name} rooftop solar project`}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex items-start justify-between gap-3 p-4">
            <div>
              <h3 className="text-sm font-bold">{name}</h3>
              <p className="mt-1 text-xs text-white/55">{location} · {system}</p>
            </div>
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-[#b5d941] transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-[#f3f7f3] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#2e7d32]">
              <span className="h-px w-7 bg-[#d4aa51]" /> Client experiences
            </p>
            <h2 className="text-3xl font-extrabold leading-tight text-[#10251b] sm:text-4xl lg:text-5xl">
              Trusted on the roof.<br className="hidden sm:block" /> Proven on the project.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-slate-600 sm:text-base">
            Feedback from our clients, alongside real rooftop installations delivered across Madhya Pradesh.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <blockquote
              key={testimonial.name}
              className={`group relative flex min-h-[285px] flex-col justify-between overflow-hidden border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9 ${index === 0 ? 'border-[#123426] bg-[#123426] text-white' : 'border-[#dfe7df] bg-white text-[#10251b]'}`}
            >
              <Quote aria-hidden="true" className={`absolute right-7 top-7 h-11 w-11 opacity-20 transition-transform duration-300 group-hover:scale-110 ${index === 0 ? 'text-[#b5d941]' : 'text-[#2e7d32]'}`} />
              <div className="relative">
                <p className={`mb-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] ${index === 0 ? 'text-[#c8e47a]' : 'text-[#568b20]'}`}>
                  <ShieldCheck className="h-4 w-4" /> Client testimonial
                </p>
                <p className="max-w-xl text-lg font-semibold leading-8 sm:text-xl sm:leading-9">
                  “{testimonial.quote}”
                </p>
              </div>
              <footer className={`relative mt-8 flex items-center justify-between border-t pt-5 ${index === 0 ? 'border-white/15' : 'border-slate-200'}`}>
                <div>
                  <cite className="not-italic text-base font-extrabold">{testimonial.name}</cite>
                  <p className={`mt-1 text-xs font-medium ${index === 0 ? 'text-white/60' : 'text-slate-500'}`}>{testimonial.context}</p>
                </div>
                <span className={`text-xs font-extrabold tracking-[0.16em] ${index === 0 ? 'text-[#b5d941]' : 'text-[#6eae22]'}`}>
                  0{index + 1} / 02
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto mb-5 flex max-w-7xl items-end justify-between gap-4 px-6 lg:px-16">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#568b20]">Installed for our clients</p>
            <h3 className="mt-2 text-xl font-extrabold text-[#10251b] sm:text-2xl">Rooftops powered by Zxsolar</h3>
          </div>
          <Link to="/projects#client-projects" className="inline-flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2e7d32] transition-colors hover:text-[#10251b]">
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="client-marquee overflow-hidden" aria-label="Client solar installations">
          <div className="client-marquee-track flex w-max">
            <ClientTrack />
            <ClientTrack copy />
          </div>
        </div>
      </div>
    </section>
  )
}