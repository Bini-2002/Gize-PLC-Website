import "./About.css";

import logo from "./images/gize_logo.png";
import ceoCutout from "./pages/ceo-image.png";
import ceoAlt from "./images/ceo_3.jpg";
import aboutCardImg from "./images/i5.jpg";
import iconExperience from "./images/About-us icons/Experience.png";
import iconGrowth from "./images/About-us icons/graph.png";
import iconTechnology from "./images/About-us icons/technology.png";
import iconFacebook from "./images/Social Media/facebook.png";
import iconInstagram from "./images/Social Media/instagram.png";
import iconLinkedIn from "./images/Social Media/linkedin.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

export default function About() {
  const team = [
    { id: 1, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
    { id: 2, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
    { id: 3, name: "Emily Johnson", role: "Supply Chain Analyst", img: ceoAlt },
  ];

  const highlights = [
    { id: "experience", label: "Experience", icon: iconExperience },
    { id: "growth", label: "Growth", icon: iconGrowth },
    { id: "technology", label: "Technology", icon: iconTechnology },
  ];

  const keyPoints = [
    "15 years of proven logistics results",
    "Smart technology for faster shipping",
    "Reliable freight forwarding you can trust",
    "Expert solutions to grow your business",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--gize-dark-red-2)] font-sans text-slate-600 dark:text-slate-100">
      {/* NAVBAR (same style as Homepage) */}
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
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">About Us</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> About Us
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY CARD */}
      <section className="bg-slate-50 dark:bg-[var(--gize-dark-red-2)] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 rounded-3xl bg-red-50/30 dark:bg-white/10 border border-transparent dark:border-white/15 px-6 py-10 md:grid-cols-2 md:items-center md:px-12 md:py-12">
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white md:text-2xl">
                We are a trusted <br className="hidden md:block" />
                logistics company since 2015
              </h2>

              <div className="mt-5 space-y-4 text-xs leading-relaxed text-slate-500 dark:text-slate-100/80">
                <p>
                  With over 10 years in logistics, we specialize in freight forwarding and supply chain
                  management, building a reputation as a trusted partner worldwide.
                </p>
                <p>
                  Our services include customs clearance and real-time shipment tracking for efficient
                  deliveries. We also provide private warehousing space tailored to your needs.
                </p>
                <p>
                  Our services include customs clearance and real-time shipment tracking for efficient
                  deliveries. We also provide private warehousing space tailored to your needs.
                </p>
              </div>

            </div>

            <div className="md:justify-self-end">
              <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <img
                  src={aboutCardImg}
                  alt="Logistics"
                  className="h-[220px] w-full object-cover md:h-[260px] md:w-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS SECTION (pills + key points) */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
              {highlights.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 rounded-full bg-slate-100 px-5 py-3 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white ring-1 ring-red-200">
                    <img src={item.icon} alt={item.label} className="h-6 w-6 object-contain" />
                  </div>
                  <div className="text-sm font-semibold text-slate-700">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {keyPoints.map((text) => (
                <div
                  key={text}
                  className="rounded-xl bg-slate-100 px-5 py-4 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-1 rounded bg-red-600" aria-hidden="true" />
                    <div className="text-sm font-semibold text-slate-700">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest text-red-600">
              Chief Executive Officer
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">
              GIZESHWORK <br />
              TESSEMA
            </h2>

            <div className="mt-6 space-y-4 text-xs leading-relaxed text-slate-500 dark:text-slate-100/80">
              <p>
                Gizeshwork Tessema, the CEO, leads with a vision that combines innovation and dedication,
                ensuring the successful delivery of solutions for both multinational corporations and
                smaller enterprises in international markets.
              </p>
              <p>
                Her passion for transforming ideas into impactful products and services has propelled the
                company to become a leading logistics provider in East Africa. Under her guidance, the
                team embraces challenges globally, continually seeking better, more efficient ways to meet
                customer needs while driving the business forward.
              </p>
            </div>

            <div className="mt-7 flex items-center gap-4 text-slate-600">
              <a href="#" aria-label="LinkedIn" className="transition hover:opacity-80">
                <img src={iconLinkedIn} alt="LinkedIn" className="h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="transition hover:opacity-80">
                <img src={iconInstagram} alt="Instagram" className="h-5 w-5 object-contain" />
              </a>
              <a href="#" aria-label="Facebook" className="transition hover:opacity-80">
                <img src={iconFacebook} alt="Facebook" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>

          <div className="md:justify-self-end">
            <div className="relative mx-auto h-[320px] w-[280px] md:h-[360px] md:w-[340px]">
              <img
                src={ceoCutout}
                alt="CEO"
                className="absolute inset-x-0 bottom-0 mx-auto h-[320px] w-auto object-contain md:h-[360px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="bg-slate-50 dark:bg-[var(--gize-dark-red-2)] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 dark:text-white">
              Our Expert Team <br /> Members
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.id} className="text-center">
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full bg-white dark:bg-white/10 shadow-sm dark:shadow-none ring-1 ring-slate-100 dark:ring-white/15">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>

                <div className="mx-auto mt-4 w-[230px] rounded-2xl bg-white dark:bg-white/10 border border-slate-100 dark:border-white/15 px-6 py-4 shadow-sm dark:shadow-none">
                  <div className="text-xs font-bold text-slate-900 dark:text-white">{member.name}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-100/70">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER (same as Homepage) */}
      <footer className="bg-[#C0C0C0] pb-8 pt-16 text-sm text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
          <div>
            <img src={logo} alt="Gize PLC" className="mb-6 h-10 w-auto" />
            <p className="text-sm leading-relaxed text-slate-700">
              Gize Logistics and Transport is a Freight forwarding company managed by a team of
              professionals who are dedicated to responding promptly to customer demands. We offer
              comprehensive services customized to suit your needs.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition hover:translate-y-[-1px] hover:shadow-sm">
                <img src={iconLinkedIn} alt="LinkedIn" className="h-4 w-4 object-contain" />
              </a>
              <a href="#" aria-label="Instagram" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition hover:translate-y-[-1px] hover:shadow-sm">
                <img src={iconInstagram} alt="Instagram" className="h-4 w-4 object-contain" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white ring-1 ring-slate-200 transition hover:translate-y-[-1px] hover:shadow-sm">
                <img src={iconFacebook} alt="Facebook" className="h-4 w-4 object-contain" />
              </a>
            </div>
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