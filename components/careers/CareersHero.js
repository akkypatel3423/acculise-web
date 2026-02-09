'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function CareersHero() {
  return (
    <section className="relative pt-48 pb-32 bg-primary overflow-hidden text-center lg:text-left">
       <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-4xl">
           <div className="flex items-center space-x-3 mb-10 font-bold uppercase tracking-[0.4em] text-[10px] text-blue-300">
             <div className="w-12 h-[1.5px] bg-blue-400"></div>
             <span>Global Talent Board</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-12 italic">
            Elite <br/>
            <span className="text-secondary underline decoration-white/10 decoration-8 underline-offset-4">Openings.</span>
          </h1>
          
          <p className="text-xl text-blue-100/60 leading-relaxed max-w-2xl font-medium border-l-2 border-white/10 pl-8">
            Building a technical legacy in global finance. Join our board of world-class experts in London, New York, and beyond.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
