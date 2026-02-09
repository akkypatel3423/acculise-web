import AboutHero from '@/components/about/AboutHero'
import MissionVision from '@/components/about/MissionVision'
import CoreValues from '@/components/about/CoreValues'
import Leadership from '@/components/about/Leadership'
import GlobalDelivery from '@/components/about/GlobalDelivery'

export const metadata = {
  title: 'Our Heritage & Expertise | Acculise Global Board',
  description: 'Learn about the technical backbone of Acculise Solutions. Dedicated specialists in US & UK financial jurisdictions with a 15-year track record of enterprise scalability.',
}

export default function AboutPage() {
  return (
    <>
        <AboutHero />
        <MissionVision />
        <CoreValues />
        <Leadership />
        <GlobalDelivery />
    </>
  )
}
