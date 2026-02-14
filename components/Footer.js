import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="text-xl font-bold tracking-tight">Acculise</span>
            </Link>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
              Next-gen accounting & tax experts helping businesses scale in the
              US, UK, and beyond.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-blue-100/50 text-[10px] font-black uppercase tracking-widest">
                Global Connect
              </span>
              <div className="flex gap-3">
                <a
                  href="https://www.linkedin.com/company/acculise-solutions"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0077B7] hover:text-primary transition-all duration-500 shadow-lg"
                >
                  <svg className="w-4 h-4" viewBox="0 0 382 382">
                    <path
                      fill="#fff"
                      d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889  C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056  H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806  c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1  s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73  c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079  c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426  c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472  L341.91,330.654L341.91,330.654z"
                    />
                  </svg>
                </a>
                <a
                  href="https://wa.me/9409932535"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-500 shadow-lg"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-black text-white/90 mb-8 uppercase text-[10px] tracking-[0.4em] opacity-40">
              Solutions
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
              <li>
                <Link
                  href="/services/us-taxation"
                  className="hover:text-white transition-colors"
                >
                  US Taxation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/uk-taxation"
                  className="hover:text-white transition-colors"
                >
                  UK Taxation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/accounting"
                  className="hover:text-white transition-colors"
                >
                  Accounting
                </Link>
              </li>
              <li>
                <Link
                  href="/services/bookkeeping"
                  className="hover:text-white transition-colors"
                >
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white/90 mb-8 uppercase text-[10px] tracking-[0.4em] opacity-40">
              Company
            </h4>
            <ul className="space-y-4 text-sm text-blue-100/60 font-medium">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-white transition-colors"
                >
                  Join the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Insights Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-white/90 mb-8 uppercase text-[10px] tracking-[0.4em] opacity-40">
              Global Hubs
            </h4>
            <ul className="space-y-6 text-sm text-blue-100/60 font-medium">
              <li className="flex items-start group">
                <span className="font-black text-blue-400 mr-3 text-[10px] mt-1 tracking-tighter">
                  UNITED KINGDOM
                </span>
                <span className="group-hover:text-white transition-colors">
                  London Financial District
                </span>
              </li>
              <li className="flex items-start group">
                <span className="font-black text-blue-400 mr-3 text-[10px] mt-1 tracking-tighter">
                  UNITED STATES
                </span>
                <span className="group-hover:text-white transition-colors">
                  Financial Hub, New York
                </span>
              </li>
              <li className="flex items-center space-x-2 text-white font-black pt-4 border-t border-white/5">
                <svg
                  className="w-4 h-4 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="tracking-tight italic text-xs">
                  info@acculise.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.4em] text-blue-100/20">
          <p>© {currentYear} Acculise Solutions. Global Technical Board.</p>
          <div className="flex gap-10">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-conditions"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
