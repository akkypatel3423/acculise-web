"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen pt-[15vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Circles */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: mounted
              ? `translate(${mousePosition.x}px, ${mousePosition.y}px)`
              : "none",
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: mounted
              ? `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
              : "none",
            transition: "transform 0.3s ease-out",
            animationDelay: "1s",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/5 rounded-full blur-3xl animate-pulse" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0F2C67 1px, transparent 1px),
              linear-gradient(to bottom, #0F2C67 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 404 Number with Animation */}
        <div className="relative mb-8">
          <h1
            className="text-[180px] md:text-[280px] lg:text-[320px] font-black leading-none select-none"
            style={{
              background:
                "linear-gradient(135deg, #0F2C67 0%, #2563EB 50%, #3B82F6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "0 0 80px rgba(37, 99, 235, 0.3)",
            }}
          >
            404
          </h1>

          {/* Decorative Elements around 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-l-4 border-blue-500/30 rounded-tl-3xl animate-pulse" />
            <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 border-t-4 border-r-4 border-indigo-500/30 rounded-tr-3xl animate-pulse delay-100" />
            <div className="absolute bottom-0 left-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-l-4 border-purple-500/30 rounded-bl-3xl animate-pulse delay-200" />
            <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b-4 border-r-4 border-blue-500/30 rounded-br-3xl animate-pulse delay-300" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Oops! The page you're looking for seems to have wandered off into
            the financial cosmos. Let's get you back on track.
          </p>
        </div>

        {/* Suggested Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#0F2C67] to-[#2563EB] text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 active:scale-95 min-w-[200px]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 bg-white text-[#0F2C67] font-bold rounded-full border-2 border-slate-200 hover:border-[#2563EB] transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 min-w-[200px]"
          >
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-5 h-5 transition-transform group-hover:rotate-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Us
            </span>
          </Link>
        </div>

        {/* Fun Message */}
        <div className="mt-12 text-slate-500 text-sm md:text-base">
          <p className="flex items-center justify-center gap-2">
            <span className="text-2xl animate-bounce">💡</span>
            <span>
              Need help? Our team is just a{" "}
              <Link
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-400 transition-colors"
              >
                click away
              </Link>
            </span>
          </p>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </div>
  );
}
