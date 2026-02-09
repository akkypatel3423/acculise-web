import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'Global Payroll Compliance',
  description: 'Managed US & UK payroll with complex tax withholding and regulatory compliance.',
}

export default function PayrollPage() {
  const serviceData = {
    title: 'Global Payroll',
    subtitle: 'High-Precision Compliance for Multi-Jurisdiction Teams',
    description: 'Managed payroll for the modern, remote workforce. We handle the complex nexus of tax withholding, benefits, and local filings across US and UK borders.',
    
    services: [
      {
        name: 'US Managed Payroll (Fed/State)',
        details: 'End-to-end processing of federal and state-level tax withholdings, ensuring timely 940/941 filings.',
      },
      {
        name: 'HMRC RTI Compliance',
        details: 'Technical UK payroll management with real-time HMRC submissions (RTI), ensuring zero-penalty accuracy.',
      },
      {
        name: 'International Benefits Admin',
        details: 'Managing 401(k), pension contributions (Auto-enrolment), and health insurance technical accounting.',
      },
      {
        name: 'Complex Equity Compensation',
        details: 'Technical tax treatment of RSUs, Stock Options, and specialized employee incentives.',
      },
      {
        name: 'Contractor Payment Desk',
        details: 'Managed disbursements for global contractor networks with localized tax documentation (W-8/W-9).',
      },
      {
        name: 'End-of-Year Compliance',
        details: 'Preparation and secure delivery of W-2, 1099 (US) and P60, P11D (UK) information returns.',
      },
    ],

    whoItsFor: [
      'Employers with distributed teams',
      'US Tech firms with UK offices',
      'Global Scale-ups',
      'Companies with complex benefits packages',
      'High-growth HR-managed entities',
    ],

    benefits: [
      'Guaranteed On-time Compliance',
      'Technical Tax Nexus Avoidance',
      'Secure Employee Portal Access',
      'Streamlined Benefits Reconciliation',
    ],

    process: [
      {
        step: 'Nexus Mapping',
        description: 'Determining the exact tax jurisdictions for your entire workforce.',
      },
      {
        step: 'Cyclical Processing',
        description: 'Monthly or bi-weekly technical processing with automated tax sweep.',
      },
      {
        step: 'Statutory Boarding',
        description: 'Direct technical reporting to IRS and HMRC gateways.',
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
