import "./Contact.css";

import logo from "./images/gize_logo.png";
import iconFacebook from "./images/Social Media/facebook.png";
import iconInstagram from "./images/Social Media/instagram.png";
import iconLinkedIn from "./images/Social Media/linkedin.png";
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
  const footerColumns = [
    {
      key: "services",
      title: "Our Services",
      items: [
        "Shipping",
        "Freight Forwarding",
        "Port Handling",
        "Warehousing",
        "Transportation",
        "Customs clearance",
      ],
      renderItem: (item) => (
        <li key={item}>
          <a href="#services" className="flex items-center gap-2 hover:text-red-600 hover:underline">
            <span className="font-bold text-red-600">‹</span> {item}
          </a>
        </li>
      ),
    },
    {
      key: "links",
      title: "Quick Links",
      items: [
        { label: "Home", href: "#" },
        { label: "Our Services", href: "#services" },
        { label: "About us", href: "#about" },
        { label: "Contact us", href: "#contact" },
        { label: "FAQ", href: "#faq" },
      ],
      renderItem: (link) => (
        <li key={link.label} className="flex items-center gap-2">
          <span className="font-bold text-red-600">‹</span>
          <a href={link.href} className="hover:text-red-600 hover:underline">
            {link.label}
          </a>
        </li>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--gize-dark-red-2)] font-sans text-slate-600 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[var(--gize-dark-red-1)] shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center">
            <img src={logo} alt="Gize PLC" className="h-12 w-auto" />
          </div>

          <nav className="hidden items-center gap-8 text-xs font-bold tracking-widest text-slate-800 dark:text-white uppercase md:flex">
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
            className="hidden rounded bg-red-500 dark:bg-[var(--gize-dark-red-1)] px-6 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-red-600 dark:hover:bg-[var(--gize-dark-red-2)] md:inline-block"
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
          <div className="rounded-2xl border border-red-300/70 dark:border-white/15 p-6 md:p-10">
            <div className="grid gap-10 md:grid-cols-2 md:items-stretch">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-3xl">
                  Get in Touch
                </h2>

                <form className="mt-8 space-y-4">
                  <input
                    className="w-full rounded border border-red-200 dark:border-white/15 bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none focus:border-red-300 dark:focus:border-white/25 focus:ring-2 focus:ring-red-100 dark:focus:ring-white/10"
                    placeholder="Full Name"
                  />
                  <input
                    className="w-full rounded border border-red-200 dark:border-white/15 bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none focus:border-red-300 dark:focus:border-white/25 focus:ring-2 focus:ring-red-100 dark:focus:ring-white/10"
                    placeholder="Email Address"
                  />
                  <input
                    className="w-full rounded border border-red-200 dark:border-white/15 bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none focus:border-red-300 dark:focus:border-white/25 focus:ring-2 focus:ring-red-100 dark:focus:ring-white/10"
                    placeholder="Subject Line"
                  />
                  <textarea
                    rows={8}
                    className="w-full resize-none rounded border border-red-200 dark:border-white/15 bg-white dark:bg-white/10 px-4 py-3 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none focus:border-red-300 dark:focus:border-white/25 focus:ring-2 focus:ring-red-100 dark:focus:ring-white/10"
                    placeholder="Drop Your Message..."
                  />

                  <button
                    type="button"
                    className="rounded bg-red-600 dark:bg-[var(--gize-dark-red-1)] px-8 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-700 dark:hover:bg-[var(--gize-dark-red-2)]"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="rounded-2xl bg-slate-50 dark:bg-white/10 border border-transparent dark:border-white/15 p-8 md:p-10">
                <div className="text-center">
                  <h3 className="text-lg font-extrabold text-slate-700 dark:text-white">Contact Information</h3>                </div>

                <div className="mt-10 space-y-5">
                  <div className="flex items-center gap-4">
                    <IconBox>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                    </IconBox>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-100/85">gize@gizeplc.com</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IconBox>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z" stroke="currentColor" strokeWidth="2"/>
                        <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor"/>
                      </svg>
                    </IconBox>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-100/85">Bole Rwanda Embassy road</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <IconBox>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.8.3 1.6.6 2.3a2 2 0 0 1-.5 2.1L9 10c1.4 2.6 3.5 4.7 6.1 6.1l.9-1.1a2 2 0 0 1 2.1-.5c.7.3 1.5.5 2.3.6A2 2 0 0 1 22 16.9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </IconBox>
                    <span className="text-xs font-semibold text-slate-600 dark:text-slate-100/85">251911 516478</span>
                  </div>
                </div>

                <div className="my-10 h-px w-full bg-slate-300/70 dark:bg-white/15" />

                <div className="flex items-center justify-center gap-5">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <img src={iconLinkedIn} alt="LinkedIn" className="h-5 w-5 object-contain" />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <img src={iconInstagram} alt="Instagram" className="h-5 w-5 object-contain" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/80 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    <img src={iconFacebook} alt="Facebook" className="h-5 w-5 object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div className="mt-14">
            <div className="overflow-hidden rounded-2xl bg-white dark:bg-white/10 shadow-sm dark:shadow-none border border-transparent dark:border-white/15">
              <iframe
                title="Gize PLC Map"
                src="https://www.google.com/maps?q=Gize%20PLC%20Addis%20Ababa&output=embed"
                loading="lazy"
                className="h-[360px] w-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#C0C0C0] pb-8 pt-16 text-sm text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
          <div>
            <img src={logo} alt="Gize PLC" className="mb-6 h-10 w-auto" />
            <p className="text-sm leading-relaxed text-slate-700">
              Gize Logistics and Transport is a Freight forwarding company managed by a team of
              professionals who are dedicated to responding promptly to customer demands. We offer
              comprehensive services customized to suit your needs.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.key}>
              <h4 className="mb-6 font-bold text-slate-900">{col.title}</h4>
              <ul className="space-y-3 text-xs">
                {col.items.reduce((acc, item) => {
                  acc.push(col.renderItem(item));
                  return acc;
                }, [])}
              </ul>
            </div>
          ))}

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

        <div className="mt-16 border-t border-slate-300 bg-[#C0C0C0] py-4 text-center text-xs text-slate-700">
          All Rights Reserved by Gize PLC
        </div>
      </footer>
    </div>
  );
}
