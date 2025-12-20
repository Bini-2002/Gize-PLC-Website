import "./About.css";

import logo from "./images/gize_logo.png";
import ceoCutout from "./pages/ceo-image.png";
import ceoAlt from "./images/ceo_3.jpg";
import aboutCardImg from "./images/i5.jpg";
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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-600">
      {/* NAVBAR (same style as Homepage) */}
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
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">About Us</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> About Us
          </div>
        </div>
      </section>

      {/* ABOUT COMPANY CARD */}
      {/* ABOUT COMPANY CARD */}
<section className="bg-slate-50 py-14 md:py-20">
  <div className="mx-auto max-w-6xl px-4">
    <div className="grid gap-10 rounded-3xl bg-red-50/30 px-6 py-10 md:grid-cols-2 md:items-center md:px-12 md:py-12">
      <div>
        <h2 className="text-xl font-extrabold text-slate-900 md:text-2xl">
          We are a trusted <br className="hidden md:block" />
          logistics company since 2015
        </h2>

        <div className="mt-5 space-y-4 text-xs leading-relaxed text-slate-500">
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

        {/* Updated button linking to Services page */}
        <a 
          href="/services" 
          className="mt-6 inline-block rounded-full bg-red-500 px-6 py-2 text-[11px] font-bold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-600"
        >
          Other services
        </a>
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

      {/* FOOTER (same as Homepage) */}
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
