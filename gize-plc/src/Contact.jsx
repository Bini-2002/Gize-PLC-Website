import "./Contact.css";

import logo from "./images/gize_logo.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

function IconBox({ children }) {
  return (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-red-600 text-white">
      {children}
    </span>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <img src={logo} alt="Gize PLC" className="h-12 w-auto" />
          </div>

          <nav className="hidden items-center gap-8 text-xs font-bold tracking-widest text-slate-800 uppercase md:flex">
            <a href="#" className="transition-colors hover:text-red-600">
              Home
            </a>
            <a href="#services" className="transition-colors hover:text-red-600">
              Services
            </a>
            <a href="#about" className="transition-colors hover:text-red-600">
              About Us
            </a>
            <a href="#faq" className="transition-colors hover:text-red-600">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded bg-red-500 px-6 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-red-600 md:inline-block"
          >
            contact us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[300px] w-full overflow-hidden bg-slate-900 md:h-[340px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">Contact Us</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> Contact Us
          </div>
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border border-red-300/70 p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                  Get in Touch
                </h2>

                <form className="mt-8 space-y-4">
                  <input
                    className="w-full rounded border border-red-200 bg-white px-4 py-2 text-xs text-slate-700 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100"
                    placeholder="Full Name"
                  />
                  <input
                    className="w-full rounded border border-red-200 bg-white px-4 py-2 text-xs text-slate-700 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100"
                    placeholder="Email Address"
                  />
                  <input
                    className="w-full rounded border border-red-200 bg-white px-4 py-2 text-xs text-slate-700 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100"
                    placeholder="Subject Line"
                  />
                  <textarea
                    rows={8}
                    className="w-full resize-none rounded border border-red-200 bg-white px-4 py-3 text-xs text-slate-700 outline-none focus:border-red-300 focus:ring-2 focus:ring-red-100"
                    placeholder="Drop Your Message..."
                  />

                  <button
                    type="button"
                    className="rounded bg-red-600 px-8 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="rounded-2xl bg-red-50/40 p-8 md:p-10">
                <div className="text-center">
                  <h3 className="text-lg font-extrabold text-slate-700">Contact Information</h3>
                  <p className="mt-1 text-[11px] text-slate-500">Say something to start a live chat!</p>
                </div>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <IconBox>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </IconBox>
                    <span className="text-xs font-semibold text-slate-600">gize@gizeplc.com</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IconBox>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/>
                      </svg>
                    </IconBox>
                    <span className="text-xs font-semibold text-slate-600">Bole Rwanda Embassy road</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IconBox>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L9 10c1.4 2.6 3.5 4.7 6.1 6.1l.9-1.1a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0 1 22 16.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </IconBox>
                    <span className="text-xs font-semibold text-slate-600">251911 516478</span>
                  </div>
                </div>

                <div className="my-10 h-px w-full bg-slate-300/70" />

                <div className="flex items-center gap-5 text-slate-500">
                  <a href="#" aria-label="Facebook" className="transition hover:text-red-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12A10 10 0 1 0 10.4 21.9v-7H7.9v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2V8.6h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="transition hover:text-red-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 8.25H4.5V23.5H0.5V8.25zM8.5 8.25H12.34V10.34H12.39C12.93 9.32 14.24 8.25 16.21 8.25C20.33 8.25 21.5 10.92 21.5 14.4V23.5H17.5V15.15C17.5 13.16 17.46 10.6 14.78 10.6C12.07 10.6 11.65 12.72 11.65 15.02V23.5H7.65V8.25H8.5z" />
                    </svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="transition hover:text-red-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.2A4.8 4.8 0 1 0 16.8 12 4.81 4.81 0 0 0 12 7.2zm0 7.9A3.1 3.1 0 1 1 15.1 12 3.1 3.1 0 0 1 12 15.1zM17.5 6.2a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <iframe
                title="Gize PLC Map"
                src="https://www.google.com/maps?q=Gize%20PLC%20Addis%20Ababa&output=embed"
                loading="lazy"
                className="h-[360px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <iframe
                title="Map"
                src="https://www.google.com/maps?q=Bole%20Rwanda%20Embassy%20road%20Addis%20Ababa&output=embed"
                loading="lazy"
                className="h-[360px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#EFEFEF] pb-8 pt-16 text-sm text-slate-700">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
          <div>
            <img src={logo} alt="Gize PLC" className="mb-6 h-10 w-auto" />
            <p className="text-xs leading-relaxed text-slate-500">
              Gize Logistics and Transport is a Freight forwarding company managed by a team of
              professionals who are dedicated to responding promptly to customer demands. We offer
              comprehensive services customized to suit your needs.
            </p>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">Our Services</h4>
            <ul className="space-y-3 text-xs">
              {[
                "Shipping",
                "Freight Forwarding",
                "Port Handling",
                "Warehousing",
                "Transportation",
                "Customs clearance",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="font-bold text-red-600">‹</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">Quick Links</h4>
            <ul className="space-y-3 text-xs">
              {["Home", "Our Services", "About us", "CEO", "Contact us", "FAQ"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="font-bold text-red-600">‹</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">Contact us</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3">
                <img src={iconLocation} alt="" className="mt-0.5 h-4 w-4" />
                <span>Bole Rwanda Embassy road</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={iconPhone} alt="" className="h-4 w-4" />
                <span>Tel: +251115 528080</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={iconMobile} alt="" className="h-4 w-4" />
                <span>Mob: +251911 516478</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={iconEmail} alt="" className="h-4 w-4" />
                <span>Email: gize@gizeplc.com</span>
              </li>
              <li className="flex items-center gap-3">
                <img src={iconTime} alt="" className="h-4 w-4" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-300 bg-slate-500 py-4 text-center text-xs text-white">
          All Rights Reserved by Gize PLC
        </div>
      </footer>
    </div>
  );
}
