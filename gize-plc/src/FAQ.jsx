import { useState } from "react";
import "./FAQ.css";

import logo from "./images/gize_logo.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

function AccordionRow({ question, answer, isOpen, onClick }) {
  return (
    <div className="rounded-2xl bg-red-50/40 px-6 py-5">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-start justify-between gap-4 text-left"
      >
        <span className="text-[12px] font-semibold text-slate-700">{question}</span>
        <span className="mt-0.5 text-slate-500">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            aria-hidden="true"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className="text-[11px] leading-relaxed text-slate-500">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const faqs = [
    {
      q: "How can I track a shipment?",
      a: "Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself as a reputed leader in the transportation and logistics sector in the country and region at large.",
    },
    {
      q: "How can I track a shipment?",
      a: "You can track your shipment using our online tracking tool with your tracking number.",
    },
    {
      q: "What logistics services does Gize offer?",
      a: "We offer shipping, freight forwarding, port handling, warehousing, transportation, and customs clearance.",
    },
    {
      q: "What areas do you serve?",
      a: "We support local and international cargo movements, tailored to customer requirements and routes.",
    },
    {
      q: "How are shipping costs calculated?",
      a: "Costs are typically calculated based on cargo weight/volume, destination, service type, and any special handling requirements.",
    },
    {
      q: "How do you handle customs clearance?",
      a: "Our team manages documentation, compliance checks, and coordination with authorities to reduce delays.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--gize-dark-red-2)] font-sans text-slate-600 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[var(--gize-dark-red-1)] shadow-sm backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
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

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded bg-red-500 dark:bg-[var(--gize-dark-red-1)] px-6 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-red-600 dark:hover:bg-[var(--gize-dark-red-2)] md:inline-flex"
            >
              contact us
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center justify-center rounded border border-slate-200 bg-white px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-800 shadow-sm transition hover:bg-slate-50 md:hidden"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-slate-900/50 px-4 py-6"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setIsMenuOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="mx-auto w-full max-w-sm rounded-2xl bg-white p-4 shadow-2xl ring-1 ring-slate-200"
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold uppercase tracking-widest text-slate-800">Menu</div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-700 hover:bg-slate-50"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <div className="mt-4 grid gap-2 text-sm font-semibold text-slate-700">
              {[
                { label: "Home", href: "#" },
                { label: "Services", href: "#services" },
                { label: "About Us", href: "#about" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200 transition hover:bg-white hover:text-red-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-[260px] w-full overflow-hidden bg-slate-900 sm:h-[300px] md:h-[340px]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/30 to-slate-900/10" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 md:px-8">
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">FAQ</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> FAQS
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div className="pt-6 md:pt-16">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                Frequently asked
              </h2>
              <div className="mt-1 text-2xl font-extrabold uppercase tracking-wide text-red-600 sm:text-3xl md:text-4xl">
                QUESTIONS
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <AccordionRow
                  key={`${item.q}-${idx}`}
                  question={item.q}
                  answer={item.a}
                  isOpen={openIndex === idx}
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white md:text-xl">Do you have more questions?</h3>
            <div className="mx-auto mt-6 max-w-xl text-[11px] leading-relaxed text-slate-500 dark:text-slate-100/80">
              Origin-to-destination freight movement and complete compliance management in a single,
              integrated platform. Meet the right team to help realize secure, timely deliveries
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-red-600 dark:bg-[var(--gize-dark-red-1)] px-10 py-2 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-700 dark:hover:bg-[var(--gize-dark-red-2)]"
            >
              contact us
            </a>
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
                <li key={item}>
                  <a href="#services" className="flex items-center gap-2 hover:text-red-600">
                    <span className="font-bold text-red-600">‹</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">Quick Links</h4>
            <ul className="space-y-3 text-xs">
              {[
                { label: "Home", href: "#" },
                { label: "Our Services", href: "#services" },
                { label: "About us", href: "#about" },
                { label: "Contact us", href: "#contact" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <li key={link.label} className="flex items-center gap-2">
                  <span className="font-bold text-red-600">‹</span>
                  <a href={link.href} className="hover:text-red-600 hover:underline">
                    {link.label}
                  </a>
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

        <div className="mt-16 border-t border-slate-300 bg-[#C0C0C0] py-4 text-center text-xs text-slate-700">
          All Rights Reserved by Gize PLC
        </div>
      </footer>
    </div>
  );
}
