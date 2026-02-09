import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'IT & Digital Transformation',
  description: 'Technological engineering for financial ecosystems and business infrastructure.',
}

export default function ITServicesPage() {
  const serviceData = {
    title: 'IT & Digital Solutions',
    subtitle: 'High-Performance Engineering for Modern Enterprises',
    description: 'We build the technology that powers your growth. From custom enterprise web platforms to sophisticated financial system integrations, we engineer for performance.',
    
    services: [
      {
        name: 'Enterprise Web Development',
        details: 'High-precision, optimized web architectures built with React, Next.js, and modern fintech stacks.',
      },
      {
        name: 'ERP & Systems Architecture',
        details: 'Designing and deploying cloud systems that seamlessly sync financial data across your organization.',
      },
      {
        name: 'Custom Fintech Integration',
        details: 'API-level connectivity between your CRM, payment gateways (Stripe/Paypal), and accounting cores.',
      },
      {
        name: 'Decision Intelligence Boards',
        details: 'Building custom BI dashboards that visualize real-time financial KPIs from multiple data sources.',
      },
      {
        name: 'Secure Data Infrastructure',
        details: 'Engineering cloud-native security protocols and disaster recovery for sensitive financial assets.',
      },
      {
        name: 'AI Process Automation',
        details: 'Leveraging technical workflows and AI to automate routine data ingestion and reporting cycles.',
      },
    ],

    whoItsFor: [
      'Scaling Fintech Startups',
      'Modern E-commerce Stores',
      'Enterprises requiring digital overhaul',
      'Data-driven Financial Teams',
      'Global Professional Services',
    ],

    benefits: [
      'High-Speed Technical Performance',
      'Seamless Multi-app Connectivity',
      'Robust Data Integrity & Security',
      'Technical Competitive Advantage',
    ],

    process: [
      {
        step: 'Architecture Discovery',
        description: 'Mapping your existing technical debt and future engineering goals.',
      },
      {
        step: 'Iterative Development',
        description: 'Agile sprints to build, test, and deploy your custom digital infrastructure.',
      },
      {
        step: 'Scalable Maintenance',
        description: 'Continuous technical support to ensure 100% platform availability.',
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
