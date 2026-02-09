import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'UK Taxation Services',
  description: 'Technical HMRC compliance, VAT management, and corporate tax strategy for the UK market.',
}

export default function UKTaxationPage() {
  const serviceData = {
    title: 'UK Taxation Services',
    subtitle: 'Expert HMRC Compliance & Strategic VAT Engineering',
    description: 'Our technical UK tax board provides precision and foresight for HMRC compliance. From Making Tax Digital (MTD) to complex corporate structures, we ensure absolute efficiency.',
    
    services: [
      {
        name: 'HMRC (CT600) Filing',
        details: 'Sophisticated corporate tax computations with expert R&D reclaim and capital allowance optimization.',
      },
      {
        name: 'Full-Cycle VAT Management',
        details: 'Strategic VAT structure reviews, Making Tax Digital (MTD) submission, and complex partial exemption analysis.',
      },
      {
        name: 'HMRC Self Assessment',
        details: 'Accurate and timely personal tax filings for directors, sole traders, and high earners.',
      },
      {
        name: 'CIS & Payroll Compliance',
        details: 'Managing CIS registrations, deductions, and monthly RTI submissions with technical precision.',
      },
      {
        name: 'Capital Gains Strategy',
        details: 'Complex CGT calculations for property portfolios and asset disposals using available reliefs.',
      },
      {
        name: 'HMRC Inquiry Defense',
        details: 'Professional technical support for HMRC compliance checks, investigations, and formal appeals.',
      },
    ],

    whoItsFor: [
      'UK Limited Companies',
      'International SMEs in UK',
      'Construction Industry (CIS) Firms',
      'High Net Worth UK Residents',
      'UK Subsidiaries of Foreign Groups',
    ],

    benefits: [
      'Making Tax Digital (MTD) Ready',
      'Maximized Relief & Allowance Reclaim',
      'Minimized Disclosure Risk',
      'Expert HMRC Liaison Desk',
    ],

    process: [
      {
        step: 'Status Review',
        description: 'Analysis of UK tax liabilities and existing reporting structures.',
      },
      {
        step: 'MTD Alignment',
        description: 'Integrating digital accounting for seamless HMRC data flow.',
      },
      {
        step: 'Submission Check',
        description: 'Triple-layer review of all filings before HMRC gateway submission.',
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
