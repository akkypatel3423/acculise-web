'use client'

import AnimatedSection from '@/components/AnimatedSection'

export default function GlobalDelivery() {
  const features = [
    {
      title: 'Compliance-First Mindset',
      description: 'Every service we deliver is built on a foundation of regulatory compliance and best practices.',
    },
    {
      title: 'Technology-Enabled',
      description: 'Cloud-based platforms, automation, and secure data management for efficiency and accuracy.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Services that grow with your business, from startup to enterprise scale.',
    },
    {
      title: 'Dedicated Teams',
      description: 'Assigned professionals who understand your business and provide consistent support.',
    },
  ]

  return (
    <section className="section-padding bg-gradient">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter italic">
            Global <span className="text-secondary">Delivery.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our delivery model combines global reach with local expertise, ensuring you receive 
            world-class service no matter where you're located.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="card">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
