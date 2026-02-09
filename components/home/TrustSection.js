'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function TrustSection() {
  const credentials = [
    {
      title: 'IRS Certified US Tax',
      description: 'Expert 1040, 1120, and 1065 filing with adaptive IRS-compliant tax systems.',
      icon: '🏛️',
    },
    {
      title: 'HMRC Specialist UK Tax',
      description: 'Comprehensive VAT, RTI, and CT600 UK tax compliance with digital-first architecture.',
      icon: '🛡️',
    },
    {
      title: 'Global Accounting Desk',
      description: 'Distributed IFRS/GAAP ledger management for the stateless enterprise.',
      icon: '🌐',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level cryptography and secure protocols for sensitive financial data packets.',
      icon: '⚡',
    },
  ]

  return (
    <section className="section-padding bg-white relative">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-24 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
             <div className="h-px w-8 bg-primary"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Verification Baseline</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8 italic">
            Trust & <span className="text-secondary underline decoration-blue-100 decoration-8 underline-offset-4">Compliance.</span>
          </h2>
          <p className="text-xl text-slate-500 font-medium leading-relaxed italic">
            Deep regulatory intelligence fused with technical architecture to safeguard global assets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {credentials.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group text-center p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-primary transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 flex flex-col h-full items-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-4xl mb-8 shadow-xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-4 uppercase tracking-tight transition-colors">{item.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100/60 leading-relaxed text-sm font-medium transition-colors">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
