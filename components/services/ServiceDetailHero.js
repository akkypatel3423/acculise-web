'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function ServiceDetailHero({ title, subtitle, description }) {
  return (
    <section className="relative pt-40 pb-32 bg-primary">
       {/* Background Decoration (Matching other inner pages/Blog style) */}
       <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container-custom relative z-10 text-center lg:text-left">
        <AnimatedSection className="max-w-4xl">
          <div className="inline-flex items-center space-x-3 mb-8">
            <div className="h-[2px] w-8 bg-blue-400"></div>
            <span className="text-blue-300 font-bold uppercase tracking-[0.3em] text-[10px]">Strategic Portfolio</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 italic">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-blue-100 font-bold mb-8 opacity-90">
                {subtitle}
            </p>
          )}

          <p className="text-lg text-blue-100/60 leading-relaxed max-w-2xl font-medium border-l-2 border-white/10 pl-8">
            {description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
