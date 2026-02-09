'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function ContactInfo() {
  const contactDetails = [
    {
      title: 'Email Us',
      info: 'info@acculise.com',
      subInfo: 'We reply within 24 hours',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Call Us',
      info: '+1 (555) 123-4567 (US)',
      subInfo: '+44 20 7123 4567 (UK)',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Office Hours',
      info: 'Monday - Friday',
      subInfo: '9:00 AM - 6:00 PM',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ]

  return (
    <div className="space-y-12">
      <AnimatedSection>
        <h2 className="text-3xl font-black mb-6 text-gray-900 uppercase tracking-tight">
          Global <span className="text-secondary">Corridors.</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Whether you need assistance with US or UK taxation, accounting, or business strategy, 
          our team of certified experts is ready to help you achieve your financial goals.
        </p>

        <div className="space-y-8">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start">
              <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center flex-shrink-0 mr-5">
                {detail.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{detail.title}</h4>
                <p className="text-primary font-medium">{detail.info}</p>
                 <p className="text-gray-500 text-sm">{detail.subInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
      
      <AnimatedSection delay={0.2}>
         <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h4 className="text-xl font-bold mb-3 text-primary">Global Presence</h4>
            <p className="text-gray-700 mb-4">
              We proudly serve clients across the globe, with specialized teams dedicated to US and UK jurisdictions.
            </p>
            <div className="flex gap-4">
               <span className="px-3 py-1 bg-white text-primary rounded-full text-sm font-semibold shadow-sm">USA</span>
               <span className="px-3 py-1 bg-white text-primary rounded-full text-sm font-semibold shadow-sm">United Kingdom</span>
               <span className="px-3 py-1 bg-white text-primary rounded-full text-sm font-semibold shadow-sm">International</span>
            </div>
         </div>
      </AnimatedSection>
    </div>
  )
}
