'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We analyze your current financial architecture and identify key compliance gaps and growth opportunities.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Strategic Onboarding',
      description: 'Integration of your data into our secure cloud ecosystem with a dedicated account management team.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-3.613A9.99 9.99 0 0110 11.5a4.5 4.5 0 119 0c0 .285-.012.565-.035.842m-5.18 4.734c-.473.245-.96.48-1.45.703a11.042 11.042 0 005.516 5.516l1.13-2.257" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Execution & Compliance',
      description: 'Continuous processing of accounts and timely filing of all regulatory requirements across US and UK.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Optimized Growth',
      description: 'Quarterly reviews and strategic advisory to minimize overhead and maximize global tax efficiency.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24">
           <AnimatedSection className="max-w-2xl text-left">
              <div className="flex items-center space-x-3 mb-6 font-bold uppercase tracking-[0.3em] text-[10px] text-primary">
                 <span className="w-12 h-[1px] bg-primary"></span>
                 <span>Our Workflow</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
                 Engineered for <br/>
                 <span className="text-secondary italic">precision.</span>
              </h2>
           </AnimatedSection>
           <AnimatedSection delay={0.2} className="max-w-md text-slate-500 font-medium text-lg leading-relaxed lg:pb-2">
              A systematic approach to financial management that scales with your complexity.
           </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="relative group">
                <div className="card-modern p-10 h-full bg-slate-50 border-none shadow-none group-hover:bg-white group-hover:shadow-card-hover transition-all duration-500">
                   <div className="flex justify-between items-start mb-12">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 text-primary flex items-center justify-center shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         {step.icon}
                      </div>
                      <span className="text-6xl font-black text-slate-100 group-hover:text-primary transition-colors duration-500">{step.number}</span>
                   </div>
                   
                   <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                     {step.title}
                   </h3>
                   <p className="text-slate-500 leading-relaxed text-sm font-medium">
                     {step.description}
                   </p>
                </div>
                
                {/* Visual Connector for Desktop */}
                {index < steps.length - 1 && (
                   <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-100 z-10"></div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
