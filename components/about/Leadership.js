"use client";

import AnimatedSection from "@/components/AnimatedSection";

export default function Leadership() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-tighter">
            Executive <span className="text-secondary italic">Leadership.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team brings decades of combined experience in
            accounting, taxation, and business advisory across multiple
            jurisdictions.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="bg-gradient-to-br from-blue-50 to-white p-10 md:p-16 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
              A Message from Our Founder
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              "When we founded Acculise Solutions, our vision was clear: to
              create a firm that combines technical excellence with genuine care
              for our clients' success. Over the years, we've grown from a small
              team to a global organization, but our core commitment remains
              unchanged."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              "We believe that accounting and taxation are not just about
              numbers—they're about enabling businesses to thrive. Every tax
              return we file, every financial statement we prepare, and every
              piece of advice we offer is driven by this belief."
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              "Thank you for considering Acculise Solutions as your financial
              partner. We look forward to contributing to your success."
            </p>
            <div className="mt-8">
              <p className="font-bold text-lg text-primary">Founder & CEO</p>
              <p className="text-gray-600">Acculise Solutions</p>
              <p className="text-gray-800">Akky Patel</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
