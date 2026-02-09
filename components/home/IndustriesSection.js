'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function IndustriesSection() {
  const industries = [
    { title: 'Accounting Firms', icon: '🏢', d: 'Scalable white-label tax & audit support.', slug: 'accounting-firms' },
    { title: 'SMEs', icon: '🏪', d: 'Strategic growth & local tax compliance.', slug: 'smes' },
    { title: 'Startups', icon: '🚀', d: 'Venture-ready financial infrastructure.', slug: 'startups' },
    { title: 'E-commerce', icon: '🛒', d: 'Nexus management & profit tracking.', slug: 'ecommerce' },
    { title: 'SaaS', icon: '💻', d: 'Revenue recognition & MRR analysis.', slug: 'saas' },
    { title: 'International', icon: '🌍', d: 'Global expat & foreign entity filing.', slug: 'international' }
  ]

  return (
    <section className="section-padding bg-slate-900 border-y border-white/5 overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
             <div className="h-px w-8 bg-blue-500"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400">Sector Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8 italic">
            Industries we empower <br/>
            through <span className="text-secondary italic underline decoration-white/10 decoration-8 underline-offset-4">data.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {industries.map((ind, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <Link href={`/industries/${ind.slug}`} className="block group">
                <div className="relative p-10 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] hover:bg-white transition-all duration-700 overflow-hidden h-full">
                   <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-10 group-hover:bg-primary/5 transition-all">
                      {ind.icon}
                    </div>
                    <h4 className="text-2xl font-black text-white group-hover:text-slate-900 transition-colors mb-4 uppercase tracking-tighter italic">{ind.title}</h4>
                    <p className="text-slate-400 group-hover:text-slate-500 transition-colors text-lg leading-relaxed mb-10 font-medium">
                      {ind.d}
                    </p>
                    <div className="flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 group-hover:text-primary transition-colors">
                       Request Vertical Ops
                       <svg className="w-4 h-4 ml-3 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>
                  
                  {/* corner visual element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-0 group-hover:opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-all duration-1000"></div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-20 text-center">
          <Link href="/industries" className="inline-flex items-center space-x-4 group">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-white group-hover:text-blue-400 transition-colors">View All Industries</span>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-500">
               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
