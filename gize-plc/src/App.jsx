import { useEffect, useState } from "react";

import Homepage from "./Homepage.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import FAQ from "./FAQ.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  let normalizedHash = (hash || "").trim();
  try {
    normalizedHash = decodeURIComponent(normalizedHash);
  } catch {
    // ignore decode errors
  }
  normalizedHash = normalizedHash.toLowerCase();

  useEffect(() => {
    // Dark mode was removed; ensure no stale state remains (especially during HMR).
    try {
      document.documentElement.classList.remove("dark");
      window.localStorage.removeItem("theme");
    } catch {
      // no-op
    }
  }, [hash]);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (normalizedHash === "#contact") return <Contact />;
  if (normalizedHash === "#faq") return <FAQ />;
  if (normalizedHash === "#services") return <Services />;
  if (normalizedHash === "#about" || normalizedHash === "#about-us" || normalizedHash === "#aboutus") return <About />;
  return <Homepage />;
}
