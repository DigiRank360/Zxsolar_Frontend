import React, { useState } from 'react'
import { ArrowRight, Check, CheckCircle2, Gift, Sun, X } from 'lucide-react'
import { submitReferral } from '../services/api'

const initialForm = {
  referrerName: '',
  referrerPhone: '',
  referrerEmail: '',
  friendName: '',
  friendPhone: '',
  friendEmail: '',
  city: '',
  pinCode: '',
  serviceType: '',
  monthlyBill: '',
  consent: false,
}

const steps = [
  ['01', 'Refer your friend', 'Share their details with their permission.'],
  ['02', 'They switch to solar', 'Our team guides them through installation.'],
  ['03', 'Receive ₹5,000', 'After installation, full payment and verification.'],
]

function TextField({ label, name, value, onChange, type = 'text', placeholder, pattern, maxLength }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-bold text-slate-700">{label} <span className="text-ecoGold">*</span></span>
      <input
        required
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
        maxLength={maxLength}
        autoComplete="off"
        className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15"
      />
    </label>
  )
}

export default function ReferralPage() {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await submitReferral(form)
      setStatus({ type: 'success', message: response.message })
      setForm(initialForm)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
    <main className="min-h-screen bg-ecoGrayBg px-4 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 border border-ecoGreen/20 bg-ecoGreen/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.14em] text-ecoGreenDark">
            <Sun className="h-3.5 w-3.5" /> Share solar. Share the savings.
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-ecoDark sm:text-5xl">
            Refer a Friend.<br />
            <span className="text-ecoGreenDark">Earn <span className="text-ecoGold">₹5,000.</span></span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            Help a friend switch to solar. Receive ₹5,000 after their installation is completed and full payment is received, following verification by our team.
          </p>
        </header>

        <ol className="mt-9 grid gap-3 sm:grid-cols-3">
          {steps.map(([number, title, detail]) => (
            <li key={number} className="border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="inline-flex h-8 w-8 items-center justify-center bg-ecoGreen/10 text-xs font-extrabold text-ecoGreenDark">{number}</span>
              <h2 className="mt-3 text-sm font-extrabold text-ecoDark">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-slate-600">{detail}</p>
            </li>
          ))}
        </ol>

        <form onSubmit={handleSubmit} className="mt-7 space-y-8 border border-slate-200 bg-white p-5 shadow-[0_20px_55px_rgba(15,35,55,0.08)] sm:p-8 lg:p-10">
          <p className="text-xs text-slate-500">All fields marked <span className="text-red-500">*</span> are required.</p>

          <fieldset className="space-y-5">
            <legend className="mb-1 text-lg font-extrabold text-ecoDark">Your details</legend>
            <TextField label="Full name" name="referrerName" value={form.referrerName} onChange={handleChange} placeholder="Enter your full name" maxLength={100} />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Mobile number (WhatsApp)" name="referrerPhone" value={form.referrerPhone} onChange={handleChange} type="tel" placeholder="10-digit mobile number" pattern="[6-9][0-9]{9}" maxLength={10} />
              <TextField label="Email address" name="referrerEmail" value={form.referrerEmail} onChange={handleChange} type="email" placeholder="you@example.com" maxLength={160} />
            </div>
          </fieldset>

          <fieldset className="space-y-5 border-t border-slate-100 pt-6">
            <legend className="mb-1 text-lg font-extrabold text-ecoDark">Your friend&apos;s details</legend>
            <TextField label="Full name" name="friendName" value={form.friendName} onChange={handleChange} placeholder="Enter your friend's full name" maxLength={100} />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField label="Mobile number (WhatsApp)" name="friendPhone" value={form.friendPhone} onChange={handleChange} type="tel" placeholder="10-digit mobile number" pattern="[6-9][0-9]{9}" maxLength={10} />
              <TextField label="Email address" name="friendEmail" value={form.friendEmail} onChange={handleChange} type="email" placeholder="friend@example.com" maxLength={160} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-xs font-bold text-slate-700">City <span className="text-red-500">*</span></span>
                <select required name="city" value={form.city} onChange={handleChange} className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15">
                  <option value="">Select city</option>
                  {['Bhopal', 'Indore', 'Jabalpur', 'Delhi', 'Other'].map((city) => <option key={city} value={city}>{city}</option>)}
                </select>
              </label>
              <TextField label="Pincode" name="pinCode" value={form.pinCode} onChange={handleChange} placeholder="6-digit pincode" pattern="[0-9]{6}" maxLength={6} />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-xs font-bold text-slate-700">Service type <span className="text-red-500">*</span></span>
                <select required name="serviceType" value={form.serviceType} onChange={handleChange} className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15">
                  <option value="">Select service type</option>
                  <option value="Residential rooftop solar">Residential rooftop solar</option>
                  <option value="Housing society solar">Housing society solar</option>
                  <option value="Commercial or industrial solar">Commercial or industrial solar</option>
                </select>
              </label>
              <label className="block space-y-2">
                <span className="text-xs font-bold text-slate-700">Average monthly electricity bill <span className="text-red-500">*</span></span>
                <select required name="monthlyBill" value={form.monthlyBill} onChange={handleChange} className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15">
                  <option value="">Select bill range</option>
                  {['₹0 - ₹3,000', '₹3,000 - ₹5,000', '₹5,000 - ₹8,000', '₹8,000 - ₹12,000', '₹12,000+'].map((bill) => <option key={bill} value={bill}>{bill}</option>)}
                </select>
              </label>
            </div>
          </fieldset>

          <label className="flex items-start gap-3 border border-slate-200 bg-slate-50 p-4 text-xs leading-5 text-slate-600 sm:p-5">
            <input required type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-0.5 h-4 w-4 shrink-0 accent-[#74ba00]" />
            <span>I confirm that my friend has agreed to share their details and be contacted by Zxsolar Energies about solar installation. I understand the ₹5,000 reward is payable only after installation is completed and full payment is received, subject to verification by the team.</span>
          </label>

          <div>
            <button type="submit" disabled={isSubmitting} className="primary-button group w-full">
              {isSubmitting ? 'Submitting referral...' : 'Refer My Friend'} <ArrowRight className="h-4 w-4" />
            </button>
            {status.type === 'error' && <p role="alert" className="mt-4 text-center text-sm font-semibold text-red-600">{status.message}</p>}
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-xs text-slate-500"><Gift className="h-4 w-4 text-ecoGold" /> Our team handles follow-up and reward verification personally.</p>
          </div>
        </form>
      </div>
    </main>
    {status.type === 'success' && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10251b]/65 p-4 backdrop-blur-sm" role="presentation">
        <section role="dialog" aria-modal="true" aria-labelledby="referral-success-title" className="relative w-full max-w-md border border-white/70 bg-white px-6 py-10 text-center shadow-2xl sm:px-10">
          <button type="button" onClick={() => setStatus({ type: '', message: '' })} aria-label="Close referral confirmation" className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center text-slate-500 transition hover:bg-ecoGrayBg hover:text-ecoDark">
            <X className="h-5 w-5" />
          </button>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ecoGreen/10">
            <CheckCircle2 className="h-8 w-8 text-ecoGreen" />
          </span>
          <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ecoGreenDark">Welcome to Zxsolar Refer & Earn</p>
          <h2 id="referral-success-title" className="mt-2 text-2xl font-extrabold text-ecoDark sm:text-3xl">Thank you for referring!</h2>
          <p role="status" className="mt-3 text-sm leading-6 text-slate-600">{status.message}</p>
          <p className="mt-2 text-xs text-slate-500">We’ll contact your friend after reviewing the referral. Reward eligibility is subject to installation, full payment, and verification.</p>
          <button type="button" onClick={() => setStatus({ type: '', message: '' })} className="primary-button mt-7">Continue browsing</button>
        </section>
      </div>
    )}
    </>
  )
}