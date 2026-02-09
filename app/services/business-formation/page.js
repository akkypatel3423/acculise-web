import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'Business Formation & Compliance',
  description: 'Seamless entity setup and compliance management for new global ventures.',
}

export default function BusinessFormationPage() {
  const serviceData = {
    title: 'Business Formation',
    subtitle: 'Global Entity Setup & Infrastructure Design',
    description: 'Establish your presence in the most tax-efficient jurisdictions with a solid legal and financial foundation. We manage the complexity of global incorporation while you focus on building.',
    
    services: [
      {
        name: 'US & UK Entity Formation',
        details: 'LLC, Corporation, and Ltd company setup with all necessary statutory filings.',
      },
      {
        name: 'Federal & State Tax Registration',
        details: 'Obtaining EIN, SSN, VAT, and Sales Tax numbers across multiple jurisdictions.',
      },
      {
        name: 'Registered Agent Services',
        details: 'Providing a legal physical address and managing mandatory statutory communication.',
      },
      {
        name: 'Operating Agreements & Bylaws',
        details: 'Drafting the technical governance documents that define entity operation.',
      },
      {
        name: 'Compliance Management',
        details: 'Ongoing management of annual reports, franchise taxes, and statutory audits.',
      },
      {
          name: 'Nexus Evaluation',
          details: 'Determining tax presence requirements for multi-state and international operations.',
      }
    ],

    whoItsFor: [
      'International Founders entering US/UK',
      'Serial Entrepreneurs starting new ventures',
      'Global Tech Startups',
      'Real Estate Investment Groups',
      'E-commerce sellers going global',
    ],

    benefits: [
      'Rapid Multi-jurisdiction Setup',
      'Built-in Tax Efficiency',
      'Standardized Regulatory Compliance',
      'Expert Structural Governance',
    ],

    process: [
      {
        step: 'Nexus Analysis',
        description: 'Determining the most advantageous jurisdiction for your operations.',
      },
      {
        step: 'Filings Execution',
        description: 'Managing the submission of all statutory and tax registrations.',
      },
      {
        step: 'Infrastructure Delivery',
        description: 'Handing over a fully compliant, bank-ready business infrastructure.',
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
