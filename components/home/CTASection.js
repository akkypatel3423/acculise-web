'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-[3rem] bg-primary p-12 md:p-24 text-center">
            {/* Background Pattern (Blue/White only) */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[150px] translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                Ready to transform your financial <span className="text-blue-300">operations?</span>
              </h2>
              <p className="text-xl text-blue-100/70 mb-12 font-medium leading-relaxed">
                Partner with Acculise for technical expertise that drives compliance, efficiency, and scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  href="/contact" 
                  className="bg-white text-primary px-14 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:scale-110 transition-all duration-500 shadow-2xl shadow-blue-900/50"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/services" 
                  className="bg-primary border-2 border-white/20 text-white px-14 py-6 rounded-full font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
                >
                  Explore Services
                </Link>
              </div>

              <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-blue-100/40">
                 <span className="flex items-center gap-2">
                   <div className="w-1 h-1 bg-blue-300 rounded-full"></div> 500+ Clients
                 </span>
                 <span className="flex items-center gap-2">
                   <div className="w-1 h-1 bg-blue-300 rounded-full"></div> 15+ Yrs Experience
                 </span>
                 <span className="flex items-center gap-2 text-white">
                   <div className="w-1 h-1 bg-blue-300 rounded-full"></div> 99.9% Retention
                 </span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
