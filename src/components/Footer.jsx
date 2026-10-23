// src/components/Footer.jsx

import React from "react";
import { ArrowUp, ChevronUp } from "lucide-react";
import "./Footer.css";
import asplLogo from "../assets/asplfooterlogo.png";

const Footer = () => {
  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ];

  const serviceLinks = [
    { label: "Web Development", href: "#services" },
    { label: "App Development", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Podcast & Creator Studio", href: "#services" },
  ];

  return (
    <footer className="aspl-footer">
      <div className="aspl-footer-inner">
        <div className="aspl-footer-main">
          {/* Company logo and description */}
          <div className="aspl-footer-brand">
            <a href="#home" className="aspl-footer-logo">
              <img
                src={asplLogo}
                alt="ASPL Tech Solutions Private Limited"
                loading="lazy"
              />
            </a>

            <p>
              ASPL Tech Solution empowers businesses through innovative
              technology, digital transformation, and industry-focused training
              to build a smarter digital future.
            </p>
          </div>

          {/* Company links */}
          <div className="aspl-footer-column">
            <h3>COMPANY</h3>

            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div className="aspl-footer-column">
            <h3>SERVICES</h3>

            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div className="aspl-footer-social">
            <h3>FOLLOW US</h3>

            <div className="aspl-social-links">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                ▶
              </a>
            </div>
          </div>
        </div>

        <div className="aspl-footer-bottom">
          <p>
            © 2024 ASPL Tech Solutions Private Limited. All rights reserved.
          </p>

          <div className="aspl-footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="aspl-footer-separator">|</span>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
          </div>
        </div>

        <button
          type="button"
          className="aspl-back-to-top"
          aria-label="Back to top"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <ChevronUp size={29} strokeWidth={1.8} />
          <ChevronUp size={29} strokeWidth={1.8} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;