'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function MissionVision() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl border border-blue-100 h-full">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                To empower global enterprises with accurate, compliant, and strategic US & UK taxation and accounting services that 
                enable them to focus on rapid growth while we navigate the complexities of international finance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We function as the technical backbone for our clients—a trusted board of advisors who contribute 
                meaningfully to enterprise success through specialized expertise, FinTech innovation, and 99.9% accuracy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-blue-50 to-white p-10 rounded-2xl border border-blue-100 h-full">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                To be the global leader in technical outsourced accounting and taxation, recognized for our 
                jurisdictional expertise, digital-first infrastructure, and the transformative impact we create for firms worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where high-growth entities have seamless access to world-class financial 
                boards that are efficient, secure, and precisely tailored to the specific needs of modern global trade.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
