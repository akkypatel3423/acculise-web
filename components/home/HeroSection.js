'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [index, setIndex] = useState(0)

  const heroContent = [
    {
      prefix: 'Absolute',
      word: 'Standard.',
      tagline: 'Global Financial Solutions',
      description: 'Expert US & UK taxation and strategic accounting for high-growth enterprises.',
      detail: 'Authorized IRS & HMRC Agents • Licensed CPA Board',
      icon: '🏛️',
      accent: 'bg-blue-400/10'
    },
    {
      prefix: 'Absolute',
      word: 'Precision.',
      tagline: 'International Tax Intelligence',
      description: 'Zero-error financial intelligence for global firms and complex tax jurisdictions.',
      detail: '99.9% Accuracy in Global Taxation & Filing',
      icon: '🎯',
      accent: 'bg-indigo-400/10'
    },
    {
      prefix: 'Absolute',
      word: 'Excellence.',
      tagline: 'Strategic Accounting Advisory',
      description: 'Next-gen advisory services to automate and scale your international finance ops.',
      detail: 'Strategic Accounting for High-Growth Scale-ups',
      icon: '💎',
      accent: 'bg-cyan-400/10'
    },
    {
      prefix: 'Absolute',
      word: 'Compliance.',
      tagline: 'Regulatory Confidence Worldwide',
      description: 'Navigating regulatory shifting sand with expert technical oversight and safety.',
      detail: 'Technical Moat for International Enterprises',
      icon: '🛡️',
      accent: 'bg-blue-600/10'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroContent.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-primary font-sans">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?auto=format&fit=crop&q=80&w=2000"
          alt="Acculise Modern Finance Hub"
          fill
          className="object-cover opacity-20 mix-blend-overlay scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2C67] via-[#0F2C67]/95 to-transparent"></div>
      </div>

      {/* Accent Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`glow-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-0 right-0 w-[500px] h-[500px] ${heroContent[index].accent} rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse`}
        />
      </AnimatePresence>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-6xl">

          {/* 🔑 ONE synced animation wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >

              {/* Top Label */}
              <div className="flex items-center space-x-4 mb-8 text-blue-300 font-black uppercase tracking-[0.5em] text-[10px] sm:text-xs">
                <div className="h-[2px] w-12 bg-blue-400"></div>
                <div className="flex items-center gap-3">
                  <span className="text-lg sm:text-xl">
                    {heroContent[index].icon}
                  </span>
                  <span>{heroContent[index].tagline}</span>
                </div>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-7xl md:text-[6.5rem] lg:text-[8rem] xl:text-[9rem] font-black text-white leading-[0.8] tracking-tighter mb-10 italic">
                <span className="block">
                  {heroContent[index].prefix}
                </span>

                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  {heroContent[index].word}
                </span>
              </h1>

              {/* Description */}
              <div className="text-base sm:text-lg md:text-2xl text-blue-100/70 max-w-2xl leading-relaxed mb-12 font-medium border-l-2 border-white/10 pl-6">
                <p>{heroContent[index].description}</p>

                <span className="block mt-4 text-blue-100/40 text-[11px] font-black uppercase tracking-[0.3em] italic">
                  {heroContent[index].detail}
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Buttons – UNCHANGED */}
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="group bg-white text-primary px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[9px] sm:text-[11px] hover:bg-blue-50 transition-all duration-300 shadow-2xl shadow-blue-900/40 flex items-center justify-center"
            >
              Launch Consultation
              <svg
                className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform duration-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/services"
              className="bg-white/5 border border-white/20 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold uppercase tracking-widest text-[9px] sm:text-[11px] hover:bg-white/10 transition-all duration-500 backdrop-blur-2xl text-center"
            >
              Our Expertise
            </Link>
          </div>

          {/* Credibility Stats – UNCHANGED */}
          <div className="mt-16 sm:mt-24 py-8 border-t border-white/10 hidden md:grid md:grid-cols-4 gap-8 lg:gap-16">
            {[
              { label: 'Accreditation', value: 'CPA • ACCA', icon: '🏛️' },
              { label: 'Jurisdictions', value: 'US • UK • Global', icon: '🌐' },
              { label: 'Authorization', value: 'IRS • HMRC', icon: '🛡️' },
              { label: 'Precision', value: '99.9% Audit Ready', icon: '⚡' }
            ].map((stat, i) => (
              <div key={i} className="group cursor-default">
                <div className="flex items-center space-x-3 mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-base lg:text-lg">{stat.icon}</span>
                  <p className="text-[10px] font-black text-blue-100 uppercase tracking-[0.2em] leading-none whitespace-nowrap">
                    {stat.label}
                  </p>
                </div>
                <p className="text-base lg:text-lg font-black text-white tracking-tight">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
