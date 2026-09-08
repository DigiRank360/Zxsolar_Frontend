import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { submitQuote } from '../../services/api'

export default function EnquiryForm({ serviceType = 'Solar Enquiry' }) {
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', monthlyBill: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (event) => setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })
    try {
      const response = await submitQuote({ ...formData, propertyType: serviceType, agreeTerms: true })
      setStatus({ type: 'success', message: response.message })
      setFormData({ name: '', phone: '', city: '', monthlyBill: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-sm md:grid-cols-2 lg:p-8">
    <input name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name *" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-ecoGreen" />
    <input name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="WhatsApp Number *" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-ecoGreen" />
    <input name="city" value={formData.city} onChange={handleChange} required placeholder="City *" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-ecoGreen" />
    <input name="monthlyBill" value={formData.monthlyBill} onChange={handleChange} required placeholder="Average Monthly Bill *" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-ecoGreen" />
    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirement" rows="3" className="rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-ecoGreen md:col-span-2" />
    <div className="flex flex-wrap items-center gap-4 md:col-span-2"><button type="submit" disabled={isSubmitting} className="primary-button">{isSubmitting ? 'Sending...' : 'Submit Enquiry'} <ArrowRight className="h-4 w-4" /></button>{status.message && <p className={`text-sm font-semibold ${status.type === 'success' ? 'text-ecoGreen' : 'text-red-600'}`}>{status.message}</p>}</div>
  </form>
}