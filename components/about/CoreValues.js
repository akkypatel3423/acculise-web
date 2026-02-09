'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function CoreValues() {
  const values = [
    {
      title: 'Integrity Baseline',
      description: 'Highest-tier ethical standards in every ledger and interaction.',
      icon: '🛡️',
    },
    {
      title: 'Technical Excellence',
      description: 'Continuous iteration and refinement of our compliance algorithms.',
      icon: '💎',
    },
    {
      title: 'Outcome-Driven',
      description: 'Focusing on the technical success and growth of client entities.',
      icon: '🚀',
    },
    {
      title: 'Logic Innovation',
      description: 'Embracing next-gen financial AI and automated reporting models.',
      icon: '⚡',
    },
    {
      title: 'Board Accountability',
      description: 'Complete technical verification of our commitments and accuracy targets.',
      icon: '⚖️',
    },
    {
      title: 'Global Logic',
      description: 'Borderless thinking fused with local regulatory intelligence.',
      icon: '🌐',
    },
  ]

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center mb-24 max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-4 mb-8">
             <div className="h-px w-8 bg-blue-300"></div>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-300">Internal Audit</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8 italic">
            Strategic <span className="text-secondary underline decoration-white/10 decoration-8 underline-offset-4">Logic.</span>
          </h2>
          <p className="text-xl text-blue-100/60 font-medium leading-relaxed italic">
            The fundamental principles that power the Acculise financial ecosystem.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group p-12 rounded-[3.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white transition-all duration-700 hover:-translate-y-2 flex flex-col h-full items-center text-center">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center text-4xl mb-10 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-primary mb-4 uppercase tracking-tighter transition-colors">{value.title}</h3>
                <p className="text-blue-100/60 group-hover:text-slate-500 leading-relaxed font-medium transition-colors">{value.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
