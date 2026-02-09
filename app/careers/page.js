import CareersHero from '@/components/careers/CareersHero'
import CareersList from '@/components/careers/CareersList'

export const metadata = {
  title: 'Global Career Opportunities | Join the Acculise Board',
  description: 'Advance your professional trajectory at Acculise Solutions. We are scouting for specialized US & UK tax experts, certified accountants, and strategic financial analysts.',
}

export default function CareersPage() {
  return (
    <>
        <CareersHero />
        <CareersList />
    </>
  )
}
