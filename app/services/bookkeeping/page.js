import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'Strategic Bookkeeping Services',
  description: 'Clean data architecture and automated bookkeeping for scaling businesses.',
}

export default function BookkeepingPage() {
  const serviceData = {
    title: 'Strategic Bookkeeping',
    subtitle: 'High-Velocity Data Architecture & Ledger Management',
    description: 'We believe bookkeeping is the foundation of financial intelligence. We use automated cloud ecosystems to deliver pristine, real-time ledger accuracy for your business.',
    
    services: [
      {
        name: 'Daily Ledger Management',
        details: 'Real-time categorization and reconciliation of all bank, card, and payment gateways flow.',
      },
      {
        name: 'Technical Accounts Payable',
        details: 'Automated invoice ingestion and vendor management with strict dual-review approval workflows.',
      },
      {
        name: 'Managed Accounts Receivable',
        details: 'Precision invoicing and automated follow-up systems to optimize your cash conversion cycle.',
      },
      {
        name: 'Fixed Asset Tracking',
        details: 'Technical management of asset registers, depreciation schedules, and disposals.',
      },
      {
        name: 'Inventory Reconciliation',
        details: 'COGS calculations and inventory count adjustments for high-volume multichannel retail.',
      },
      {
        name: 'Cloud Software Migration',
        details: 'Mastery of QuickBooks, Xero, and specialized ERP setups with technical data clean-up.',
      },
    ],

    whoItsFor: [
      'High-growth E-commerce Brands',
      'Modern Professional Agencies',
      'Scaling SaaS Platforms',
      'Businesses requiring clean Audit Trails',
      'Project-based Consultancies',
    ],

    benefits: [
      'Real-time Profit Visibility',
      'Elimination of Manual Entry Errors',
      'Audit-ready General Ledgers',
      'Streamlined Month-end Scaling',
    ],

    process: [
      {
        step: 'Sync & Integration',
        description: 'Automating the flow between your banks, apps, and the general ledger.',
      },
      {
        step: 'Categorization Board',
        description: 'Our technical team classifies every byte of data for tax accuracy.',
      },
      {
        step: 'Reconciliation Check',
        description: 'Ensuring zero-discrepancy ledger health every single month.',
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
