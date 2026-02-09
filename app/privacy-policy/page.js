import AnimatedSection from '@/components/AnimatedSection'

export const metadata = {
  title: 'Privacy Protocols | Acculise Intelligence Board',
  description: 'Technical privacy standards and data protection protocols at Acculise Solutions. Global compliance benchmarks (GDPR/CCPA).',
}

export default function PrivacyPolicyPage() {
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
            <AnimatedSection className="max-w-5xl">
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-16 h-1 bg-blue-400"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-300">Technical Governance</span>
              </div>
              <h1 className="text-5xl md:text-8xl xl:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-12 italic uppercase">
                Privacy <br/>
                <span className="text-secondary underline decoration-white/10 decoration-8 underline-offset-4">Protocols.</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100/60 max-w-3xl font-medium border-l-4 border-secondary pl-10 leading-relaxed italic">
                Our strict adherence to global data protection standards ensures that your financial intelligence remains secure within our board infrastructure.
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
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-3">Revision Board Index</p>
                         <h2 className="text-sm font-black text-slate-400 uppercase tracking-widest leading-none">Released: OCT 2025 • Ver 2.8.4</h2>
                       </div>
                       <div className="px-6 py-3 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl italic">
                          Document Integrity: VERIFIED
                       </div>
                    </div>
                    
                    <div className="space-y-10">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">01. Intelligence Perimeter</h3>
                      <p className="text-xl">
                        Acculise Solutions operates as a technically-driven financial services board. This protocol outlines our procedures for the ingestion, processing, and storage of financial intelligence across our global corridors.
                      </p>
                    </div>

                    <div className="space-y-10">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">02. Data Vectors</h3>
                      <p className="text-xl">
                        We process the following categories of technical intelligence through our secure pipeline:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 !list-none">
                        {[
                          { t: 'Identity Nexus', d: 'Legal descriptors and PII.' },
                          { t: 'Capital Registry', d: 'Source logs and account data.' },
                          { t: 'Static Contact', d: 'Global relay coordinates.' },
                          { t: 'Flow Metrics', d: 'Real-time transaction vectors.' }
                        ].map((item, i) => (
                           <div key={i} className="flex flex-col p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-primary transition-all duration-500 group">
                              <span className="text-primary font-black text-[10px] uppercase tracking-widest mb-4">Slot {i+1}</span>
                              <span className="text-xl font-black text-slate-900 mb-2">{item.t}</span>
                              <span className="text-sm text-slate-500 font-medium italic">{item.d}</span>
                           </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-10 pt-16 border-t border-slate-50">
                      <h3 className="text-4xl font-black text-slate-900 tracking-tighter italic">03. RSA Cryptographic Standards</h3>
                      <p className="text-xl">
                        All financial intelligence is protected by enterprise-grade encryption protocols. We utilize decentralized node architecture and strict node-based access to ensure that client assets remain invisible to unauthorized actors during global transmission.
                      </p>
                    </div>

                    <div className="bg-primary rounded-[3rem] p-16 text-white shadow-3xl relative overflow-hidden group">
                       <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-all duration-1000"></div>
                       <div className="relative z-10">
                        <h4 className="text-2xl font-black mb-8 italic uppercase tracking-tighter">Officer Verification</h4>
                        <p className="text-blue-100 font-bold italic text-xl leading-relaxed mb-10">
                            Should you require a hardware-based technical audit of how your intelligence is processed, our global compliance board is active for dossier requests.
                        </p>
                        <div className="w-20 h-px bg-blue-400"></div>
                       </div>
                    </div>
                  </div>
                </div>

                <div className="mt-32 text-center">
                   <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Authorized Disclosure Board Terminal</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
