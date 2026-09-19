import React from 'react'
import { ArrowRight, ShieldCheck, Ruler, Star } from 'lucide-react'
import EnquiryForm from '../components/common/EnquiryForm'

// Project Images
import Nitin from '../assets/ourProjects/Nitin Sahu.jpeg'
import Anita from '../assets/ourProjects/Anita Vishwakarma.jpeg'
import Laxmi from '../assets/ourProjects/Laxmi Oswal.jpeg'
import Manju from '../assets/ourProjects/Manju Dwevedi.jpeg'
import NeerajKumar from '../assets/ourProjects/Neeraj Kumar.jpeg'
import NeerajSahni from '../assets/ourProjects/Neeraj Sahni.jpeg'
import Pramod from '../assets/ourProjects/Pramod Jain.jpeg'
import Ramesh from '../assets/ourProjects/Ramesh Sinha.jpeg'
import Ranbir from '../assets/ourProjects/Ranbir Ghosh.jpeg'
import Sunil from '../assets/ourProjects/Sunil Kumar.jpeg'
import Urmila from '../assets/ourProjects/Urmila Mathur.jpeg'
import VDPal from '../assets/ourProjects/VD Pal.jpeg'


const projects = [
  {
    name: 'Nitin Sahu',
    location: 'Bhopal, Madhya Pradesh',
    size: '3 KW System',
    image: Nitin,
  },
  {
    name: 'Neeraj Sahni',
    location: 'Bhopal, Madhya Pradesh',
    size: '5 KW System',
    image: NeerajSahni,
  },
  {
    name: 'Anita Vishwakarma',
    location: 'Bhopal, Madhya Pradesh',
    size: '5 KW System',
    image: Anita,
  },
  {
    name: 'Ranbir Ghosh',
    location: 'Bhopal, Madhya Pradesh',
    size: '3 KW System',
    image: Ranbir,
  },
  {
    name: 'Pramod Jain',
    location: 'Bhopal, Madhya Pradesh',
    size: '6 KW System',
    image: Pramod,
  },
  {
    name: 'Sunil Kumar',
    location: 'Vidisha, Madhya Pradesh',
    size: '6 KW System',
    image: Sunil,
  },
  {
    name: 'Manju Dwevedi',
    location: 'Jabalpur, Madhya Pradesh',
    size: '3 KW System',
    image: Manju,
  },
  {
    name: 'Laxmi Oswal',
    location: 'Jabalpur, Madhya Pradesh',
    size: '6 KW System',
    image: Laxmi,
  },
  {
    name: 'Neeraj Kumar',
    location: 'Bhopal, Madhya Pradesh',
    size: '3 KW System',
    image: NeerajKumar,
  },
  {
    name: 'Urmila Mathur',
    location: 'Bhopal, Madhya Pradesh',
    size: '6 KW System',
    image: Urmila,
  },
  {
    name: 'Ramesh Sinha',
    location: 'Bhopal, Madhya Pradesh',
    size: '3 KW System',
    image: Ramesh,
  },
  {
    name: 'VD Pal',
    location: 'Bhopal, Madhya Pradesh',
    size: '6 KW System',
    image: VDPal,
  },
]


export default function ProjectsPage() {
  return (
    <div className="bg-[#f7faf7] text-[#17251e]">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#123426] px-6 py-24 text-white lg:px-16">

        <div className="absolute inset-0 opacity-20 solar-grid" />

        <div className="relative mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#b5d941]">
            Our projects
          </p>

          <h1 className="mt-5 max-w-3xl text-5xl font-extrabold leading-tight sm:text-6xl">
            India's Top Companies Choose{' '}
            <span className="text-[#b5d941]">
              Zxsolar Energies.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            From compact home systems to high-performance commercial
            rooftops, we turn unused space into dependable power plants.
          </p>

          <a
            href="#quote"
            className="primary-button mt-8 bg-[#b5d941] text-[#123426] shadow-none hover:bg-white hover:shadow-none"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </a>

        </div>
      </section>


      {/* ================= PROJECTS ================= */}
      <section className="px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6eae22]">
            Portfolio
          </p>

          <h2 className="mt-3 text-4xl font-extrabold">
            Our Completed Projects
          </h2>

          <p className="mt-3 text-slate-600">
            Transforming rooftops into power plants across India.
          </p>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (

              <article
                key={project.name}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >

                {/* IMAGE */}
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">

                  <img
                    src={project.image}
                    alt={`${project.name} solar project`}
                    className="h-full w-full object-contain object-top"
                  />

                </div>


                {/* CONTENT */}
                <div className="p-5">

                  <h3 className="text-xl font-bold">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {project.location}
                  </p>

                  <p className="mt-4 inline-flex rounded-full bg-[#edf5e9] px-3 py-1 text-sm font-bold text-[#568b20]">
                    {project.size}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="bg-[#123426] px-6 py-14 text-white lg:px-16">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">

          {[
            ['10+', 'Commercial Projects'],
            ['1.5+', 'Years Experience'],
            ['2.5 MWp', 'Installation Experience'],
            ['21 Cr+', 'Annual Savings'],
          ].map(([number, label]) => (

            <div key={label}>

              <p className="text-3xl font-extrabold text-[#b5d941]">
                {number}
              </p>

              <p className="mt-2 text-sm text-white/70">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= FEATURES ================= */}
      <section className="px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 md:grid-cols-2">


            {/* BEST PRICE */}
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="aspect-video bg-slate-100">

                <img
                  src="https://plus.unsplash.com/premium_photo-1682148210747-ad527ef4117b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEJlc3QlMjBQcmljZSUyMENoYWxsZW5nZSUyMGluJTIwc29sYXJ8ZW58MHx8MHx8fDA%3D"
                  alt="Solar installation"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="p-7">

                <ShieldCheck className="h-8 w-8 text-[#6eae22]" />

                <h3 className="mt-5 text-2xl font-bold">
                  Best Price Challenge
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Premium solar systems using top-quality components,
                  at competitive prices, for a lifetime of high
                  performance and savings.
                </p>

              </div>

            </article>


            {/* PRECISION DESIGN */}
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm">

              <div className="aspect-video bg-slate-100">

                <img
                  src="https://images.unsplash.com/photo-1641959166358-6d08825fb88f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEdyZWF0JTIwU29sYXIlMjBTdGFydHMlMjB3aXRoJTIwUHJlY2lzaW9uJTIwRGVzaWducyUyMGluJTIwc29sYXJ8ZW58MHx8MHx8fDA%3D"
                  alt="Solar design process"
                  className="h-full w-full object-cover"
                />

              </div>

              <div className="p-7">

                <Ruler className="h-8 w-8 text-[#6eae22]" />

                <h3 className="mt-5 text-2xl font-bold">
                  Great Solar Starts with Precision Designs
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  We survey your roof, take measurements and conduct
                  shadow analysis to create a precise 3D design.
                </p>

              </div>

            </article>

          </div>

        </div>

      </section>


      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-white px-6 py-20 lg:px-16">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6eae22]">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-extrabold">
            Exceptional Quality. End-to-End Service.
          </h2>


          <div className="mt-10 grid gap-6 text-left md:grid-cols-2">

            {[
              [
                'Solar team was very professional and had excellent interpersonal relations. The 2MW Solar Project was completed within 3 months without escalations.',
                'Dr R K Sharma',
              ],
              [
                'Zxsolar has met the strictest Quality & Safety norms dictated by the Global Standards of Johnson & Johnson.',
                'Vineet Agrawal',
              ],
            ].map(([quote, name]) => (

              <blockquote
                key={name}
                className="rounded-2xl border border-slate-200 p-7"
              >

                <div className="flex gap-1 text-[#e9b52f]">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      className="h-4 w-4 fill-current"
                    />

                  ))}

                </div>


                <p className="mt-5 leading-7 text-slate-600">
                  “{quote}”
                </p>


                <footer className="mt-5 font-bold">

                  {name}

                  <span className="block text-sm font-normal text-slate-500">
                    Madhya Pradesh
                  </span>

                </footer>

              </blockquote>

            ))}

          </div>

        </div>

      </section>


      {/* ================= ENQUIRY ================= */}
      <section
        id="quote"
        className="bg-[#edf5e9] px-6 py-20 lg:px-16"
      >

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#6eae22]">
              Get started
            </p>

            <h2 className="mt-3 text-4xl font-extrabold">
              Submit a Solar Project Enquiry
            </h2>

            <p className="mt-3 text-slate-600">
              Our solar experts will guide you in your solar journey.
            </p>

          </div>

          <EnquiryForm serviceType="Project Enquiry" />

        </div>

      </section>

    </div>
  )
}