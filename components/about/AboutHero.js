"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function AboutHero() {
  return (
    <section className="relative pt-64 pb-48 bg-primary overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="max-w-4xl text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-3 mb-10 font-bold uppercase tracking-[0.4em] text-[10px] text-blue-300">
            <div className="w-12 h-[1.5px] bg-blue-400"></div>
            <span>The Board Legacy</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black text-white leading-[0.85] tracking-tighter mb-12 italic">
            Financial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white uppercase">
              Architects.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100/60 leading-relaxed max-w-2xl font-medium border-l-4 border-secondary pl-8 hidden sm:block">
            For over 2 years, Acculise Solutions has functioned as the technical
            board for global enterprises. We specialize in US & UK taxation,
            strategic accounting, and building the financial backbone for
            international scale.
          </p>
          <p className="text-lg text-blue-100/60 leading-relaxed sm:hidden italic">
            Engineering global US & UK tax compliance and accounting stability
            for 15+ years.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
