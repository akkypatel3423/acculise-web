import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import GlobalBranches from '@/components/contact/GlobalBranches'

export const metadata = {
  title: 'Global Outreach & Consultations | Connect with Experts',
  description: 'Launch your partnership with Acculise. Contact our US or UK desks for high-precision taxation, accounting, or strategic advisory consultations.',
}

export default function ContactPage() {
  return (
    <>
        <ContactHero />
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
        <GlobalBranches />
    </>
  )
}
