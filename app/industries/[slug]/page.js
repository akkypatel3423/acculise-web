// "use client"

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { industriesData } from "@/components/industries/industriesData";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const industry = industriesData.find((i) => i.slug === slug);

  const baseUrl = "https://www.acculise.com"; // replace with real domain
  const url = `${baseUrl}/industries/${slug}`;

  if (!industry) {
    return {
      title: "Industry Solutions | Acculise Sector Intelligence",
      description:
        "Explore sector-specific financial intelligence, compliance infrastructure, and scalable accounting solutions.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${industry.title} Solutions | Acculise Sector Intelligence`;
  const description =
    industry.description ||
    `Expert financial, tax, and compliance solutions tailored for the ${industry.title} industry.`;

  return {
    title,
    description,

    keywords: [
      industry.title,
      `${industry.title} accounting`,
      `${industry.title} tax services`,
      `${industry.title} compliance`,
      `${industry.title} financial solutions`,
      "outsourced accounting",
      "global compliance",
      "US tax services",
      "CPA outsourcing",
      "Acculise sector intelligence",
    ],

    authors: [{ name: "Acculise Intelligence Board" }],
    creator: "Acculise Global",
    publisher: "Acculise Sector Intelligence",

    metadataBase: new URL(baseUrl),

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Acculise Global",
      locale: "en_US",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@acculise", // replace if exists
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    category: "Finance",
  };
}

export function generateStaticParams() {
  return industriesData.map((post) => ({
    slug: post.slug,
  }));
}

export default function IndustryDetailPage({ params }) {
  const { slug } = params;
  const industry = industriesData.find((i) => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center">
        <div>
          <h1 className="text-4xl font-black mb-6">Sector Dossier Not Found</h1>
          <Link href="/industries" className="btn-primary inline-block">
            Back to Intelligence Board
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* Extreme High-Impact Hero */}
        <section className="relative pt-48 pb-40 bg-primary">
          <div className="absolute inset-0">
            {/* Decorative noise/gradient */}
            <div className="absolute inset-0 bg-[#0F2C67] opacity-90"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[180px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="container-custom relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center space-x-3 mb-8 px-5 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
                  <span className="text-[20px] leading-none">
                    {industry.icon}
                  </span>
                  <span className="text-blue-300 font-black uppercase tracking-[0.4em] text-[10px]">
                    Vertical Specialist
                  </span>
                </div>
                <h1 className="text-5xl md:text-8xl xl:text-9xl font-black text-white leading-[0.8] tracking-tighter mb-10 italic">
                  {industry.title.split(" ")[0]} <br />
                  <span className="text-secondary underline decoration-white/10 decoration-8 underline-offset-4">
                    {industry.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-blue-100/60 max-w-2xl font-medium border-l-4 border-secondary pl-8 leading-relaxed mb-12 italic">
                  {industry.description}
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {industry.solutions.slice(0, 2).map((s, i) => (
                    <span
                      key={i}
                      className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white text-[11px] font-bold uppercase tracking-widest backdrop-blur-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </AnimatedSection>

              <AnimatedSection
                delay={0.2}
                className="hidden lg:block w-[400px] h-[400px] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-[4rem] rotate-12 border border-white/10 flex items-center justify-center text-white/5 text-[20rem] font-black italic select-none">
                  {industry.icon}
                </div>
                <div className="absolute inset-0 bg-white/5 backdrop-blur-3xl rounded-[4rem] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-12 text-center group hover:-rotate-3 transition-transform duration-700">
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <p className="text-blue-200 font-black uppercase tracking-[0.3em] text-xs">
                    Sector Precision
                  </p>
                  <div className="w-12 h-1 bg-secondary mt-4"></div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Data Intelligence Section */}
        <section className="section-padding bg-slate-50 relative z-20 -mt-16 rounded-t-[6rem]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
              <div className="lg:col-span-7 space-y-24">
                <AnimatedSection>
                  <div className="flex items-center space-x-3 mb-10">
                    <div className="w-16 h-1.5 bg-primary"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-primary">
                      Technical Strategy
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-10 italic">
                    Engineering growth through <br />
                    <span className="text-secondary">data intelligence.</span>
                  </h2>
                  <div className="prose prose-slate prose-xl max-w-none text-slate-600 leading-relaxed font-medium space-y-8">
                    <p className="font-black text-slate-800 text-3xl tracking-tight leading-tight">
                      {industry.details}
                    </p>
                    <p>
                      Our {industry.title} desk isn't just about accounting—it's
                      about building a technical moat for your business. We
                      analyze the unique pressure points of your vertical, from
                      supply chain logistics to complex revenue recognition
                      standards.
                    </p>
                  </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <AnimatedSection delay={0.1}>
                    <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5 h-full group hover:bg-slate-900 transition-colors duration-500">
                      <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center mb-10 font-black group-hover:bg-red-500 group-hover:text-white transition-colors tracking-tighter text-xs">
                        ERR
                      </div>
                      <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-6 group-hover:text-slate-500 transition-colors">
                        Sector Friction
                      </h4>
                      <ul className="space-y-6">
                        {industry.challenges.map((c, i) => (
                          <li
                            key={i}
                            className="flex items-start text-slate-700 font-bold tracking-tight group-hover:text-slate-300 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 mr-4 shrink-0"></span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.2}>
                    <div className="bg-primary p-12 rounded-[3.5rem] text-white h-full shadow-2xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="w-12 h-12 rounded-full bg-white/10 text-secondary flex items-center justify-center mb-10 font-black tracking-tighter text-xs border border-white/5">
                        SOL
                      </div>
                      <h4 className="text-[11px] font-black text-blue-300 uppercase tracking-widest mb-6 relative z-10">
                        Acculise Engine
                      </h4>
                      <ul className="space-y-6 relative z-10">
                        {industry.solutions.map((s, i) => (
                          <li
                            key={i}
                            className="flex items-start text-blue-50 font-bold tracking-tight italic"
                          >
                            <svg
                              className="w-4 h-4 text-secondary mt-1 mr-4 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              strokeWidth={3}
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                </div>
              </div>

              <aside className="lg:col-span-5 relative">
                <div className="sticky top-32 space-y-8">
                  <AnimatedSection>
                    <div className="card-modern p-12 md:p-16 border-none shadow-2xl shadow-blue-900/10 bg-white group overflow-hidden relative">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
                      <h4 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">
                        Precision Audit.
                      </h4>
                      <p className="text-slate-500 text-lg font-medium mb-12 leading-relaxed">
                        Our sector-specific board provides the technical
                        backbone your business needs to expand without friction
                        across US and UK corridors.
                      </p>

                      <div className="space-y-6 mb-12">
                        {[
                          { label: "Latency", value: "Real-time Reporting" },
                          { label: "Accuracy", value: "99.9% Baseline" },
                          { label: "Board", value: "Expert Liaison" },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between py-4 border-b border-slate-50"
                          >
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                              {stat.label}
                            </span>
                            <span className="text-sm font-black text-primary uppercase">
                              {stat.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="btn-primary w-full shadow-2xl py-6 hover:scale-105"
                      >
                        Request Sector Blueprint
                      </Link>
                      <p className="mt-8 text-center text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
                        Reference Code: {industry.slug.toUpperCase()}
                      </p>
                    </div>
                  </AnimatedSection>

                  <AnimatedSection delay={0.3}>
                    <div className="p-10 rounded-[3rem] bg-slate-900 text-white shadow-xl relative overflow-hidden">
                      <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4">
                        Market Update
                      </p>
                      <p className="text-blue-100 font-bold italic leading-relaxed">
                        Our technical board is currently monitoring{" "}
                        {industry.title} regulatory shifts for the 2026 fiscal
                        cycle.
                      </p>
                    </div>
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
