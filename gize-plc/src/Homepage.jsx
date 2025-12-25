import { useEffect, useMemo, useState, useRef } from "react";
import "./Homepage.css";
import logo from "./images/gize_logo.png";
import heroI2 from "./images/i2.jpeg";
import heroI3 from "./images/i3.jpeg";
import carIcon from "./images/car.svg";
import timeIcon from "./images/time.png";
import globalIcon from "./images/global.svg";
import testimonialImg from "./images/Jessica-James.png";
import iconFacebook from "./images/Social Media/facebook.png";
import iconInstagram from "./images/Social Media/instagram.png";
import iconLinkedIn from "./images/Social Media/linkedin.png";
import iconLocation from "./icons/location.png";
import iconPhone from "./icons/telephone-call.png";
import iconMobile from "./icons/iphone.png";
import iconEmail from "./icons/email.png";
import iconTime from "./icons/time.png";

// Helper for accordion
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-slate-200 dark:border-white/15 last:border-0">
      <button
        className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-sm font-medium text-slate-700 dark:text-white">{question}</span>
        <span className={`ml-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.41 0.589996L6 5.17L10.59 0.589996L12 2L6 8L0 2L1.41 0.589996Z" fill="#94A3B8"/>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pb-4 text-sm text-slate-500 dark:text-slate-100/85">{answer}</div>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle, underline = false }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">
        {title}
      </h2>
      {underline && <div className="mx-auto mt-2 h-1 w-16 bg-red-600"></div>}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 dark:text-slate-100/85">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Custom hook for intersection observer
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default function Homepage() {
  const heroSlides = useMemo(
    () => [
      {
        id: "global-logistics-service",
        image: heroI2,
        title: "GLOBAL LOGISTICS SERVICE",
        desc: "Reliable, end-to-end logistics support—planned routes, proactive updates, and service you can trust across borders and cities.",
      },
      {
        id: "door-to-door",
        image: heroI2,
        title: "DOOR TO DOOR YOUR CARGO MATTERS",
        desc: "From pickup to final delivery, we handle every step with clear communication, careful handling, and dependable timelines.",
      },
      {
        id: "shipping-solution",
        image: heroI3,
        title: "COMPLETE SHIPING SOLUTION",
        desc: "End-to-end logistics—freight forwarding, documentation, customs clearance, warehousing, and last-mile delivery—built around your schedule.",
      },
    ],
    []
  );

  const [heroIndex, setHeroIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  
  // Refs for animation
  const whyChooseRef = useRef(null);
  const cardRefs = useRef([]);
  const isWhyChooseVisible = useIsVisible(whyChooseRef);

  // Fix: Use useRef for interval to clear properly
  const slideInterval = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    // Clear any existing interval
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    
    if (prefersReducedMotion) return;
    
    // Fix: Set faster interval (6000ms instead of 10000ms)
    slideInterval.current = window.setInterval(() => {
      setHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [prefersReducedMotion, heroSlides.length]);

  // Fix: Make arrow functions more robust
  const goPrevHero = (e) => {
    if (e) e.preventDefault();
    setHeroIndex((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };
  
  const goNextHero = (e) => {
    if (e) e.preventDefault();
    setHeroIndex((current) => (current + 1) % heroSlides.length);
  };
  
  const goToHero = (index) => {
    setHeroIndex(index);
  };

  // Load images
  const provideImages = useMemo(() => {
    const modules = import.meta.glob("./images/what-we-provide/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });
    return Object.values(modules);
  }, []);

  const partnerLogos = useMemo(() => {
    const modules = import.meta.glob("./images/partners/*.{png,jpg,jpeg,svg,webp}", {
      eager: true,
      import: "default",
    });
    return Object.values(modules);
  }, []);

  const [openFaq, setOpenFaq] = useState(0);

  const whyChoose = [
    {
      id: "global",
      icon: globalIcon,
      title: "Global Network",
      desc: "Access to our extensive network of partners worldwide helping us provide seamless door-to-door service for all your cargo needs.",
    },
    {
      id: "diversified",
      icon: carIcon,
      title: "Diversified Services",
      desc: "From shipping and freight forwarding to customs clearance and warehousing, we offer comprehensive solutions tailored to your business requirements.",
    },
    {
      id: "timely",
      icon: timeIcon,
      title: "Fast & Timely Delivery",
      desc: "We pride ourselves on providing fast and timely door-to-door services that meet your schedule constraints.",
    },
  ];

  const provideCards = [
    { id: "ship", title: "SHIPPING", desc: "solutions tailored to your business needs ensuring your cargo reaches its shipping seamless.", imgIndex: 0 },
    { id: "freight", title: "FREIGHT FORWARDING", desc: "freight forwarding, from documentation to customs clearance, making international destination safely and on time.", imgIndex: 1 },
    { id: "port", title: "PORT HANDLING", desc: "We offer efficient port handling services to ensure smooth loading and unloading your cargo at ports worldwide.", imgIndex: 2 },
    { id: "warehouse", title: "WAREHOUSING", desc: "Our secure warehousing facilities provide safe storage for your goods with inventory management and distribution services.", imgIndex: 3 },
    { id: "transport", title: "TRANSPORTATION", desc: "We provide reliable transportation for local and international cargo movement with real-time tracking.", imgIndex: 4 },
    { id: "customs", title: "CUSTOMS CLEARANCE", desc: "Our customs clearance services ensure your shipments comply with all regulations and pass through customs without delays.", imgIndex: 5 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      role: "CEO",
      img: testimonialImg,
      quote: "Gize Logistics has transformed our supply chain operations. Their efficient services and dedicated team",
    },
    {
      id: 2,
      name: "Jesica James",
      role: "CEO, Global Imports",
      img: testimonialImg,
      quote: "Gize Logistics has transformed our supply chain operations. Their efficient services and dedicated team",
    },
    {
      id: 3,
      name: "Theo James",
      role: "Global Imports",
      img: testimonialImg,
      quote: "Gize Logistics has transformed our supply chain operations. Their efficient services and dedicated team",
    },
  ];

  const activeTestimonial = testimonials[testimonialIndex] || testimonials[0];
  const goPrevTestimonial = () =>
    setTestimonialIndex((idx) => (idx - 1 + testimonials.length) % testimonials.length);
  const goNextTestimonial = () =>
    setTestimonialIndex((idx) => (idx + 1) % testimonials.length);

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "1000+", label: "Clients Worldwide" },
    { value: "50+", label: "Countries Served" },
    { value: "24/7", label: "Customer Support" },
  ];

  const faqs = [
    { q: "How can I track a shipment?", a: "Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself as a reputed leader in the transportation and logistics sector in the country and region at large." },
    { q: "How can I track a shipment?", a: "You can track your shipment using our online tracking tool with your tracking number." },
    { q: "What logistics services does Gize offer?", a: "We offer shipping, freight forwarding, warehousing, and customs clearance services." },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[var(--gize-dark-red-2)] font-sans text-slate-600 dark:text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-[var(--gize-dark-red-1)] shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 md:h-20 md:flex-row md:items-center md:justify-between md:gap-0 md:px-8 md:py-0">
          <div className="flex items-center justify-between">
            <img src={logo} alt="Gize PLC" className="h-12 w-auto" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[10px] font-bold tracking-widest text-slate-800 dark:text-white uppercase md:justify-end md:gap-8 md:text-xs">
            <a href="#" className="hover:text-red-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#about" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#faq" className="hover:text-red-600 transition-colors">FAQ</a>
          </nav>

          <a
            href="#contact"
            className="inline-flex justify-center rounded bg-red-500 dark:bg-[var(--gize-dark-red-1)] px-5 py-2 text-[10px] font-bold text-white uppercase tracking-wide shadow-md transition hover:bg-red-600 dark:hover:bg-[var(--gize-dark-red-2)] md:px-6 md:text-xs"
          >
            contact us
          </a>
        </div>
      </header>

      {/* HERO SECTION - FIXED ARROWS AND FASTER TRANSITIONS */}
      <section className="relative h-[420px] w-full overflow-hidden bg-slate-900 sm:h-[500px]">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === heroIndex;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                aria-hidden={!isActive}
              >
                <img
                  src={slide.image}
                  alt=""
                  className={`h-full w-full object-cover opacity-60 ${
                    !prefersReducedMotion && isActive ? "animate-heroKenburns" : ""
                  }`}
                />
              </div>
            );
          })}

          {/* Overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/40 to-slate-950/70 z-20" />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-30 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <div key={heroSlides[heroIndex].id} className="max-w-3xl">
            <h1
              className={`${prefersReducedMotion ? "" : "animate-heroIn"} text-3xl md:text-5xl font-extrabold uppercase tracking-wider drop-shadow-md`}
            >
              {heroSlides[heroIndex].title}
            </h1>
            <p
              className={`${prefersReducedMotion ? "" : "animate-heroIn"} mt-4 max-w-2xl mx-auto text-sm md:text-base font-light text-slate-100`}
              style={prefersReducedMotion ? undefined : { animationDelay: "140ms" }}
            >
              {heroSlides[heroIndex].desc}
            </p>

            <div
              className={`${prefersReducedMotion ? "" : "animate-heroIn"} mt-8 flex flex-col sm:flex-row items-center justify-center gap-4`}
              style={prefersReducedMotion ? undefined : { animationDelay: "260ms" }}
            >
              <a
                href="#services"
                className="rounded bg-red-600 px-8 py-3 text-xs font-bold uppercase tracking-wide text-white shadow-lg transition hover:bg-red-700"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="rounded border border-white bg-transparent px-8 py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-slate-900"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="absolute bottom-8 flex gap-2 z-30">
            {heroSlides.map((slide, idx) => {
              const isActive = idx === heroIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToHero(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  aria-current={isActive ? "true" : "false"}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    isActive ? "bg-red-600 scale-110" : "bg-white/60 hover:bg-white"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Floating Badges moved below (divider between hero image and Why Choose title) */}

        {/* FIXED ARROWS - Added z-40 and pointer-events-auto */}
        <button
          type="button"
          onClick={goPrevHero}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm flex items-center justify-center transition hover:bg-white/20 z-40 pointer-events-auto cursor-pointer md:left-4 md:h-10 md:w-10"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNextHero}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm flex items-center justify-center transition hover:bg-white/20 z-40 pointer-events-auto cursor-pointer md:right-4 md:h-10 md:w-10"
        >
          ›
        </button>
      </section>

      {/* Rest of the component remains the same... */}
      {/* WHY CHOOSE SECTION - UPDATED WITH ANIMATIONS */}
      <section ref={whyChooseRef} className="py-16 md:py-20 overflow-hidden">
        <div className="mx-auto max-w-6xl px-4">
          {/* Divider badges (previously overlaying the hero image) */}
          <div className="hidden md:flex items-center justify-center gap-6 mb-10">
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/15" />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 rounded-full bg-red-500 dark:bg-[var(--gize-dark-red-1)] px-4 py-2 text-white shadow-lg animate-floaty">
                <div className="text-[10px] font-bold leading-tight">
                  Call Us Now<br /><span className="font-normal opacity-80">24/7 Support</span>
                </div>
              </div>
              <div
                className="flex items-center gap-3 rounded-full bg-green-500 px-4 py-2 text-white shadow-lg animate-floaty"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-[10px] font-bold leading-tight">
                  Chat With Us<br /><span className="font-normal opacity-80">We're online now</span>
                </div>
              </div>
            </div>
            <div className="h-px flex-1 bg-slate-200 dark:bg-white/15" />
          </div>

          <SectionTitle 
            title="WHY CHOOSE GIZE PLC" 
            subtitle="Gize Logistics and Transport is managed by a team of professionals dedicated to responding promptly to customer demands"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {whyChoose.map((item, index) => (
              <div 
                key={item.id} 
                ref={el => cardRefs.current[index] = el}
                className={`group relative rounded bg-white dark:bg-white/10 p-8 text-center shadow-lg dark:shadow-none transition-all duration-500 hover:-translate-y-1 border border-slate-100 dark:border-white/15 border-t-4 border-red-500
                  ${isWhyChooseVisible ? 'animate-slideFromTop opacity-100' : 'opacity-0 translate-y-[-50px]'}`}
                style={{
                  animationDelay: isWhyChooseVisible ? `${index * 150}ms` : '0ms',
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setActiveCard(item.id)}
                onMouseLeave={() => setActiveCard(null)}
                onTouchStart={() => setActiveCard(item.id)}
                onTouchEnd={() => setActiveCard(null)}
              >
                {/* Red Overlay Animation */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/0 via-red-500/5 to-red-500/10 
                  transition-all duration-300 ease-out rounded
                  ${activeCard === item.id ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}`}></div>
                
                <div className="relative z-10">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 
                    dark:bg-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100 dark:group-hover:bg-white/15">
                    <img 
                      src={item.icon} 
                      alt={item.title} 
                      className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900 transition-colors duration-300 
                    dark:text-white group-hover:text-red-600 dark:group-hover:text-white">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-100/80">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE PROVIDE SECTION */}
    <section className="bg-slate-50 dark:bg-[var(--gize-dark-red-2)] py-16 md:py-20">
  <div className="mx-auto max-w-6xl px-4">
    <SectionTitle title="WHAT WE PROVIDE" underline />

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      {provideCards.map((card, idx) => (
        <div 
          key={card.id} 
          className="group bg-white dark:bg-white/10 border border-slate-100 dark:border-white/15 shadow-sm dark:shadow-none transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-300/50 active:scale-95 animate-slideFromTop"
          style={{
            animationDelay: `${idx * 0.2}s`,
            animationFillMode: 'both'
          }}
          onClick={(e) => {
            // Add bounce effect on click/touch
            e.currentTarget.classList.add('animate-bounce-once');
            setTimeout(() => {
              e.currentTarget.classList.remove('animate-bounce-once');
            }, 300);
          }}
        >
          <div className="h-48 overflow-hidden">
            {provideImages[card.imgIndex] ? (
              <img 
                src={provideImages[card.imgIndex]} 
                alt={card.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="h-full w-full bg-slate-200 dark:bg-white/10"></div>
            )}
          </div>
          <div className="p-6 text-center">
            <h3 className="mb-3 text-sm font-bold uppercase text-slate-800 dark:text-white">{card.title}</h3>
            <p className="mb-4 text-xs text-slate-500 dark:text-slate-100/80 leading-relaxed">{card.desc}</p>
            <a href="#" className="text-xs font-bold text-red-600 hover:text-red-700 dark:text-white dark:hover:text-slate-100 flex items-center justify-center gap-1 group/arrow">
              Learn More 
              <span className="transition-transform duration-300 group-hover/arrow:translate-x-1">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* PARTNERS SECTION - UPDATED WITH ROTATING CAROUSEL */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <SectionTitle title="OUR PARTNERS" underline />
          
          <div className="mt-12 relative overflow-hidden">
            {/* Carousel container with duplicated content for seamless loop */}
            <div className="flex animate-partnerScroll">
              {/* Original partner logos */}
              {partnerLogos.length > 0 ? (
                <>
                  {partnerLogos.map((logo, i) => (
                    <div key={i} className="flex-shrink-0 mx-10 md:mx-12">
                      <img 
                        src={logo} 
                        alt="Partner" 
                        className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 filter hover:drop-shadow-lg hover:brightness-110"
                      />
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {partnerLogos.map((logo, i) => (
                    <div key={`dup-${i}`} className="flex-shrink-0 mx-10 md:mx-12">
                      <img 
                        src={logo} 
                        alt="Partner" 
                        className="h-8 md:h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-110 filter hover:drop-shadow-lg hover:brightness-110"
                      />
                    </div>
                  ))}
                </>
              ) : (
                // Colorful placeholder partners
                <>
                  {[
                    { name: "HAE", color: "text-blue-500 hover:text-blue-600" },
                    { name: "IATA", color: "text-green-500 hover:text-green-600" },
                    { name: "DHL", color: "text-yellow-500 hover:text-yellow-600" },
                    { name: "FedEx", color: "text-purple-500 hover:text-purple-600" },
                    { name: "UPS", color: "text-brown-500 hover:text-brown-600" },
                    { name: "Maersk", color: "text-red-500 hover:text-red-600" },
                    { name: "CMA CGM", color: "text-indigo-500 hover:text-indigo-600" },
                  ].map((partner, i) => (
                    <div key={i} className="flex-shrink-0 mx-10 md:mx-12">
                      <div className={`text-2xl font-bold ${partner.color} transition-all duration-300 hover:scale-110`}>
                        {partner.name}
                      </div>
                    </div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {[
                    { name: "HAE", color: "text-blue-500 hover:text-blue-600" },
                    { name: "IATA", color: "text-green-500 hover:text-green-600" },
                    { name: "DHL", color: "text-yellow-500 hover:text-yellow-600" },
                    { name: "FedEx", color: "text-purple-500 hover:text-purple-600" },
                    { name: "UPS", color: "text-brown-500 hover:text-brown-600" },
                    { name: "Maersk", color: "text-red-500 hover:text-red-600" },
                    { name: "CMA CGM", color: "text-indigo-500 hover:text-indigo-600" },
                  ].map((partner, i) => (
                    <div key={`dup-${i}`} className="flex-shrink-0 mx-10 md:mx-12">
                      <div className={`text-2xl font-bold ${partner.color} transition-all duration-300 hover:scale-110`}>
                        {partner.name}
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="bg-slate-50 dark:bg-[var(--gize-dark-red-2)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionTitle title="WHAT OUR CLIENTS SAY" />

          <div className="relative mt-10">
            {/* Edge arrows */}
            <button
              type="button"
              onClick={goPrevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white md:flex"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-sm backdrop-blur transition hover:bg-white md:flex"
            >
              ›
            </button>

            {/* All cards (3 visible) */}
            <div className="px-4 sm:px-10 md:px-16">
              <div className="grid gap-6 md:grid-cols-3">
                {testimonials.map((t, i) => {
                  const isActive = i === testimonialIndex;
                  return (
                    <div
                      key={t.id}
                      className={`group relative rounded bg-white p-7 shadow-lg shadow-red-200/40 ring-1 transition-all duration-300 hover:shadow-xl hover:shadow-red-200/60 ${
                        isActive ? "ring-red-200" : "ring-slate-100"
                      }`}
                      aria-current={isActive ? "true" : "false"}
                    >
                      <div className="absolute -top-3 left-6 text-4xl text-red-200 font-serif">"</div>

                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={t.img}
                          alt={t.name}
                          className={`h-12 w-12 rounded-full object-cover border-2 ${
                            isActive ? "border-red-200" : "border-red-100"
                          }`}
                        />
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                          <p className="text-[10px] text-slate-500 uppercase">{t.role}</p>
                        </div>
                      </div>

                      <p className="text-sm italic text-slate-600 leading-relaxed">{t.quote}</p>
                    </div>
                  );
                })}
              </div>

              {/* 3 switch dots below */}
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((t, i) => {
                  const isActive = i === testimonialIndex;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTestimonialIndex(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      aria-current={isActive ? "true" : "false"}
                      className={`h-2.5 w-2.5 rounded-full transition-all ${
                        isActive ? "bg-red-500 scale-110" : "bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <div key={i} className="rounded bg-white dark:bg-white/10 p-6 text-center shadow-sm dark:shadow-none border border-slate-50 dark:border-white/15">
                <div className="text-3xl font-bold text-red-600 dark:text-white">{stat.value}</div>
                <div className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-100/75 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-slate-50 dark:bg-[var(--gize-dark-red-2)] pt-16 md:pt-20 pb-40 md:pb-60">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Frequently asked <span className="text-red-600 dark:text-white">QUESTIONS</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto]">
            <div className="rounded-xl bg-red-50/50 dark:bg-white/10 border border-transparent dark:border-white/15 p-6 md:p-8">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={openFaq === i}
                  onClick={() => setOpenFaq(i === openFaq ? -1 : i)}
                />
              ))}
            </div>
            <div className="flex items-end justify-center md:justify-start">
              <a 
                href="#faq" 
                className="rounded bg-red-600 dark:bg-[var(--gize-dark-red-1)] px-8 py-3 text-xs font-bold text-white uppercase shadow-lg hover:bg-red-700 dark:hover:bg-[var(--gize-dark-red-2)]"
              >
                Ask More
              </a>
            </div>
          </div>
        </div>
      </section>

     {/* FOOTER - LANDINGFOLIO INSPIRED */}
{/* FOOTER - LANDINGFOLIO INSPIRED */}
<footer id="contact" className="relative bg-[#C0C0C0] pb-8 text-sm text-slate-900 pt-0">
  {/* Top Banner - Larger & Wider */}
  <div className="relative z-30">
    {/* Banner Container - Increased width */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4">
      <div className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-xl shadow-xl shadow-red-200/60 
        py-8 px-8 md:px-12 flex flex-col md:flex-row justify-between items-center 
        border-2 border-white/20 backdrop-blur-sm overflow-hidden">
        
        {/* Background pattern - Larger */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/30 rounded-full blur-2xl"></div>
        </div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent 
          -translate-x-full animate-shimmer"></div>
        
        <div className="relative z-10 flex-1">
          <h2 className="text-white text-xl md:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
            <span className="block leading-tight">Looking For The Best</span>
            <span className="block leading-tight text-base md:text-xl lg:text-2xl text-white/90 mt-1">
              Logistics Transport Services?
            </span>
          </h2>
        </div>
        
        <button className="relative z-10 bg-gradient-to-r from-[#EFEFEF] to-[#E0E0E0] text-slate-800 px-8 py-4 
          font-bold text-base rounded-lg hover:from-[#E5E5E5] hover:to-[#D5D5D5] transition-all duration-300 
          hover:scale-105 hover:shadow-xl hover:shadow-slate-900/20 active:scale-95
          flex items-center gap-3 group mt-4 md:mt-0 border border-slate-300">
          <span>Contact us</span>
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
              d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
    
    {/* Connector line from banner to footer - Taller */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-6 w-1 h-20 
      bg-gradient-to-b from-red-600/60 to-transparent"></div>
  </div>

  {/* Main Footer Section - Adjusted for larger banner */}
  <div className="relative pt-40 pb-6 px-4 md:px-12">
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
      {/* Column 1: Company Info - Moved social media icons here */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent 
          rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <img src={logo} alt="Gize PLC" className="relative mb-4 h-8 w-auto transition-all duration-300 
          hover:scale-105 hover:drop-shadow-lg" />
              <p className="relative text-sm leading-relaxed text-slate-700 mb-4">
        Gize Logistics and Transport is a Freight forwarding company managed by a team of
              professionals who are dedicated to responding promptly to customer demands. We offer
              comprehensive services customized to suit your needs
        </p>
        
        {/* Social Media Links - Moved below logo and text */}
        <div className="mt-6 flex gap-2">
          {[{ src: iconLinkedIn, label: "LinkedIn" }, { src: iconInstagram, label: "Instagram" }, { src: iconFacebook, label: "Facebook" }].map(
            (social) => (
              <a
                key={social.label}
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-slate-700 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label={social.label}
              >
                <img src={social.src} alt={social.label} className="h-4 w-4 object-contain" />
              </a>
            ),
          )}
        </div>
      </div>

      {/* Column 2: Our Services - Removed dot from heading */}
      <div className="relative group">
        <h3 className="font-bold text-slate-900 mb-4 relative text-sm">
          Our Services
        </h3>
        <ul className="space-y-2 text-xs">
          {[
            "Shipping",
            "Freight Forwarding",
            "Port Handling",
            "Warehousing",
            "Transportation",
            "Customs Clearance"
          ].map((item) => (
            <li key={item}>
              <a
                href="#services"
                className="flex items-center gap-2 transition-all duration-300 hover:translate-x-1 hover:text-red-600 group/item"
              >
                <span className="text-red-600 font-bold text-xs transition-transform duration-300 group-hover/item:translate-x-1">›</span>
                <span>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 3: Quick Links - Removed dot from heading and removed CEO */}
      <div className="relative group">
        <h3 className="font-bold text-slate-900 mb-4 relative text-sm">
          Quick Links
        </h3>
        <ul className="space-y-2 text-xs">
          {[
            { label: "Home", href: "#" },
            { label: "Our Services", href: "#services" },
            { label: "About us", href: "#about" },
            { label: "Contact us", href: "#contact" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <li key={link.label} className="flex items-center gap-2 transition-all duration-300 
              hover:translate-x-1 hover:text-red-600 group/item">
              <span className="text-red-600 font-bold text-xs transition-transform duration-300 
                group-hover/item:translate-x-1">›</span>
              <a href={link.href} className="hover:underline">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Column 4: Contact Us - Removed dot from heading */}
      <div className="relative group">
        <h3 className="font-bold text-slate-900 mb-4 relative text-sm">
          Contact Us
        </h3>
        <ul className="space-y-3 text-xs">
          <li className="flex items-start gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <div className="relative mt-0.5">
              <img src={iconLocation} alt="" className="h-4 w-4 transition-all duration-300 
                group-hover/item:scale-110 group-hover/item:rotate-6" />
            </div>
            <span>Bole Rwanda Embassy road</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconPhone} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Tel: +251115 528080</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconMobile} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Mob: +251911 516478</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconEmail} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Email: gize@gizeplc.com</span>
          </li>
          <li className="flex items-center gap-3 transition-all duration-300 hover:text-red-600 group/item">
            <img src={iconTime} alt="" className="h-3 w-3 transition-all duration-300 
              group-hover/item:scale-110 group-hover/item:rotate-6" />
            <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-4 border-t border-slate-300 bg-[#C0C0C0]
    py-3 text-center text-xs text-slate-700 relative overflow-hidden">
    
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
      -translate-x-full animate-shimmer"></div>
    
    <div className="relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
        <span>© {new Date().getFullYear()} Gize Plc. All Rights Reserved.</span>
        <div className="flex gap-4 mt-1 md:mt-0">
          <a href="#" className="hover:text-red-600 transition-colors duration-300 text-xs">Privacy Policy</a>
          <a href="#" className="hover:text-red-600 transition-colors duration-300 text-xs">Terms of Service</a>
          <a href="#" className="hover:text-red-600 transition-colors duration-300 text-xs">Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}