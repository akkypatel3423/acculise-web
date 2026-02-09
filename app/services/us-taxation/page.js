import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'US Taxation Services',
  description: 'Technical US tax optimization, filing, and IRS compliance for global operations.',
}

export default function USTaxationPage() {
  const serviceData = {
    title: 'US Taxation Services',
    subtitle: 'High-Precision IRS Compliance & Multi-State Strategy',
    description: 'We safeguard your global financial health through technical US tax optimization. Our expertise spans complex multi-state Nexus filings to individual expat compliance.',
    
    services: [
      {
        name: 'Corporate (1120/1120-S) Filing',
        details: 'Deep technical preparation of domestic and international corporate returns with complex ownership structures.',
      },
      {
        name: 'Partnership (1065) Technicals',
        details: 'Sophisticated partnership tax accounting, including 704(b) capital accounts and complex Schedule K-1 distributions.',
      },
      {
        name: 'Individual (1040) Expat Compliance',
        details: 'Specialized filing for US citizens abroad, including Form 2555 (FEIE) and Foreign Tax Credit (FTC) optimizations.',
      },
      {
        name: 'State & Local Tax (SALT)',
        details: 'Nexus analysis and filing for all 50 states, managing multi-state apportionment and local business taxes.',
      },
      {
        name: 'FRS & Audit Representation',
        details: 'Direct technical liaison with the IRS for information returns, notices, and sophisticated compliance audits.',
      },
      {
        name: 'Tax Treaty Analysis',
        details: 'Optimizing for cross-border treaties to eliminate double taxation for multinational entities.',
      },
    ],

    whoItsFor: [
      'Multi-state US Corporations',
      'International Partnerships',
      'US Expatriates worldwide',
      'Foreign entities with US Nexus',
      'High Net Worth Individuals',
    ],

    benefits: [
      'Zero-penalty compliance assurance',
      'Maximized technical tax savings',
      'Audit-ready financial frameworks',
      'Streamlined global reporting',
    ],

    process: [
      {
        step: 'Technical Audit',
        description: 'We map your existing tax footprint to identify risk and optimization zones.',
      },
      {
        step: 'Data Integration',
        description: 'Secure, clean ingestion of financial data for compliant tax calculations.',
      },
      {
        step: 'Precision Filing',
        description: 'Review by senior technical boards before secure IRS/State submission.',
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
