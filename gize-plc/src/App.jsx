import { useEffect, useState } from "react";

import Homepage from "./Homepage.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import FAQ from "./FAQ.jsx";
import Contact from "./Contact.jsx";

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (hash === "#contact") return <Contact />;
  if (hash === "#faq") return <FAQ />;
  if (hash === "#services") return <Services />;
  if (hash === "#about") return <About />;
  return <Homepage />;
}
