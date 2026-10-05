import {
  ArrowRight,
  Mail,
  Phone,
  Sparkles,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { companyDetails, coreServices, partners } from '../data/content';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="footer-container-wrap">
      {/* Top Value Strip */}
      <div className="footer-banner-strip">
        <div className="container banner-inner">
          <div className="banner-left">
            <Sparkles size={16} className="banner-sparkle" />
            <span>
              <strong>Success is not a service. It is a partnership:</strong> Websites, apps, and digital marketing for your business.
            </span>
          </div>
          <button onClick={() => scrollTo('contact')} className="banner-cta-btn">
            <span>Schedule Consultation</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="container footer-main-content">
        {/* Column 1: Brand Logo only & Company mission */}
        <div className="footer-brand-col">
          <a
            href="#home"
            className="footer-logo-link"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
          >
            <img src={logo} alt="ASPL Tech Solutions Private Limited" className="footer-logo-img" />
          </a>

          <p className="footer-tagline-quote">"{companyDetails.quote}"</p>

          <p className="footer-about-text">
            ASPL Tech Solutions helps businesses build their online presence through web development,
            app development, and digital marketing.
          </p>

          <div className="footer-pills-row">
            <span className="footer-pill">Digital</span>
            <span className="footer-pill">Apps</span>
            <span className="footer-pill">Marketing</span>
          </div>
        </div>

        {/* Column 2: Navigation Links (Partners instead of clients) */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav-list">
            <li>
              <button onClick={() => scrollTo('home')} className="footer-link-btn">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('services')} className="footer-link-btn">
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('about')} className="footer-link-btn">
                About ASPL
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('approach')} className="footer-link-btn">
                Our Approach
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('partners')} className="footer-link-btn">
                Official Partners
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo('contact')} className="footer-link-btn">
                Contact & Map
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Core Capabilities & Partners */}
        <div className="footer-col">
          <h4 className="footer-col-title">Core Services</h4>
          <ul className="footer-nav-list">
            {coreServices.map((service) => (
              <li key={service.id}>
                <button onClick={() => scrollTo('services')} className="footer-link-btn">
                  {service.title}
                </button>
              </li>
            ))}
          </ul>

          <h5 className="footer-sub-title" style={{ marginTop: '22px' }}>Official Partners</h5>
          <ul className="footer-nav-list">
            {partners.map((p) => (
              <li key={p.id}>
                <button onClick={() => scrollTo('partners')} className="footer-link-btn partner-sublink">
                  {p.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Bengaluru Headquarters Contact */}
        <div className="footer-col">
          <h4 className="footer-col-title">Headquarters</h4>
          <div className="footer-contact-block">
            <a
              href={companyDetails.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-address-link"
              title="Click to view ASPL office on Google Maps"
            >
              <MapPin size={18} className="footer-contact-icon orange" />
              <div>
                <small>Singasandra, Bengaluru Office</small>
                <p>{companyDetails.address}</p>
                <span className="open-maps-text">Open Google Maps ↗</span>
              </div>
            </a>

            <a href={`tel:${companyDetails.rawPhone}`} className="footer-contact-link">
              <Phone size={16} className="footer-contact-icon cyan" />
              <div>
                <small>Phone / WhatsApp</small>
                <strong>{companyDetails.phone}</strong>
              </div>
            </a>

            <a href={`mailto:${companyDetails.email}`} className="footer-contact-link">
              <Mail size={16} className="footer-contact-icon orange" />
              <div>
                <small>Direct Email</small>
                <strong>{companyDetails.email}</strong>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p>© {currentYear} {companyDetails.legalName}. All rights reserved.</p>
          <p className="bottom-location-stamp">Headquarters: Singasandra, Bengaluru, Karnataka 560100</p>
        </div>
      </div>
    </footer>
  );
}
