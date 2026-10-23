
// src/components/Navbar.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import logo from "../assets/logoo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="aspl-header">
      <div className="aspl-navbar">
        {/* Company Logo */}
        <Link
          to="/"
          className="aspl-logo"
          onClick={closeMenu}
          aria-label="ASPL Home"
        >
          <img
            src={logo}
            alt="ASPL Tech Solutions Private Limited"
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="aspl-menu-toggle"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="aspl-main-navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* Navigation Links */}
        <nav
          id="aspl-main-navigation"
          className={`aspl-nav-links ${menuOpen ? "active" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const isActive = location.pathname === link.href;

            return (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={isActive ? "active-link" : ""}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="aspl-connect-btn"
          onClick={closeMenu}
        >
          Let's Connect <ArrowRight size={17} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
