"use client";

import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

export default function GlobalBranches() {
  const branches = [
    {
      city: "New York",
      country: "United States",
      address: "1221 Avenue of the Americas, New York, NY 10020",
      phone: "+1 (555) 123-4567",
      email: "info@acculise.com",
      image:
        "https://images.unsplash.com/photo-1496871455396-14e56815f1f4?auto=format&fit=crop&q=80&w=800",
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "30 St Mary Axe (The Gherkin), London EC3A 8BF",
      phone: "+44 20 7123 4567",
      email: "info@acculise.com",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=800",
    },
    {
      city: "Ahmedabad",
      country: "India",
      address: "Sindhu Bhavan Marg, PRL Colony, Ahmedabad, Gujarat 380054",
      phone: "+91 94099 32535",
      email: "info@acculise.com",
      image:
        "https://img.easemytrip.com/EMTHotel-1830754/23/na/l/20663474_2.jpg",
    },
  ];

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center space-x-3 mb-6 font-black uppercase tracking-[0.4em] text-[10px] text-primary">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span>Global Operations</span>
            <span className="w-12 h-[1px] bg-primary"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight italic">
            Physical <span className="text-blue-600">presence.</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 h-full border border-slate-100 flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={branch.image}
                    alt={`Acculise Solutions ${branch.city} Office`}
                    className="object-cover absolute group-hover:scale-110 transition-transform h-full w-full duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-8">
                    <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {branch.country}
                    </p>
                    <h3 className="text-2xl font-black text-white italic">
                      {branch.city}
                    </h3>
                  </div>
                </div>

                <div className="p-10 flex flex-col flex-grow">
                  <div className="space-y-6 mb-10 flex-grow">
                    <div className="flex items-start">
                      <div className="w-5 h-5 mt-1 text-primary mr-4 flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <p className="text-slate-600 text-sm font-medium leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 text-primary mr-4 flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <p className="text-slate-600 text-sm font-bold">
                        {branch.phone}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-5 h-5 text-primary mr-4 flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-slate-600 text-sm font-bold">
                        {branch.email}
                      </p>
                    </div>
                  </div>
                  {/* 
                  <button className="w-full py-5 rounded-2xl bg-slate-50 text-slate-400 font-black uppercase tracking-[0.2em] text-[10px] group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    View on Map
                  </button> */}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
