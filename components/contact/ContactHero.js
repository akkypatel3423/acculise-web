'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative">
       {/* Background Decoration */}
       <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2"></div>
      </div>
      
      <div className="container-custom relative z-10 text-center">
        <AnimatedSection className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 italic tracking-tighter">
            Get in <span className="text-secondary underline decoration-blue-100 decoration-8 underline-offset-4">Touch.</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have questions about our services or ready to start your journey with us? 
            Our team is here to provide the answers and support you need.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
