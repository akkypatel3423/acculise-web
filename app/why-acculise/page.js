import AnimatedSection from '@/components/AnimatedSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import TrustSection from '@/components/home/TrustSection'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'Why Choose Acculise',
  description: 'Discover why businesses trust Acculise Solutions for their accounting and tax needs. Expertise, technology, and dedication.',
}

export default function WhyAcculisePage() {
  return (
    <>
      
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="container-custom text-center">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Why <span className="text-blue-200">Acculise?</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                We are more than just accountants. We are strategic partners dedicated to your long-term success.
              </p>
            </AnimatedSection>
          </div>
        </section>
        
        <TrustSection />
        <WhyChooseSection />
        
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <AnimatedSection className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-8">Our Service Guarantee</h2>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-xl text-gray-700 leading-relaxed italic">
                  "We promise to provide accurate, timely, and compliant financial services. 
                  If we make an error that results in a penalty, we pay the penalty."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <CTASection />
    
    </>
  )
}
