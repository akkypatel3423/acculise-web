import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'Foreign & International Filings',
  description: 'Technical cross-border compliance, FATCA, CRS, and international tax reporting.',
}

export default function ForeignFilingsPage() {
  const serviceData = {
    title: 'International Filings',
    subtitle: 'Technical Compliance for the Global Borderless Economy',
    description: 'We demystify the complex nexus of cross-border reporting. Our technical international desk ensures full compliance with global treaties and information exchange mandates.',
    
    services: [
      {
        name: 'FATCA & FBAR Compliance',
        details: 'Expert preparation of FinCEN Form 114 and Form 8938 for US owners of foreign financial assets.',
      },
      {
        name: 'CRS Reporting technicals',
        details: 'Managing Common Reporting Standard documentation for non-US entities in participating jurisdictions.',
      },
      {
        name: 'Forms 5471 / 5472',
        details: 'Complex reporting for foreign corporations with US shareholders and foreign-owned US corporations.',
      },
      {
        name: 'Transfer Pricing Boards',
        details: 'Technical analysis and documentation of intercompany pricing to ensure arms-length compliance.',
      },
      {
        name: 'Expat Tax Optimization',
        details: 'Specialized strategy for digital nomads and global professionals leveraging complex foreign exclusions.',
      },
      {
        name: 'Foreign Entity Structuralism',
        details: 'Advisory on the tax implications of CFC (Controlled Foreign Corporation) and PFIC reporting.',
      },
    ],

    whoItsFor: [
      'US Citizens living abroad',
      'Foreign Investors with US assets',
      'Multinational Corporate Groups',
      'High Net Worth Expats',
      'Global Digital Nomads',
    ],

    benefits: [
      'Avoidance of Draconian Penalties',
      'Full OECD & IRS Compliance',
      'Global Tax Efficiency Boards',
      'Seamless Multi-country Reporting',
    ],

    process: [
      {
        step: 'Asset Nexus Mapping',
        description: 'Identifying every global account that triggers a filing requirement.',
      },
      {
        step: 'Technical Valuation',
        description: 'Applying exchange rates and technical valuation rules for accurate reporting.',
      },
      {
        step: 'Secure Transmittal',
        description: 'Filing through encrypted governmental gateways to ensure privacy.',
      },
    ],
  }

  return (
    <>
        <ServiceDetailHero 
          title={serviceData.title}
          subtitle={serviceData.subtitle}
          description={serviceData.description}
        />
        <ServiceContent data={serviceData} />
    </>
  )
}
