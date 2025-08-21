import React, { useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Container from "../ui/Container";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 ">
      <Container>
        <nav className="flex items-center justify-between py-4 ">
          {/* Logo */}
          <Link to="/">
            <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">
              <span className="text-[var(--color-primary)]">G</span>reen
              <span className="text-[var(--color-primary)]">B</span>asket
            </h1>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center space-x-8 font-medium">
            {["Home", "About", "Contact", "Process"].map((item, i) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={i}>
                  <NavLink to={path} className="navlink">
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Search bar (tablet + desktop) */}
          <div className="hidden lg:flex items-center border border-[var(--color-secondary)] p-1 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search groceries..."
              autoComplete="off"
              className="px-3 py-2 w-40 md:w-56 text-sm flex-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] text-white flex items-center justify-center text-xl h-9 w-9 md:h-10 md:w-10 rounded-full">
              <FiSearch />
            </button>
          </div>

          {/* Actions + Hamburger */}
          <div className="flex items-center space-x-6 text-[var(--color-secondary)]">
            {/* Favorites + Cart (always visible) */}
            <NavLink
              to="/favorites"
              className="text-2xl hover:text-[var(--color-primary)] transition"
            >
              <GoHeartFill />
            </NavLink>
            <NavLink
              to="/cart"
              className="text-2xl hover:text-[var(--color-primary)] transition"
            >
              <HiShoppingBag />
            </NavLink>

            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl focus:outline-none"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </Container>
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--color-secondary)]/20 backdrop-blur-xl border-t border-gray-200 px-6 py-4 space-y-4 shadow-md z-40">
          <ul className="flex flex-col space-y-4 font-medium">
            {["Home", "About", "Contact", "Process"].map((item, i) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={i}>
                  <NavLink
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={"navlink"}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/* Mobile search bar */}
          <div className="flex items-center border border-[var(--color-secondary)] p-1 rounded-full">
            <input
              type="text"
              placeholder="Search groceries..."
              autoComplete="off"
              className="px-4 py-2 w-full text-sm focus:outline-none"
            />
            <button className="bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] text-white flex items-center justify-center text-xl h-10 w-10 rounded-full">
              <FiSearch />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
