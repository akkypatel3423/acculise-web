// "use client"

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import jobsList from "@/components/careers/data";

export function generateStaticParams() {
  return jobsList.map((post) => ({
    slug: post.slug,
  }));
}

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const job = jobsList.find(j => j.slug === slug)
//   return {
//     title: job ? `${job.title} | Global Excellence Core` : 'Partner with Acculise',
//     description: job ? job.description : 'High-precision technical roles in global finance and compliance.',
//   }
// }

export default function JobDetailPage({ params }) {
  const { slug } = params;
  const job = jobsList.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center">
        <div>
          <h1 className="text-4xl font-black mb-6 tracking-tighter">
            Global Board Member Slot Not Found
          </h1>
          <Link href="/careers" className="btn-primary inline-block">
            Review Global Board
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* High-Impact Technical Hero */}
        <section className="relative pt-64 pb-48 bg-primary">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="container-custom relative z-10 w-full">
            <AnimatedSection>
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-20">
                <div className="max-w-5xl">
                  <div className="flex flex-wrap gap-4 mb-12">
                    <span className="px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl text-blue-300 rounded-full text-[10px] font-black uppercase tracking-[0.4em] leading-none">
                      {job.department}
                    </span>
                    <span className="px-6 py-2 bg-secondary text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] leading-none shadow-xl">
                      {job.type}
                    </span>
                  </div>

                  <h1 className="text-5xl md:text-8xl xl:text-[8rem] font-black text-white leading-[0.85] tracking-tighter mb-12 italic">
                    {job.title.split(" ").slice(0, -1).join(" ")} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                      {job.title.split(" ").slice(-1)}
                    </span>
                  </h1>

                  <div className="flex flex-wrap gap-12 pt-12 border-t border-white/10">
                    <div className="flex flex-col gap-2">
                      <span className="text-blue-300/50 font-black uppercase tracking-[0.3em] text-[10px]">
                        Territory Nexus
                      </span>
                      <span className="text-white font-black uppercase tracking-widest text-lg">
                        {job.location}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-blue-300/50 font-black uppercase tracking-[0.3em] text-[10px]">
                        Board Remuneration
                      </span>
                      <span className="text-white font-black uppercase tracking-widest text-lg">
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0">
                  <a
                    href={`mailto:akkypatel3423@gmail.com?subject=Strategic Application: ${job.title}`}
                    className="group bg-white text-primary px-16 py-8 rounded-full font-black uppercase tracking-[0.3em] text-[11px] shadow-3xl hover:bg-blue-50 transition-all duration-500 hover:scale-110 !flex items-center"
                  >
                    Join the Board
                    <svg
                      className="w-5 h-5 ml-4 group-hover:translate-x-3 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Technical Specs Dashboard */}
        <section className="section-padding bg-slate-50 relative z-20 -mt-20 rounded-t-[6rem]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <div className="lg:col-span-7 space-y-32">
                <AnimatedSection>
                  <div className="flex items-center space-x-4 mb-12">
                    <div className="w-16 h-1.5 bg-primary"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">
                      Mission Briefing
                    </span>
                  </div>
                  <div className="prose prose-slate prose-xl md:prose-2xl max-w-none text-slate-500 leading-relaxed font-medium">
                    <p className="font-black text-slate-900 text-4xl tracking-tight leading-[1.1] italic mb-16">
                      {job.description}
                    </p>
                    <div className="space-y-10">
                      <p>
                        We are augmenting our technical staff with a specialist
                        in {job.department}. This role is critical to
                        maintaining our 99.9% compliance accuracy across
                        international corridors between the US and UK.
                      </p>
                      <p>
                        You will be integrated into a high-performance
                        distributed board, leveraging automated financial
                        ecosystems and proprietary data pipelines to deliver
                        strategic visibility to global clients.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <div className="flex items-center space-x-4 mb-16">
                    <div className="w-16 h-1.5 bg-primary"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">
                      Technical Benchmarks
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                      "Mastery of UK/US GAAP & IFRS frameworks",
                      "Expertise in Multi-jurisdictional tax conduits",
                      "Advanced proficiency in Fintech API integration",
                      "Ability to architect financial data for scale",
                      "CPA / ACCA / EA Certification mandatory",
                      "Technical fluency in digital HMRC/IRS gateways",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start bg-white p-10 rounded-[3rem] border border-slate-100 shadow-2xl shadow-blue-900/5 hover:bg-slate-900 transition-all duration-700 group hover:-translate-y-2"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-secondary flex items-center justify-center mr-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-500 shrink-0">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={3}
                          >
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-black text-slate-800 uppercase tracking-tight text-sm leading-tight pt-1 group-hover:text-white transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Sticky Global Context Sidebar */}
              <aside className="lg:col-span-5 relative">
                <div className="sticky top-40 space-y-10">
                  <AnimatedSection className="bg-primary rounded-[4rem] p-16 text-white shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-1000"></div>
                    <h4 className="text-3xl font-black mb-16 italic uppercase tracking-tighter">
                      Technician Apex.
                    </h4>
                    <ul className="space-y-12">
                      {[
                        {
                          t: "Remote Architecture",
                          d: "Secure access to global hubs from any territory.",
                        },
                        {
                          t: "The Board Path",
                          d: "Direct technical route to Principal Board membership.",
                        },
                        {
                          t: "Stacks & Labs",
                          d: "Pioneer the evolution of next-gen financial AI.",
                        },
                      ].map((b, i) => (
                        <li key={i} className="relative z-10">
                          <p className="text-blue-300 font-black text-[10px] uppercase tracking-[0.5em] mb-4">
                            {b.t}
                          </p>
                          <p className="text-blue-100/70 text-lg italic font-medium leading-relaxed">
                            {b.d}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-16 pt-16 border-t border-white/10 relative z-10">
                      <a
                        href={`mailto:akkypatel3423@gmail.com?subject=Dossier Submission: ${job.title}`}
                        className="w-full inline-block bg-secondary text-white text-center py-6 rounded-full text-[11px] font-black uppercase tracking-[0.3em] hover:scale-105 transition-transform duration-500 shadow-2xl"
                      >
                        Transmit Your Dossier
                      </a>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection
                    delay={0.2}
                    className="bg-white p-12 rounded-[4rem] border border-slate-100 text-center shadow-3xl shadow-blue-900/5"
                  >
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-6">
                      Board Verification
                    </p>
                    <p className="text-slate-900 font-black text-2xl tracking-tighter italic">
                      Hiring Authority Active
                    </p>
                    <p className="text-secondary font-black text-[11px] uppercase tracking-[0.4em] mt-3">
                      NYC / LONDON HUDSON
                    </p>
                  </AnimatedSection>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
