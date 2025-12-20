import { useMemo } from "react";
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
      <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 md:text-3xl">
        {title}
      </h2>
      {underline && <div className="mx-auto mt-2 h-1 w-16 bg-red-600" />}
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-xs text-slate-500">{subtitle}</p>}
    </div>
  );
}

export default function Services() {
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

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded bg-white p-6 text-center shadow-sm transition hover:shadow-md"
              >
                <div className="mx-auto h-40 w-full overflow-hidden rounded bg-slate-100">
                  {service.img ? (
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-200" />
                  )}
                </div>

                <h3 className="mt-6 text-xs font-extrabold uppercase tracking-wide text-blue-800">
                  {service.title}
                </h3>
                <p className="mt-3 text-[11px] leading-relaxed text-slate-500">{service.desc}</p>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-red-600 transition hover:text-red-700"
                >
                  Learn More <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section className="bg-slate-50 py-14 md:py-20" id="contact">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900">CONTACT US</h2>
          </div>

          <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-red-50/40 p-8 shadow-sm">
            <form className="space-y-4">
              <input
                className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-red-200"
                placeholder="Name"
              />
              <input
                className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-red-200"
                placeholder="Email"
              />
              <input
                className="w-full rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-red-200"
                placeholder="Phone No"
              />
              <select className="w-full rounded bg-white px-4 py-2 text-xs text-slate-500 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-red-200">
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
                className="w-full resize-none rounded bg-white px-4 py-2 text-xs text-slate-700 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-red-200"
                placeholder="Message"
              />

              <button
                type="button"
                className="mx-auto mt-2 block w-40 rounded-full bg-red-600 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-sm transition hover:bg-red-700"
              >
                Submit
              </button>
            </form>
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
