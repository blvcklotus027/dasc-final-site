import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass =
    "px-4 py-2 text-sm font-medium text-gray-100 hover:text-primaryGold transition";

  const activeClass =
    "px-4 py-2 text-sm font-medium text-primaryGold border-b-2 border-primaryGold";

  return (
    <header className="fixed top-0 left-0 w-full bg-darkGray shadow-md z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold text-primaryGold">
          DASC Family Residence
        </h1>

        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Acasă
          </NavLink>

          <NavLink
            to="/despre"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Despre
          </NavLink>

          <NavLink
            to="/apartamente"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Apartamente
          </NavLink>

          <NavLink
            to="/santier"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Șantier
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeClass : linkClass)}
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
