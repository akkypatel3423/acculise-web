'use client'

import React from 'react'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const jobsList = [
  {
    title: 'Senior Tax Accountant',
    location: 'New York (Remote)',
    type: 'Full-time',
    department: 'US Taxation',
    salary: '$95k - $130k',
    slug: 'senior-tax-accountant',
    description: 'Lead our US tax compliance team for mid-market clients. Requires deep expertise in Forms 1040, 1120, and 1065.',
    email: 'akkypatel3423@gmail.com'
  },
  {
    title: 'UK Corporate Accounts Manager',
    location: 'London (Hybrid)',
    type: 'Full-time',
    department: 'Accounting',
    salary: '£55k - £75k',
    slug: 'uk-accounts-manager',
    description: 'Manage a portfolio of UK SMEs, ensuring HMRC compliance and tax efficiency. ACCA/ACA required.',
    email: 'akkypatel3423@gmail.com'
  },
  {
    title: 'Global Bookkeeping Specialist',
    location: 'Remote',
    type: 'Contract',
    department: 'Client Services',
    salary: '$30 - $45 / hr',
    slug: 'bookkeeping-specialist',
    description: 'High-volume reconciliation and month-end closing support for international e-commerce scale-ups.',
    email: 'akkypatel3423@gmail.com'
  },
]

export default function CareersList() {
  const handleApply = (jobTitle) => {
    const subject = encodeURIComponent(`Job Application: ${jobTitle}`);
    const body = encodeURIComponent(`Hi Acculise Solutions Team,\n\nI am interested in the ${jobTitle} position and have attached my CV for your review.`);
    window.location.href = `mailto:akkypatel3423@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="openings" className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="mb-16">
          <div className="flex items-center space-x-3 mb-6 font-black uppercase tracking-[0.2em] text-[10px] text-primary">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span>Current Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Help us redefine global <br/>
            compliance and <span className="text-blue-600">finance.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6">
          {jobsList.map((job, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Applications Open</span>
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-1.5 bg-blue-100 text-primary rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
                        {job.department}
                      </span>
                      <span className="px-4 py-1.5 bg-slate-200 text-slate-600 rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
                        {job.type}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors mb-4">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap gap-6 mb-8">
                       <div className="flex items-center text-slate-500">
                         <svg className="w-5 h-5 mr-3 text-primary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                         <span className="text-sm font-bold truncate">{job.location}</span>
                       </div>
                       <div className="flex items-center text-slate-500">
                         <svg className="w-5 h-5 mr-3 text-primary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                         <span className="text-sm font-bold">{job.salary}</span>
                       </div>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 flex-shrink-0">
                    <Link 
                      href={`/careers/${job.slug}`}
                      className="text-center px-10 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-full text-xs font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300"
                    >
                      View Role
                    </Link>
                    <button 
                      onClick={() => handleApply(job.title)}
                      className="text-center px-10 py-4 bg-primary text-white rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-20">
           <div className="bg-gradient-to-r from-primary to-blue-800 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
             <h3 className="text-2xl font-bold mb-4">Don&apos;t see the right position?</h3>
             <p className="text-blue-100/70 mb-8 max-w-xl mx-auto">
               We&apos;re always looking for exceptional talent in accounting, tax, and fintech. Send your open application to our hiring team.
             </p>
             <button 
               onClick={() => (window.location.href = 'mailto:akkypatel3423@gmail.com?subject=Open Application')}
               className="bg-accent text-primary px-10 py-4 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-110 transition-transform duration-300"
             >
               Send Open Application
             </button>
           </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
