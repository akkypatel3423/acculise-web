'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function ServicesSection() {
  const services = [
    {
      title: 'US Taxation',
      icon: '🏛️',
      color: 'bg-blue-600',
      description: 'Expert 1040, 1120, and IRS compliance for US expats and businesses.',
      slug: 'us-taxation'
    },
    {
      title: 'UK Taxation',
      icon: '🏢',
      color: 'bg-indigo-700',
      description: 'HMRC Self Assessment, VAT, and Corporation Tax specialized for the UK market.',
      slug: 'uk-taxation'
    },
    {
      title: 'Global Accounting',
      icon: '🌐',
      color: 'bg-slate-900',
      description: 'Full-cycle GAAP & IFRS reporting with multi-currency management.',
      slug: 'accounting'
    },
    {
      title: 'Bookkeeping',
      icon: '📊',
      color: 'bg-blue-500',
      description: 'Pristine financial records through automated QuickBooks and Xero management.',
      slug: 'bookkeeping'
    }
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 items-end mb-20">
          <AnimatedSection className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 font-black uppercase tracking-[0.2em] text-[10px] text-primary">
              <span className="w-12 h-[1px] bg-primary"></span>
              <span>Our Services</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Enterprise financial <br/>
              <span className="text-blue-600">infrastructure.</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-2 text-slate-500 font-medium text-lg leading-relaxed lg:pb-2">
            We provide the backbone for your global operations, ensuring compliance is a competitive advantage rather than a burden.
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="relative h-full bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 transition-all duration-500 group-hover:bg-primary group-hover:-translate-y-4 shadow-xl shadow-transparent group-hover:shadow-primary/20">
                   <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 group-hover:text-white transition-colors mb-4">
                     {service.title}
                   </h3>
                   <p className="text-slate-500 group-hover:text-blue-100/60 transition-colors text-sm leading-relaxed mb-8">
                     {service.description}
                   </p>
                   <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors">
                     Learn More
                     <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                   </div>

                   {/* Background Overlay Text */}
                   <span className="absolute -bottom-4 -right-2 text-8xl font-black text-slate-100/10 group-hover:text-white/5 transition-colors pointer-events-none uppercase italic">
                     {service.title.split(' ')[0]}
                   </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-20 text-center">
          <Link href="/services" className="inline-flex items-center space-x-4 group">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-primary transition-colors">View All Services</span>
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
               <svg className="w-5 h-5 text-slate-900 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
