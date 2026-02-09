'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function WhyChooseSection() {
  const pillars = [
    { 
      t: 'Expertise', 
      h: 'Certified Professionals', 
      d: 'Our team comprises CPA and ACCA qualified experts with 15+ years of cross-border experience.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> 
    },
    { 
      t: 'Innovation', 
      h: 'AI Driven Workflow', 
      d: 'We leverage cutting-edge process automation to ensure accuracy and rapid turnaround on all filings.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> 
    },
    { 
      t: 'Security', 
      h: 'Military Grade Protection', 
      d: 'Your financial data is protected by industry-leading encryption and strict multi-factor access protocols.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg> 
    }
  ]

  return (
    <section className="section-padding bg-bg relative overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <AnimatedSection>
              <div className="flex items-center space-x-3 mb-6 font-black uppercase tracking-[0.2em] text-[10px] text-primary">
                <span className="w-12 h-[1px] bg-primary"></span>
                <span>Why Acculise</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-8">
                The global <br/> standard for <span className="text-primary underline decoration-accent underline-offset-8">compliance.</span>
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">
                We don&apos;t just file taxes; we architect financial safety nets for international businesses and modern professionals.
              </p>
              
              <div className="space-y-4">
                 {['IRS & HMRC Registered Agent', 'Over $2B in client assets managed', '24/7 Global advisory support'].map((item, i) => (
                   <div key={i} className="flex items-center space-x-4">
                     <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7"/></svg>
                     </div>
                     <span className="font-bold text-slate-800 uppercase tracking-widest text-[11px]">{item}</span>
                   </div>
                 ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 gap-4">
            {pillars.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row gap-8 items-start">
                   <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center flex-shrink-0 animate-pulse">
                     {p.icon}
                   </div>
                   <div>
                     <p className="text-[10px] font-black uppercase tracking-widest text-accent mb-2">{p.t}</p>
                     <h4 className="text-2xl font-black text-slate-900 mb-4">{p.h}</h4>
                     <p className="text-slate-500 text-sm leading-relaxed font-medium">{p.d}</p>
                   </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
