import ServiceDetailHero from '@/components/services/ServiceDetailHero'
import ServiceContent from '@/components/services/ServiceContent'

export const metadata = {
  title: 'CFO Advisory Services',
  description: 'Strategic financial leadership, forecasting, and M&A advisory for high-growth enterprises.',
}

export default function CFOAdvisoryPage() {
  const serviceData = {
    title: 'CFO Advisory',
    subtitle: 'Strategic Financial Leadership & Capital Optimization',
    description: 'Moving beyond accounting into the realm of strategic growth. Our fractional CFOs provide the high-level financial guidance needed to navigate complex capital markets and scale operations.',
    
    services: [
      {
        name: 'Financial Forecasting & Modeling',
        details: 'Advanced multi-year projections and scenario analysis for strategic planning.',
      },
      {
        name: 'Board & Investor Reporting',
        details: 'Institutional-grade reporting packages designed for venture boards and institutional investors.',
      },
      {
        name: 'M&A Advisory Support',
        details: 'Financial due diligence, valuation modeling, and post-merger integration planning.',
      },
      {
        name: 'Capital Structure Optimization',
        details: 'Evaluating debt vs equity options and managing capital allocation strategies.',
      },
      {
        name: 'Working Capital Management',
        details: 'Optimizing cash conversion cycles and managing liquidity for maximum efficiency.',
      },
      {
        name: 'Strategic Exit Planning',
        details: 'Preparing the financial technical stack for future acquisition or initial public offering.',
      },
    ],

    whoItsFor: [
      'Scale-ups preparing for Series B+',
      'Mid-market Private Equity Portfolio Co.',
      'Founders seeking strategic exit',
      'Firms undergoing major restructuring',
      'Rapidly expanding global entities',
    ],

    benefits: [
      'Institutional-grade Strategic Oversight',
      'Enhanced Investor & Board Confidence',
      'Optimized Capital & Cash Management',
      'Actionable Growth Intelligence',
    ],

    process: [
      {
        step: 'Strategy Audit',
        description: 'Comprehensive review of current financial goals and capital structure.',
      },
      {
        step: 'Model Building',
        description: 'Developing the technical financial framework for future projections.',
      },
      {
        step: 'Continuous Advisory',
        description: 'Monthly strategy sessions and board-level financial mentorship.',
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
