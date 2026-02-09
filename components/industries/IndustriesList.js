'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import { industriesData } from './industriesData'

export default function IndustriesList() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)"/></svg>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-24 max-w-3xl mx-auto">
           <div className="flex items-center justify-center space-x-3 mb-8 font-black uppercase tracking-[0.5em] text-[10px] text-primary">
              <div className="w-12 h-px bg-primary"></div>
              <span>Sector Intelligence Matrix</span>
              <div className="w-12 h-px bg-primary"></div>
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8 italic">
              Industries we empower <br/> 
              <span className="text-secondary underline decoration-blue-100 decoration-8 underline-offset-4">through data.</span>
           </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industriesData.map((industry, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link href={`/industries/${industry.slug}`} className="block group h-full">
                <div className="bg-white rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5 p-12 transition-all duration-700 hover:bg-primary hover:-translate-y-4 group overflow-hidden relative h-full flex flex-col">
                  {/* Hover visual */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-0 group-hover:opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-700"></div>
                  
                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl mb-12 shadow-inner group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter group-hover:text-white transition-colors">
                    {industry.title}
                  </h3>
                  
                  <p className="text-slate-500 group-hover:text-blue-100/60 transition-colors text-lg leading-relaxed mb-12 font-medium italic">
                    {industry.description}
                  </p>
                  
                  <div className="mb-12 space-y-6 flex-grow">
                    <div className="flex items-center space-x-3 mb-4">
                       <div className="w-8 h-px bg-primary group-hover:bg-blue-400"></div>
                       <span className="text-[10px] font-black text-primary group-hover:text-blue-300 uppercase tracking-widest leading-none">Sector Friction</span>
                    </div>
                    <ul className="space-y-4">
                      {industry.challenges.slice(0, 3).map((challenge, i) => (
                        <li key={i} className="flex items-start text-xs font-bold text-slate-700 group-hover:text-white/80 tracking-tight transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-4 group-hover:bg-red-500"></span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-10 border-t border-slate-50 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-secondary group-hover:text-white transition-colors">Vertical Log</span>
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-primary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </div>
                  </div>

                  {/* Corner background text */}
                  <span className="absolute -bottom-10 -right-4 text-[12rem] font-black text-slate-50 group-hover:text-white/5 transition-colors pointer-events-none select-none italic uppercase">
                    {industry.icon}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
