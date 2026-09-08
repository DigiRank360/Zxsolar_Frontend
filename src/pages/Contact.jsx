import React, { useState } from 'react'
import { submitQuote } from '../services/api'

const Contact = () => {
  const [propertyType, setPropertyType] = useState('Homes')
  const [monthlyBill, setMonthlyBill] = useState('₹2500 - ₹4000')
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pinCode: '',
    city: '',
    email: '',
    agreeTerms: true
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const response = await submitQuote({
        propertyType,
        monthlyBill,
        ...formData
      })
      setSubmitStatus({ type: 'success', message: response.message })
      setFormData({ name: '', phone: '', pinCode: '', city: '', email: '', agreeTerms: true })
    } catch (error) {
      setSubmitStatus({ type: 'error', message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact" className="bg-ecoGrayBg min-h-screen py-12 lg:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 bg-ecoGreen/10 text-ecoGreen font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border border-ecoGreen/20">
            <span className="w-2 h-2 rounded-full bg-ecoGreen animate-pulse"></span>
            Solar Solutions For Every Need
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ecoDark tracking-tight leading-tight">
            Start Your Solar Journey With <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ecoGreen to-ecoGreenDark">
              Zxsolar Energies
            </span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-normal">
            Get reliable solar solutions for homes, housing societies, offices, and industries. Reduce your electricity bills with a system designed for your energy needs.
          </p>
          <div className="pt-2">
            <a
              href="#form-section"
              className="primary-button group"
            >
              <span className="relative z-10">Request a Free Quote</span>
              <span className="relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
              <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[110%]" />
            </a>
          </div>
        </div>

        {/* Main Grid Section */}
        <div id="form-section" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Info Card & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-white p-8 lg:p-10 rounded-3xl border border-gray-100 shadow-sm">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ecoGreen bg-ecoGreen/10 px-3 py-1 rounded-md">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Get Started Today
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-ecoDark leading-tight">
                Schedule a <span className="text-ecoGreen">FREE</span> <br />
                Consultation With Us!
              </h2>

              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Get a professional rooftop assessment, customized system estimate, subsidy guidance, and clear savings information from our solar experts. No-pressure consultation.
              </p>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="p-4 bg-ecoGrayBg rounded-2xl border border-gray-100/80">
                <p className="text-2xl font-black text-ecoDark">25+ Yrs</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Performance Warranty</p>
              </div>
              <div className="p-4 bg-ecoGrayBg rounded-2xl border border-gray-100/80">
                <p className="text-2xl font-black text-ecoGreen">Zero</p>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Upfront Assessment Cost</p>
              </div>
            </div>

            {/* Quick Contact snippet */}
            <div className="bg-ecoDark text-white p-5 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Direct Inquiry</p>
                <p className="text-sm font-bold text-white mt-0.5">+91 6232750068</p>
              </div>
              <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-ecoGreen">
                📞
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-ecoDark">Calculate Your Solar Savings</h3>
                <p className="text-xs text-gray-500 mt-1">Select your property category and average electricity spend.</p>
              </div>

              {/* Professional Segmented Control Property Tabs */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center justify-between px-1">
                  <label className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                    Select Property Category <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] font-semibold text-ecoGreen bg-ecoGreen/10 px-2.5 py-0.5 rounded-full border border-ecoGreen/20">
                    {propertyType} Selected
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 bg-gray-100/90 p-1.5 rounded-2xl border border-gray-200/60 shadow-inner">
                  {[
                    { 
                      id: 'Homes', 
                      label: 'Residential', 
                      subtext: 'Homes & Villas', 
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 00-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 00-1 1m-6 0h6" />
                        </svg>
                      ) 
                    },
                    { 
                      id: 'Housing Society', 
                      label: 'Housing Society', 
                      subtext: 'Apartments & RWAs', 
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4" />
                        </svg>
                      ) 
                    },
                    { 
                      id: 'Commercial', 
                      label: 'Commercial', 
                      subtext: 'Offices & Factories', 
                      icon: (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4-7h4" />
                        </svg>
                      ) 
                    }
                  ].map((tab) => {
                    const isActive = propertyType === tab.id
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setPropertyType(tab.id)}
                        className={`relative group flex sm:flex-col items-center justify-between sm:justify-center gap-2 p-3 sm:py-3.5 sm:px-4 rounded-xl transition-all duration-300 ${
                          isActive
                            ? 'bg-white text-ecoDark shadow-lg shadow-gray-200/80 border border-gray-100 font-bold'
                            : 'text-gray-500 hover:text-ecoDark hover:bg-white/60 font-medium'
                        }`}
                      >
                        <div className="flex items-center sm:flex-col gap-2">
                          <span
                            className={`p-1.5 rounded-lg transition-colors duration-300 ${
                              isActive
                                ? 'bg-ecoGreen text-white shadow-md shadow-ecoGreen/30'
                                : 'bg-gray-200/70 text-gray-500 group-hover:bg-gray-200 group-hover:text-ecoDark'
                            }`}
                          >
                            {tab.icon}
                          </span>
                          <div className="text-left sm:text-center">
                            <span className="block text-xs sm:text-sm font-extrabold tracking-tight">
                              {tab.label}
                            </span>
                            <span className="block text-[10px] text-gray-400 font-normal">
                              {tab.subtext}
                            </span>
                          </div>
                        </div>

                        <span
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-ecoGreen ring-4 ring-ecoGreen/20' : 'bg-transparent'
                          }`}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name & WhatsApp Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen focus:bg-white transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                      WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. +91 9876543210"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Monthly Electricity Bill Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                    Monthly Electricity Bill <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {['Less than ₹1500', '₹1500 - ₹2500', '₹2500 - ₹4000', '₹4000 - ₹8000', 'More than ₹8000'].map((bill) => (
                      <button
                        key={bill}
                        type="button"
                        onClick={() => setMonthlyBill(bill)}
                        className={`text-xs py-2.5 px-3 rounded-xl border transition-all duration-200 text-center font-medium ${
                          monthlyBill === bill
                            ? 'border-ecoGreen bg-ecoGreen/10 text-ecoGreen font-bold shadow-sm'
                            : 'border-gray-200 text-gray-600 hover:border-gray-300 bg-gray-50/50'
                        }`}
                      >
                        {bill}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pin Code & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="pinCode" className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                      Pin Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      required
                      placeholder="e.g. 462001"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen focus:bg-white transition-all duration-200"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="city" className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Bhopal"
                      className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold text-ecoDark uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@company.com"
                    className="w-full px-4 py-3 text-sm rounded-xl bg-gray-50/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-ecoGreen focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="rounded text-ecoGreen focus:ring-ecoGreen h-4 w-4 border-gray-300 transition-all cursor-pointer"
                  />
                  <label htmlFor="agreeTerms" className="text-xs text-gray-500 cursor-pointer select-none">
                    I agree to Zxsolar Energies <a href="#" className="underline hover:text-ecoDark">Terms of Service</a> & <a href="#" className="underline hover:text-ecoDark">Privacy Policy</a>
                  </label>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="primary-button group w-full"
                >
                  <svg className="relative z-10 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span className="relative z-10">{isSubmitting ? 'Sending Request...' : 'Yes! Reduce My Electricity Bill'}</span>
                  <span className="absolute inset-y-0 -left-20 w-16 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[110%]" />
                </button>
                {submitStatus.message && (
                  <p className={`text-sm font-semibold ${submitStatus.type === 'success' ? 'text-ecoGreen' : 'text-red-600'}`}>
                    {submitStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Google Map Location Embed */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-ecoDark flex items-center gap-2">
              <span className="text-ecoGreen">📍</span> Visit Our Regional Office
            </h3>
            <span className="text-xs text-gray-500 font-medium">Bhopal, Madhya Pradesh</span>
          </div>

          <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden h-80 w-full">
            <iframe
              title="ZXSolar Energies Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.234123456789!2d77.46!3d23.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42702a000001%3A0x123456789abcdef!2sZXSolar+Energies+Private+Limited!5e0!3m2!1sen!2sin!4v1614134824968!3m2!1i1024!2i768"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact