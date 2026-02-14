// "use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import blogPosts from "@/components/blog/data";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Acculise Intelligence Board",
      description:
        "Explore expert technical perspectives on global finance, tax strategy, and regulatory intelligence.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const baseUrl = "https://www.acculise.com"; // replace with your real domain
  const url = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Acculise Intelligence Board`,
    description: post.excerpt,
    keywords: [
      "US Tax 2026",
      "IRS updates 2026",
      "Corporate tax strategy",
      "Tax compliance",
      "US corporate taxation",
      "Financial regulation",
      "Acculise Intelligence",
    ],
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: "Acculise Intelligence Board",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${post.title} | Acculise Intelligence Board`,
      description: post.excerpt,
      url,
      siteName: "Acculise Intelligence Board",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
    },

    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Acculise Intelligence`,
      description: post.excerpt,
      images: [post.image],
      creator: "@acculise", // replace with actual handle
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }) {
  const { slug } = params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center">
        <div>
          <h1 className="text-4xl font-black mb-6 tracking-tighter">
            Technical Log Not Found
          </h1>
          <Link href="/blog" className="btn-primary inline-block">
            Back to Knowledge Base
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white overflow-hidden">
        {/* Extreme Ministerial Hero */}
        <section className="relative h-[80vh] min-h-[700px] w-full flex items-end pt-24 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent"></div>
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay"></div>

          <div className="container-custom relative z-10 pb-20 text-white w-full">
            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <span className="bg-secondary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] leading-none shadow-xl">
                  {post.category}
                </span>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-200/80">
                  {post.date} • {post.readTime}
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl lg:text-[7.5rem] font-black max-w-6xl leading-[0.85] tracking-tighter mb-12 italic">
                {post.title}
              </h1>

              <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
                <div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center font-black text-primary text-3xl shadow-3xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity"></div>
                  <span className="relative z-10 italic">{post.author[0]}</span>
                </div>
                <div>
                  <p className="text-lg font-black uppercase tracking-widest">
                    {post.author}
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-300/60 mt-1">
                    Intelligence Board • Principal
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding relative z-20 bg-slate-50 rounded-t-[6rem] -mt-20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection>
                <div className="prose prose-slate prose-2xl max-w-none text-slate-600 leading-[1.6] space-y-16">
                  <p className="text-4xl md:text-5xl text-slate-900 font-black leading-[1.1] tracking-tight italic border-l-8 border-secondary pl-10 py-4">
                    &quot;{post.excerpt}&quot;
                  </p>

                  <div className="space-y-10 !mt-24 text-xl font-medium">
                    <p>
                      In the current global financial climate, the importance of
                      precise technical compliance cannot be overstated. As
                      regulatory bodies across the US and UK tighten their
                      digital reporting frameworks, businesses must adapt their
                      underlying data architecture to remain resilient and
                      efficient.
                    </p>
                    <p>
                      Our latest analysis indicates that technical debt in
                      accounting systems remains the primary bottleneck for
                      international scale-ups. By integrating automated ledger
                      management with expert human oversight, firms can mitigate
                      risk while unlocking significant operational leverage.
                    </p>
                  </div>

                  {/* Technical Takeaway */}
                  <div className="bg-primary rounded-[4rem] p-16 md:p-24 text-white my-24 shadow-3xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-12 text-[10px] font-black uppercase tracking-[0.5em] text-blue-300">
                        <div className="w-16 h-1 bg-blue-400"></div>
                        <span>Intelligence Board Takeaway</span>
                      </div>
                      <h4 className="text-4xl font-black mb-10 leading-[1.1] tracking-tighter italic">
                        Foundational Result.
                      </h4>
                      <p className="text-blue-100 font-bold italic text-3xl leading-[1.3]">
                        &quot;Success in the next fiscal cycle will be defined
                        by visibility. Companies that treat compliance as a
                        data-engineering problem rather than a clerical overhead
                        will lead their sectors.&quot;
                      </p>
                    </div>
                  </div>

                  <p className="text-xl font-medium">
                    As we help partners navigate these complexities, our focus
                    remains on providing the technical backbone for elite global
                    performance. Stay connected to our Knowledge Board for
                    continued technical depth on these evolving standards.
                  </p>
                </div>

                {/* Technical Engagement Footer */}
                <div className="mt-40 pt-20 border-t-2 border-slate-200 flex flex-col md:flex-row items-center justify-between gap-12">
                  <Link
                    href="/blog"
                    className="text-primary text-[11px] font-black uppercase tracking-[0.5em] flex items-center group transition-all hover:tracking-[0.6em]"
                  >
                    <svg
                      className="w-5 h-5 mr-4 group-hover:-translate-x-3 transition-transform duration-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                    >
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                    All Intelligence Reports
                  </Link>

                  <div className="flex flex-wrap items-center justify-center gap-10">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
                      Share Transmission:
                    </span>
                    {["LinkedIn", "Whatsapp", "Technical PDF"].map((item) => (
                      <button
                        key={item}
                        className="text-slate-400 hover:text-primary transition-all font-black uppercase text-[10px] tracking-[0.3em] hover:-translate-y-1"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
