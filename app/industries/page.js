import IndustriesHero from '@/components/industries/IndustriesHero'
import IndustriesList from '@/components/industries/IndustriesList'

export const metadata = {
  title: 'Sector Intelligence Board | Industry-Specific Finance',
  description: 'Specialized accounting and tax solutions tailored for high-growth sectors including SaaS, E-commerce, Real Estate, Healthcare, and International Scale-ups.',
}

export default function IndustriesPage() {
  return (
    <>
      <div>
        <IndustriesHero />
        <IndustriesList />
      </div>
    </>
  )
}
