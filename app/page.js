import HeroSection from '@/components/home/HeroSection'
import TrustSection from '@/components/home/TrustSection'
import ServicesSection from '@/components/home/ServicesSection'
import WhyChooseSection from '@/components/home/WhyChooseSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import ProcessSection from '@/components/home/ProcessSection'
import CTASection from '@/components/home/CTASection'

export const metadata = {
  title: 'Acculise Solutions | Specialist US & UK Accounting & Taxation Board',
  description: 'Global leader in US & UK taxation, accounting, and strategic bookkeeping. Providing the technical backbone for high-growth enterprises and international firms with 99.9% accuracy.',
}

export default function Home() {
  return (
    <>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <WhyChooseSection />
        <IndustriesSection />
        <ProcessSection />
        <CTASection />
    </>
  )
}
