'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function ServiceContent({ data }) {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-24">
            
            {/* Detailed Sub-Services Section (NEW as requested) */}
            <div id="overview">
              <AnimatedSection>
                <div className="flex items-center space-x-3 mb-10 font-bold uppercase tracking-[0.3em] text-[10px] text-primary">
                   <div className="w-12 h-1 bg-primary"></div>
                   <span>Core Offerings</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.services.map((service, index) => (
                    <div key={index} className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-card-hover transition-all duration-500 group">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                         </svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{service.name}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{service.details}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Benefits - Modern UI */}
            <div id="benefits">
              <AnimatedSection delay={0.2}>
                <div className="flex items-center space-x-3 mb-12 font-bold uppercase tracking-[0.3em] text-[10px] text-primary">
                    <div className="w-12 h-1 bg-primary"></div>
                    <span>Competitive Advantages</span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-blue-100 text-primary flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-slate-800 font-bold text-sm tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Step-by-Step Delivery */}
            <div id="process">
              <AnimatedSection delay={0.3}>
                <div className="flex items-center space-x-3 mb-12 font-bold uppercase tracking-[0.3em] text-[10px] text-primary">
                   <div className="w-12 h-1 bg-primary"></div>
                   <span>Strategic Approach</span>
                </div>
                
                <div className="space-y-6">
                  {data.process.map((step, index) => (
                    <div key={index} className="relative bg-white p-8 rounded-[2rem] border border-slate-100 flex gap-8 items-center group overflow-hidden">
                       <span className="text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors duration-500 pointer-events-none">
                         {index + 1 < 10 ? `0${index + 1}` : index + 1}
                       </span>
                       <div className="relative z-10">
                          <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{step.step}</h4>
                          <p className="text-slate-500 text-sm font-medium">{step.description}</p>
                       </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <AnimatedSection delay={0.4}>
                <div className="bg-primary rounded-[3rem] p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                   <h3 className="text-2xl font-black mb-8 italic">Who we serve</h3>
                   <ul className="space-y-6">
                    {data.whoItsFor.map((item, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="w-5 h-5 bg-blue-400 rounded-md flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={4}>
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-blue-100/70 font-bold text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.5}>
                <div className="bg-white rounded-[3rem] p-10 border border-slate-200 text-center shadow-sm">
                  <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">Ready to integrate?</h3>
                  <p className="text-slate-500 text-sm font-medium mb-10 leading-relaxed">
                    Consult with our global compliance leads to optimize your financial structure.
                  </p>
                  <Link href="/contact" className="btn-primary w-full text-center block mb-6">
                    Book Consultation
                  </Link>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Response within 24h</p>
                </div>
              </AnimatedSection>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
