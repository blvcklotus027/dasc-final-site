// src/App.jsx
import { Routes, Route, NavLink, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Apartments from "./pages/Apartments";
import Construction from "./pages/Construction";
import Contact from "./pages/Contact";
import Quality from "./pages/Quality";

function Layout() {
  const baseLink =
    "whitespace-nowrap uppercase tracking-[0.14em] sm:tracking-[0.18em] text-[10px] sm:text-xs md:text-sm transition-colors";
  const active = "text-primaryGold";
  const inactive = "text-gray-300 hover:text-white";

  const linkClass = ({ isActive }) =>
    `${baseLink} ${isActive ? active : inactive}`;

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 h-14 sm:h-16">
          {/* LOGO */}
          <NavLink
            to="/"
            className="font-semibold tracking-wide text-sm sm:text-base"
          >
            <span className="text-primaryGold">DASC</span> Family Residence
          </NavLink>

          {/* MENIU */}
          <nav className="flex items-center gap-3 sm:gap-4 md:gap-6 overflow-x-auto">
            <NavLink to="/" className={linkClass}>
              Acasă
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              Despre
            </NavLink>
            <NavLink to="/apartamente" className={linkClass}>
              Apartamente
            </NavLink>
            <NavLink to="/santier" className={linkClass}>
              Șantier
            </NavLink>
            <NavLink to="/calitate" className={linkClass}>
              Calitate
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </nav>
        </div>
      </header>

      {/* CONȚINUT PAGINI */}
      <main className="pt-14 sm:pt-16 flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apartamente" element={<Apartments />} />
        <Route path="/santier" element={<Construction />} />
        <Route path="/calitate" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
