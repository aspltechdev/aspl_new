import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import logo from '../assets/logo.png';
import './Navbar.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'approach', label: 'Our Approach' },
  { id: 'partners', label: 'Partners' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'services', 'approach', 'partners', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-pill">
        {/* Brand Logo only (no duplicate text) */}
        <a
          href="#home"
          className="navbar-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          aria-label="ASPL Tech Solutions"
        >
          <img src={logo} alt="ASPL Tech Solutions" className="navbar-logo-img" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-links" aria-label="Main Navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-link-btn ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
              {activeSection === item.id && <span className="nav-active-indicator" />}
            </button>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="navbar-actions">
          <button
            onClick={() => scrollToSection('contact')}
            className="navbar-cta-btn"
          >
            <span>Get in Touch</span>
            <ArrowRight size={15} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className="navbar-mobile-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="mobile-menu-overlay" onClick={() => setOpen(false)}>
          <div className="mobile-menu-card" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <img src={logo} alt="ASPL Tech Solutions" className="mobile-logo-img" />
              <button
                className="mobile-close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-menu-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                  <ArrowRight size={16} />
                </button>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <button
                onClick={() => scrollToSection('contact')}
                className="mobile-cta-btn"
              >
                <span>Book Consultation</span>
                <ArrowRight size={16} />
              </button>
              <p className="mobile-hub-text">Singasandra, Bengaluru · Karnataka</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
