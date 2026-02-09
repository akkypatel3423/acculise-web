import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export const metadata = {
  title: 'Strategic Terms | Acculise Intelligence Board',
  description: 'Legal framework and global service alignment for Acculise Solutions. Governing protocols for US & UK financial infrastructure.',
}

export default function TermsPage() {
  return (
    <>
      <div className="bg-slate-900 overflow-hidden">
        {/* Extreme Ministerial Hero */}
        <section className="relative pt-64 pb-48 bg-primary">
          <div className="absolute inset-0">
             <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="container-custom relative z-10">
            <AnimatedSection className="max-w-5xl text-center lg:text-left mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-12">
                <div className="w-16 h-1 bg-blue-400"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-300">Operational Matrix</span>
              </div>
              <h1 className="text-5xl md:text-8xl xl:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-12 italic uppercase">
                Strategic <br/>
                <span className="text-secondary underline decoration-white/10 decoration-8 underline-offset-4">Terms.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl font-medium border-l-4 border-secondary pl-10 leading-relaxed italic mx-auto lg:mx-0">
                The technical and legal perimeter governing our global financial advisory and compliance services across international corridors.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Technical Document Section */}
        <section className="section-padding bg-slate-50 relative z-20 -mt-20 rounded-t-[6rem] border-t border-white/10">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <AnimatedSection>
                <div className="bg-white p-16 md:p-24 rounded-[4rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
                  
                  <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-relaxed space-y-16">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-16 border-b border-slate-100 gap-8">
                       <div>
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3">Legal Index BOARD</p>
                         <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none">EFFECTIVE DATE: OCT 2025 • Ver 1.9.2</h2>
                       </div>
                       <div className="px-8 py-4 bg-primary text-white rounded-3xl text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl italic">
                          SERVICE STATUS: ACTIVE
                       </div>
                    </div>
                    
                    <div className="space-y-10">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">01. Engagment Blueprint</h3>
                      <p className="text-xl">
                        These Strategic Terms constitute a technical agreement between you, the client entity, and Acculise Solutions. By utilizing our global financial infrastructure, you agree to comply with the operational protocols outlined in this index.
                      </p>
                    </div>

                    <div className="space-y-10">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">02. Intellectual Logic</h3>
                      <p className="text-xl">
                        All proprietary softwares, compliance matrices, and digital reporting frameworks utilized by us remain the exclusive technical property of Acculise Solutions. Unauthorized duplication of our proprietary financial logic systems is strictly prohibited.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 !list-none">
                       <div className="p-12 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                          <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-8 block">Execution Target</span>
                          <h4 className="text-2xl font-black mb-6 italic tracking-tighter">99.9% Logic Accuracy.</h4>
                          <p className="text-blue-100/60 text-sm leading-relaxed italic">Predicted on the delivery of clean, unadulterated source data from the client desk.</p>
                       </div>
                       
                       <div className="p-12 rounded-[3rem] bg-blue-50 border border-blue-100 flex flex-col justify-center">
                          <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-6 block">Global Nexus</span>
                          <p className="text-slate-700 font-bold italic text-lg leading-relaxed">Respective technical laws of the US and UK apply based on service territory.</p>
                       </div>
                    </div>

                    <div className="space-y-10 pt-16 border-t border-slate-50">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic uppercase">03. Board Immunity</h3>
                      <p className="text-xl">
                        While we aim for absolute precision, our engagement does not constitute a guarantee against legislative shifts beyond our control. We act as your specialized technical shield across evolving regulatory landscapes.
                      </p>
                    </div>
                  </div>

                  <div className="mt-24 pt-16 border-t border-slate-50 text-center">
                     <Link href="/contact" className="btn-primary px-16 py-8 shadow-3xl hover:scale-105">Request Technical Appendix</Link>
                  </div>
                </div>

                <div className="mt-32 text-center">
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">End of Operational Directive</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
