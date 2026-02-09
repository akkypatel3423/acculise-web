'use client'

import React, { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you shortly.')
  }

  return (
    <AnimatedSection delay={0.2} className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
      <h3 className="text-2xl font-black mb-6 text-gray-800 uppercase tracking-tight">Secure Ingestion</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="+1 (555) 000-0000"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors"
              placeholder="Company Ltd."
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
           <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Interested Service</label>
           <select
             id="service"
             name="service"
             className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors bg-white"
             value={formData.service}
             onChange={handleChange}
           >
             <option value="">Select a service...</option>
             <option value="US Taxation">US Taxation</option>
             <option value="UK Taxation">UK Taxation</option>
             <option value="Accounting">Accounting</option>
             <option value="Bookkeeping">Bookkeeping</option>
             <option value="Payroll">Payroll</option>
             <option value="Advisory">Business Advisory</option>
             <option value="Other">Other</option>
           </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"
            placeholder="How can we help you?"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="w-full btn-primary py-4 text-lg">
          Send Message
        </button>
      </form>
    </AnimatedSection>
  )
}
