import React, { createContext, useContext, useEffect, useState } from 'react'
import { ArrowRight, CheckCircle2, X } from 'lucide-react'
import { submitQuote } from '../../services/api'

const QuoteModalContext = createContext(null)

const initialForm = {
  name: '',
  phone: '',
  email: '',
  city: '',
  propertyType: '',
  monthlyBill: '',
  message: '',
  agreeTerms: false,
}

function QuoteModal({ onClose }) {
  const [form, setForm] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submittedName, setSubmittedName] = useState('')

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !isSubmitting) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isSubmitting, onClose])

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await submitQuote(form)
      setSubmittedName(form.name.trim())
      setStatus({ type: 'success', message: response.message })
      setForm(initialForm)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10251b]/65 p-3 backdrop-blur-sm sm:p-6" onMouseDown={(event) => event.target === event.currentTarget && !isSubmitting && onClose()}>
      <section role="dialog" aria-modal="true" aria-labelledby="quote-dialog-title" className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto border border-white/70 bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur sm:px-8">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-ecoGreenDark">Solar consultation</p>
            <h2 id="quote-dialog-title" className="mt-1 text-xl font-extrabold text-ecoDark sm:text-2xl">Get your free solar quote</h2>
            <p className="mt-1 text-xs text-slate-500">Share a few details and our team will get back to you.</p>
          </div>
          <button type="button" onClick={onClose} disabled={isSubmitting} aria-label="Close quote form" className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center text-slate-500 transition hover:bg-ecoGrayBg hover:text-ecoDark disabled:opacity-50">
            <X className="h-5 w-5" />
          </button>
        </div>

        {status.type === 'success' ? (
          <div className="px-6 py-12 text-center sm:px-10">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ecoGreen/10">
              <CheckCircle2 className="h-8 w-8 text-ecoGreen" />
            </span>
            <p className="mt-5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-ecoGreenDark">Welcome to Zxsolar Energies</p>
            <h3 id="quote-success-title" className="mt-2 text-2xl font-extrabold text-ecoDark sm:text-3xl">
              Thank you{submittedName ? `, ${submittedName}` : ''}!
            </h3>
            <p role="status" className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">{status.message}</p>
            <p className="mt-2 text-xs text-slate-500">Our solar team will be in touch shortly to discuss your requirements.</p>
            <button type="button" onClick={onClose} className="primary-button mt-7">Continue browsing</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 px-5 py-6 sm:grid-cols-2 sm:gap-5 sm:px-8 sm:py-7">
            <label className="space-y-1.5 sm:col-span-2">
              <span className="block text-xs font-bold text-slate-700">Full name <span className="text-red-500">*</span></span>
              <input autoFocus required name="name" value={form.name} onChange={handleChange} maxLength={100} autoComplete="name" placeholder="Your full name" className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15" />
            </label>

            <label className="space-y-1.5">
              <span className="block text-xs font-bold text-slate-700">WhatsApp number <span className="text-red-500">*</span></span>
              <input required type="tel" name="phone" value={form.phone} onChange={handleChange} minLength={10} maxLength={20} autoComplete="tel" placeholder="10-digit mobile number" className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15" />
            </label>

            <label className="space-y-1.5">
              <span className="block text-xs font-bold text-slate-700">Email address</span>
              <input type="email" name="email" value={form.email} onChange={handleChange} maxLength={160} autoComplete="email" placeholder="you@example.com" className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15" />
            </label>

            <label className="space-y-1.5">
              <span className="block text-xs font-bold text-slate-700">City <span className="text-red-500">*</span></span>
              <input required name="city" value={form.city} onChange={handleChange} maxLength={100} autoComplete="address-level2" placeholder="Your city" className="w-full border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15" />
            </label>

            <label className="space-y-1.5">
              <span className="block text-xs font-bold text-slate-700">Property type <span className="text-red-500">*</span></span>
              <select required name="propertyType" value={form.propertyType} onChange={handleChange} className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15">
                <option value="">Select type</option>
                <option value="Homes">Home / Villa</option>
                <option value="Housing Society">Housing society</option>
                <option value="Commercial">Commercial / Industrial</option>
              </select>
            </label>

            <label className="space-y-1.5 sm:col-span-2">
              <span className="block text-xs font-bold text-slate-700">Average monthly electricity bill <span className="text-red-500">*</span></span>
              <select required name="monthlyBill" value={form.monthlyBill} onChange={handleChange} className="w-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15">
                <option value="">Select bill range</option>
                {['Less than ₹1,500', '₹1,500 - ₹2,500', '₹2,500 - ₹4,000', '₹4,000 - ₹8,000', 'More than ₹8,000'].map((bill) => <option key={bill} value={bill}>{bill}</option>)}
              </select>
            </label>

            <label className="space-y-1.5 sm:col-span-2">
              <span className="block text-xs font-bold text-slate-700">Project details <span className="font-normal text-slate-400">(optional)</span></span>
              <textarea name="message" value={form.message} onChange={handleChange} maxLength={2000} rows={3} placeholder="Anything else we should know?" className="w-full resize-y border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-ecoGreen focus:ring-2 focus:ring-ecoGreen/15" />
            </label>

            <label className="flex items-start gap-3 text-xs leading-5 text-slate-600 sm:col-span-2">
              <input required type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handleChange} className="mt-0.5 h-4 w-4 shrink-0 accent-[#74ba00]" />
              <span>I agree to be contacted by Zxsolar Energies about this solar enquiry.</span>
            </label>

            <div className="sm:col-span-2">
              <button type="submit" disabled={isSubmitting} className="primary-button group w-full">
                {isSubmitting ? 'Sending your request...' : 'Request my free quote'}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {status.type === 'error' && <p role="alert" className="mt-3 text-sm font-semibold text-red-600">{status.message}</p>}
              <p className="mt-3 text-center text-[11px] text-slate-500">No obligation. Your details are used only to respond to your enquiry.</p>
            </div>
          </form>
        )}
      </section>
    </div>
  )
}

export function QuoteModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const openQuote = () => setIsOpen(true)
  const closeQuote = () => setIsOpen(false)

  return (
    <QuoteModalContext.Provider value={{ openQuote }}>
      {children}
      {isOpen && <QuoteModal onClose={closeQuote} />}
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) throw new Error('useQuoteModal must be used inside QuoteModalProvider')
  return context
}
