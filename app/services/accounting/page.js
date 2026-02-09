import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'Global Accounting Services',
  description: 'Technical financial reporting, GAAP/IFRS compliance, and strategic management accounting.',
}

export default function AccountingPage() {
  const serviceData = {
    title: 'Global Accounting',
    subtitle: 'High-Precision Technical Reporting & Advisory',
    description: 'We build the technical foundation for your global growth. Our accounting board ensures every decimal is compliant with international standards—from US GAAP to IFRS.',
    
    services: [
      {
        name: 'Financial Statements (P&L, BS)',
        details: 'Preparation of auditable year-end financial statements with full technical disclosures.',
      },
      {
        name: 'GAAP & IFRS Convergence',
        details: 'Complex mapping and reporting for multinational entities requiring multi-standard compliance.',
      },
      {
        name: 'Strategic Management Accounts',
        details: 'Monthly technical reporting featuring deep-dive variance analysis and strategic KPI monitoring.',
      },
      {
        name: 'Technical Consolidated Reporting',
        details: 'Expert consolidation of multi-entity groups with intercompany eliminations and equity tracking.',
      },
      {
        name: 'Internal Control Audits',
        details: 'Designing and testing financial controls to mitigate risk and ensure data integrity.',
      },
      {
        name: 'Virtual CFO Support',
        details: 'Strategic financial leadership for board-level reporting and sophisticated capital planning.',
      },
    ],

    whoItsFor: [
      'Multinational Corporations',
      'VC-backed Scale-ups',
      'Consolidated Entity Groups',
      'Businesses requiring Audit-ready financials',
      'PE-backed Firms',
    ],

    benefits: [
      'Audit-ready Financial Frameworks',
      'Technical Standard Compliance (ASC/IFRS)',
      'Data-driven Strategic Foresight',
      'Board-level Precision Reporting',
    ],

    process: [
      {
        step: 'Framework Selection',
        description: 'Defining the reporting standards (GAAP/IFRS) required for your scale.',
      },
      {
        step: 'Monthly Close Board',
        description: 'Rigorous reconciliation and month-end closing procedures.',
      },
      {
        step: 'Insight Generation',
        description: 'Delivering technical reports with actionable strategic narrative.',
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
