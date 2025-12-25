import { useEffect, useMemo, useState } from "react";
import "./Services.css";

import logo from "./images/gize_logo.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

function SectionTitle({ title, subtitle, underline = true }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 dark:text-white md:text-3xl">
        {title}
      </h2>
      {underline && <div className="mx-auto mt-2 h-1 w-16 bg-red-600" />}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500 dark:text-slate-100/85">{subtitle}</p>
      )}
    </div>
  );
}

export default function Services() {
  const [openServiceId, setOpenServiceId] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceImages = useMemo(() => {
    const modules = import.meta.glob("./images/what-we-provide/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });

    // Map by filename for stable pairing.
    const byName = Object.fromEntries(
      Object.entries(modules).map(([path, url]) => {
        const normalized = path.replace(/\\/g, "/");
        const filename = normalized.split("/").pop() || path;
        return [filename, url];
      }),
    );

    return {
      shipping: byName["Shipping_2.jpeg"],
      freight: byName["Freight_Forwarding.jpeg"],
      port: byName["Port_handling.jpeg"],
      warehouse: byName["Warehouse copy.jpeg"],
      transport: byName["Transportation2.jpeg"],
      customs: byName["Custom_clearance.jpg"],
    };
  }, []);

  const services = [
    {
      id: "shipping",
      title: "SHIPPING",
      desc: "solutions tailored to your business needs ensuring your cargo reaches its shipping seamless.",
      img: serviceImages.shipping,
    },
    {
      id: "freight",
      title: "FREIGHT FORWARDING",
      desc: "freight forwarding, from documentation to customs clearance, making international destination safely and on time.",
      img: serviceImages.freight,
    },
    {
      id: "port",
      title: "PORT HANDLING",
      desc: "We offer efficient port handling services to ensure smooth loading and unloading your cargo at ports worldwide.",
      img: serviceImages.port,
    },
    {
      id: "warehouse",
      title: "WAREHOUSING",
      desc: "Our secure warehousing facilities provide safe storage for your goods with inventory management and distribution services.",
      img: serviceImages.warehouse,
    },
    {
      id: "transport",
      title: "TRANSPORTATION",
      desc: "We provide reliable transportation for local and international cargo movement with real-time tracking.",
      img: serviceImages.transport,
    },
    {
      id: "customs",
      title: "CUSTOMS CLEARANCE",
      desc: "Our customs clearance services ensure your shipments comply with all regulations and pass through customs without delays.",
      img: serviceImages.customs,
    },
  ];

  const serviceDetails = useMemo(
    () => ({
      shipping: [
        "Planned pickup-to-delivery coordination with clear timelines.",
        "Documentation support to keep shipments moving smoothly.",
        "Proactive updates so you always know where your cargo is.",
      ],
      freight: [
        "End-to-end forwarding with trusted carrier options.",
        "Route planning to balance speed, cost, and reliability.",
        "Custom handling for special cargo and fragile items.",
      ],
      port: [
        "Fast loading/unloading coordination to reduce waiting time.",
        "Port documentation and handoff support for fewer delays.",
        "Cargo checks and status updates during terminal handling.",
      ],
      warehouse: [
        "Secure storage with organized inventory handling.",
        "Flexible space options based on your cargo volume.",
        "Dispatch coordination to support distribution and delivery.",
      ],
      transport: [
        "Reliable inland transport with predictable scheduling.",
        "Real-time visibility and communication during transit.",
        "Careful loading practices to reduce damage risk.",
      ],
      customs: [
        "Customs paperwork preparation to minimize errors.",
        "Regulation guidance to avoid penalties and re-checks.",
        "Clearance follow-up to keep cargo moving on time.",
      ],
    }),
    [],
  );

  const activeService = services.find((s) => s.id === openServiceId) || null;
  const activeServicePoints = (activeService && serviceDetails[activeService.id]) || [];

  useEffect(() => {
    if (!openServiceId) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenServiceId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openServiceId]);

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
          <h1 className="text-2xl font-extrabold tracking-wide text-white md:text-3xl">Service</h1>
          <div className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/80">
            Home <span className="px-2">/</span> service
          </div>
        </div>
      </section>

      {/* OUR SERVICE */}
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle
            title="OUR SERVICE"
            subtitle="Comprehensive logistics solutions tailored to meet your specific needs"
          />

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-xl bg-white dark:bg-white/10 border border-slate-100 dark:border-white/15 p-6 text-center shadow-lg dark:shadow-none transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-100/50"
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-all duration-700 group-hover:from-red-50/20 group-hover:via-white/0 group-hover:to-blue-50/20" />
                
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-500 group-hover:border-red-200/30" />
                
                {/* Content container */}
                <div className="relative z-10">
                  <div className="mx-auto h-40 w-full overflow-hidden rounded-lg bg-slate-100 transition-all duration-500 group-hover:scale-105">
                    {service.img ? (
                      <img
                        src={service.img}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-slate-200 to-slate-300" />
                    )}
                  </div>

                  <h3 className="mt-6 text-xs font-extrabold uppercase tracking-wide text-blue-800 dark:text-white transition-colors duration-300 group-hover:text-red-600 dark:group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-[11px] leading-relaxed text-slate-500 dark:text-slate-100/80 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-white">
                    {service.desc}
                  </p>

                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenServiceId(service.id);
                    }}
                    className="mt-6 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-red-600 dark:text-white transition-all duration-300 group-hover:gap-2 group-hover:text-red-700 dark:group-hover:text-slate-100"
                  >
                    Learn More 
                    <span 
                      className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {openServiceId && (
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 px-4"
              role="presentation"
              onMouseDown={(e) => {
                if (e.target === e.currentTarget) setOpenServiceId(null);
              }}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="service-dialog-title"
                className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-widest text-red-600">
                      Service details
                    </div>
                    <h3 id="service-dialog-title" className="mt-2 text-lg font-extrabold text-slate-900">
                      {activeService?.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenServiceId(null)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-bold text-slate-700 hover:bg-slate-50"
                    aria-label="Close dialog"
                  >
                    ×
                  </button>
                </div>

                <div className="mt-4 space-y-3">
                  {activeServicePoints.map((point) => (
                    <div key={point} className="rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 flex-none rounded-full bg-red-600" aria-hidden="true" />
                        <p className="text-sm text-slate-700">{point}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setOpenServiceId(null)}
                    className="rounded bg-red-600 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white hover:bg-red-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT US */}
      <section className="bg-slate-50 dark:bg-[var(--gize-dark-red-2)] py-14 md:py-20" id="contact">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 dark:text-white">CONTACT US</h2>
          </div>

          <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-red-50/40 dark:bg-white/10 border border-transparent dark:border-white/15 p-8 shadow-sm dark:shadow-none transition-all duration-500 hover:shadow-lg">
            <form className="space-y-4">
              <input
                className="w-full rounded bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none ring-1 ring-slate-200 dark:ring-white/15 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200 dark:focus:ring-white/20"
                placeholder="Name"
              />
              <input
                className="w-full rounded bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none ring-1 ring-slate-200 dark:ring-white/15 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200 dark:focus:ring-white/20"
                placeholder="Email"
              />
              <input
                className="w-full rounded bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none ring-1 ring-slate-200 dark:ring-white/15 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200 dark:focus:ring-white/20"
                placeholder="Phone No"
              />
              <select className="w-full rounded bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-500 dark:text-slate-100/85 outline-none ring-1 ring-slate-200 dark:ring-white/15 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200 dark:focus:ring-white/20">
                <option>Select Freight</option>
                <option>Shipping</option>
                <option>Freight Forwarding</option>
                <option>Port Handling</option>
                <option>Warehousing</option>
                <option>Transportation</option>
                <option>Customs clearance</option>
              </select>
              <textarea
                rows={5}
                className="w-full resize-none rounded bg-white dark:bg-white/10 px-4 py-2 text-xs text-slate-700 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-100/60 outline-none ring-1 ring-slate-200 dark:ring-white/15 transition-all duration-300 focus:scale-[1.02] focus:ring-2 focus:ring-red-200 dark:focus:ring-white/20"
                placeholder="Message"
              />

              <button
                type="button"
                className="mx-auto mt-2 block w-40 rounded-full bg-red-600 dark:bg-[var(--gize-dark-red-1)] py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition-all duration-300 hover:scale-105 hover:bg-red-700 dark:hover:bg-[var(--gize-dark-red-2)] hover:shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER (same as Homepage) */}
      <footer className="bg-[#C0C0C0] pb-8 pt-16 text-sm text-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-4">
          <div>
            <img src={logo} alt="Gize PLC" className="mb-6 h-10 w-auto transition-transform duration-300 hover:scale-105" />
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
                  <a
                    href="#services"
                    className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-red-600"
                  >
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
                <li 
                  key={link.label} 
                  className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-red-600"
                >
                  <span className="font-bold text-red-600">‹</span>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-bold text-slate-900">Contact us</h4>
            <ul className="space-y-4 text-xs">
              <li className="flex items-start gap-3 transition-colors duration-300 hover:text-red-600">
                <img src={iconLocation} alt="" className="mt-0.5 h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Bole Rwanda Embassy road</span>
              </li>
              <li className="flex items-center gap-3 transition-colors duration-300 hover:text-red-600">
                <img src={iconPhone} alt="" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Tel: +251115 528080</span>
              </li>
              <li className="flex items-center gap-3 transition-colors duration-300 hover:text-red-600">
                <img src={iconMobile} alt="" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Mob: +251911 516478</span>
              </li>
              <li className="flex items-center gap-3 transition-colors duration-300 hover:text-red-600">
                <img src={iconEmail} alt="" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Email: gize@gizeplc.com</span>
              </li>
              <li className="flex items-center gap-3 transition-colors duration-300 hover:text-red-600">
                <img src={iconTime} alt="" className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
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