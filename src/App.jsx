// src/App.jsx
import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sectionIds = ["hero", "about", "apartments", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let closestId = "hero";
      let minDistance = Infinity;

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const distance = Math.abs(top - (scrollY + 120));
        if (distance < minDistance) {
          minDistance = distance;
          closestId = id;
        }
      });

      setActiveSection(closestId);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const navLinkClass = (id) =>
    [
      "whitespace-nowrap uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[10px] sm:text-xs md:text-sm transition-colors",
      activeSection === id
        ? "text-primaryGold"
        : "text-gray-300 hover:text-white",
    ].join(" ");

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* NAVBAR FIX + TITLU */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
        {/* rând cu meniul */}
        <div className="max-w-6xl mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8 h-14 sm:h-16">
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto">
            <button
              onClick={scrollToSection("hero")}
              className={navLinkClass("hero")}
            >
              Acasă
            </button>
            <button
              onClick={scrollToSection("about")}
              className={navLinkClass("about")}
            >
              Despre
            </button>
            <button
              onClick={scrollToSection("apartments")}
              className={navLinkClass("apartments")}
            >
              Apartamente
            </button>
            <button
              onClick={scrollToSection("contact")}
              className={navLinkClass("contact")}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* rând cu titlul DASC */}
        <div className="border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-center">
            <button
              onClick={scrollToSection("hero")}
              className="font-semibold tracking-[0.25em] sm:tracking-[0.35em] text-xs sm:text-sm md:text-base text-gray-100"
            >
              <span className="text-primaryGold">DASC</span> FAMILY RESIDENCE
            </button>
          </div>
        </div>
      </header>

      {/* conținut – toate secțiunile în Home */}
      <main className="pt-24 sm:pt-28 flex-1">
        <Home />
      </main>
    </div>
  );
}
