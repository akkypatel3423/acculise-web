"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export const blogPosts = [
  {
    title: "Navigating the 2026 US Tax Changes",
    excerpt:
      "A comprehensive guide to the latest IRS updates and how they impact corporate tax strategies for the upcoming fiscal year.",
    category: "US Tax",
    date: "Oct 15, 2025",
    readTime: "6 min read",
    author: "Sarah Johnson, CPA",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    slug: "us-tax-changes-2026",
    content: "Long form content about US tax changes...",
  },
  {
    title: "Making Tax Digital (MTD) in the UK",
    excerpt:
      "HMRC is expanding MTD requirements. Learn who is affected and the steps you need to take to ensure compliance.",
    category: "UK Tax",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    author: "James Wilson, ACA",
    image:
      "https://taxfix.com/en-uk/wp-content/uploads/25Q3_TS_Rebrand_UK_Website_Content_Blog-and-guides_making-tax-digital-but-not-yet.png",
    slug: "mtd-uk-transition",
    content: "Long form content about MTD in the UK...",
  },
  {
    title: "The Future of AI in Cloud Accounting",
    excerpt:
      "How artificial intelligence is transforming bookkeeping processes and providing real-time financial insights.",
    category: "Technology",
    date: "Sep 28, 2025",
    readTime: "8 min read",
    author: "Alex Rivera",
    image:
      "https://www.noupe.com/wp-content/uploads/2024/05/Featured-Image-Impact-of-AI-and-Cloud-Computing-on-the-Future-of-Finance.jpg",
    slug: "ai-cloud-accounting",
    content: "Long form content about AI in accounting...",
  },
  {
    title: "Optimizing Cash Flow for Scale",
    excerpt:
      "Practical strategies to manage accounts receivable and payable effectively to maintain healthy liquidity.",
    category: "Accounting",
    date: "Sep 15, 2025",
    readTime: "4 min read",
    author: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    slug: "optimizing-cash-flow",
    content: "Long form content about cash flow...",
  },
  {
    title: "Advanced VAT Strategies for Global Sellers",
    excerpt:
      "Understand how distance selling rules and VAT OSS/IOSS impact your e-commerce expansion into Europe.",
    category: "UK Tax",
    date: "Sep 05, 2025",
    readTime: "7 min read",
    author: "James Wilson, ACA",
    image:
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200",
    slug: "advanced-vat-strategies",
    content: "Long form content about VAT...",
  },
  {
    title: "IRS Section 174: Impact on SaaS R&D",
    excerpt:
      "The mandatory capitalization of R&D expenses has changed the game for tech startups. Here is what you need to know.",
    category: "US Tax",
    date: "Aug 22, 2025",
    readTime: "10 min read",
    author: "Sarah Johnson, CPA",
    image: "https://hyno.co/images/Blogs/Frame-1047151.png",
    slug: "irs-section-174-saas",
    content: "Long form content about Section 174...",
  },
  {
    title: "Outsourced CFO: When is the Right Time?",
    excerpt:
      "Moving beyond basic bookkeeping to strategic financial leadership. Signs your business is ready for a fractional CFO.",
    category: "Accounting",
    date: "Aug 10, 2025",
    readTime: "5 min read",
    author: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    slug: "when-to-hire-outsourced-cfo",
    content: "Long form content about CFO services...",
  },
];

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "US Tax", "UK Tax", "Accounting", "Technology"];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section className="section-padding bg-bg">
      <div className="container-custom">
        {/* Filter Bar */}
        <AnimatedSection className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                  : "bg-white text-slate-500 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </AnimatedSection>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <article className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                      {post.author}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary text-[11px] font-black uppercase tracking-widest flex items-center group/btn"
                    >
                      Read Now
                      <svg
                        className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
