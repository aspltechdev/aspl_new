
import React from "react";
import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
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
    { label: "Web Development", href: "/services" },
    { label: "App Development", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "Digital Marketing", href: "/services" },
    { label: "Podcast & Creator Studio", href: "/services" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      Icon: FaLinkedin,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      Icon: FaInstagram,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/",
      Icon: FaYoutube,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="aspl-footer">
      <div className="aspl-footer-inner">
        <div className="aspl-footer-main">
          {/* Logo and description */}
          <div className="aspl-footer-brand">
            <Link to="/" className="aspl-footer-logo">
              <img
                src={asplLogo}
                alt="ASPL Tech Solutions Private Limited"
                loading="lazy"
              />
            </Link>

            <p>
              ASPL Tech Solution empowers businesses through innovative
              technology, digital transformation, and industry-focused
              training to build a smarter digital future.
            </p>
          </div>

          {/* Company links */}
          <div className="aspl-footer-column">
            <h3>COMPANY</h3>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href}>{link.label}</Link>
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
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social media */}
          <div className="aspl-footer-social">
            <h3>FOLLOW US</h3>

            <div className="aspl-social-links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="aspl-footer-bottom">
          <p>
            © 2024 ASPL Tech Solutions Private Limited. All rights reserved.
          </p>

          <div className="aspl-footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="aspl-footer-separator">|</span>
            <Link to="/terms-and-conditions">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        {/* Back to top */}
        <button
          type="button"
          className="aspl-back-to-top"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <ChevronUp size={29} strokeWidth={1.8} />
          <ChevronUp size={29} strokeWidth={1.8} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
