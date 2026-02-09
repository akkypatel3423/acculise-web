'use client'

import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export default function AllServicesGrid() {
  const allServices = [
    {
      category: 'US Taxation',
      slug: 'us-taxation',
      icon: '🏛️',
      color: 'from-blue-600 to-indigo-600',
      description: 'Expert IRS compliance, corporate tax filing, and strategic tax planning for US entities and residents.',
      services: [
        'Form 1040 Preparation',
        'Corporate (1120/1120-S) Tax',
        'Partnership (1065) Filing',
        'State & Local Tax (SALT)'
      ],
    },
    {
      category: 'UK Taxation',
      slug: 'uk-taxation',
      icon: '🏢',
      color: 'from-indigo-600 to-violet-600',
      description: 'Comprehensive HMRC self-assessment, VAT management, and corporation tax for British businesses.',
      services: [
        'HMRC Self Assessment',
        'UK Corporation Tax (CT600)',
        'VAT Returns & Advice',
        'MTD Compliance'
      ],
    },
    {
      category: 'Global Accounting',
      slug: 'accounting',
      icon: '🌐',
      color: 'from-slate-700 to-slate-900',
      description: 'High-precision financial reporting under US GAAP and IFRS for multinational operations.',
      services: [
        'Financial Statements',
        'GAAP/IFRS Reporting',
        'Management Accounts',
        'Consolidated Statements'
      ],
    },
    {
      category: 'Strategic Bookkeeping',
      slug: 'bookkeeping',
      icon: '📊',
      color: 'from-blue-500 to-cyan-500',
      description: 'Clean, auditable financial records managed through advanced cloud accounting integrations.',
      services: [
        'Daily Bookkeeping',
        'Bank Reconciliation',
        'Accounts Payable/Receivable',
        'Cloud Ledger Management'
      ],
    },
    {
      category: 'Payroll Services',
      slug: 'payroll',
      icon: '👥',
      color: 'from-blue-400 to-blue-600',
      description: 'Full-service global payroll management with complex multi-jurisdiction tax withholding.',
      services: [
        'US & UK Payroll',
        'Contractor Payments',
        'W-2 / 1099 Preparation',
        'Benefits Administration'
      ],
    },
    {
      category: 'International Filings',
      slug: 'foreign-filings',
      icon: '🌍',
      color: 'from-indigo-400 to-indigo-700',
      description: 'Specialized FATCA, CRS, and cross-border regulatory reporting for global assets.',
      services: [
        'FATCA & Form 8938',
        'CRS Reporting',
        'FBAR (FinCEN 114)',
        'Expat Tax Compliance'
      ],
    },
    {
      category: 'IT & Digital Services',
      slug: 'it-services',
      icon: '💻',
      color: 'from-cyan-500 to-blue-600',
      description: 'Custom software solutions and IT infrastructure for modern financial operations.',
      services: [
        'Cloud Infrastructure',
        'Custom ERP Solutions',
        'Cybersecurity Audit',
        'FinTech Integration'
      ],
    },
    {
      category: 'CFO Advisory',
      slug: 'cfo-advisory',
      icon: '📈',
      color: 'from-emerald-500 to-teal-700',
      description: 'Strategic financial leadership to drive growth, manage risk, and optimize capital.',
      services: [
        'Financial Forecasting',
        'Board Reporting',
        'M&A Advisory',
        'Working Capital Optimization'
      ],
    },
    {
      category: 'Business Formation',
      slug: 'business-formation',
      icon: '🏗️',
      color: 'from-orange-500 to-red-600',
      description: 'Seamless entity setup and compliance management for new global ventures.',
      services: [
        'LLC/Corp Formation',
        'EIN/SSN Registration',
        'Registered Agent Services',
        'Operating Agreements'
      ],
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-24 max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 mb-6 font-bold uppercase tracking-[0.4em] text-[10px] text-primary">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span>Acculise Portfolio</span>
            <span className="w-12 h-[1px] bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
            Specialized financial <br/>
            <span className="text-secondary italic underline decoration-blue-100 decoration-8 underline-offset-4">capabilities.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="card-modern h-full group p-10 flex flex-col">
                <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight group-hover:text-primary transition-colors">
                  {service.category}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-10 font-medium">
                  {service.description}
                </p>

                <div className="space-y-4 mb-12">
                   {service.services.map((item, idx) => (
                     <div key={idx} className="flex items-center text-sm font-bold text-slate-800 tracking-tight">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 mr-3"></span>
                        {item}
                     </div>
                   ))}
                </div>

                <div className="mt-auto">
                  <Link 
                    href={`/services/${service.slug}`}
                    className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-secondary group/btn transition-colors"
                  >
                    Explore Technical Details
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
