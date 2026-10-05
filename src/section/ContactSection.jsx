import { useEffect, useState } from 'react';
import { CheckCircle2, MapPin, Mail, Phone, ExternalLink, Send } from 'lucide-react';
import { companyDetails } from '../data/content';
import './ContactSection.css';

export default function ContactSection({ selectedService, onServiceChange }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => { setSubmitted(false); }, [selectedService]);
  const handleInputChange = (event) => setForm((previous) => ({ ...previous, [event.target.name]: event.target.value }));
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Project Enquiry: ${form.name} [${selectedService}]`);
    const bodyText = encodeURIComponent(`ASPL Tech Solutions Project Enquiry:\n\nFull Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nCompany: ${form.company}\nService: ${selectedService}\n\nProject Requirements:\n${form.message}`);
    window.location.href = `mailto:${companyDetails.email}?subject=${subject}&body=${bodyText}`;
    setSubmitted(true);
  };

  return (
<section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">
              <span className="badge-dot" />
              <span>HEADQUARTERS & CONTACT</span>
            </div>
            <h2 className="section-title">
              Let's Build Something <span className="text-gradient-orange">Exceptional Together</span>
            </h2>
            <p className="section-subtitle">
              Bring your digital vision to life. Contact ASPL Tech Solutions to map out your next website, app, or digital marketing campaign. Get in touch today for a strategic consultation focused on your goals.
            </p>
          </div>

          <div className="contact-main-grid">
            {/* Left Column: Direct Channels & Interactive Bengaluru Map */}
            <div className="contact-info-col">
              <div className="contact-channel-card">
                <div className="channel-icon-box orange">
                  <Phone size={22} />
                </div>
                <div className="channel-text">
                  <small>Call or WhatsApp</small>
                  <a href={`tel:${companyDetails.rawPhone}`} className="channel-link">
                    <strong>{companyDetails.phone}</strong>
                  </a>
                  <span>Mon – Sat: 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>

              <div className="contact-channel-card">
                <div className="channel-icon-box cyan">
                  <Mail size={22} />
                </div>
                <div className="channel-text">
                  <small>Direct Email</small>
                  <a href={`mailto:${companyDetails.email}`} className="channel-link">
                    <strong>{companyDetails.email}</strong>
                  </a>
                  <span>Quick response within 24 hours</span>
                </div>
              </div>

              {/* Singasandra, Bengaluru Office Map Card */}
              <div className="contact-office-map-card">
                <div className="office-card-header">
                  <div className="channel-icon-box cyan">
                    <MapPin size={22} />
                  </div>
                  <div className="office-header-meta">
                    <small>Office Address</small>
                    <p className="office-address-text">{companyDetails.address}</p>
                  </div>
                  <a
                    href={companyDetails.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="office-map-direct-btn"
                    title="Open Singasandra office in Google Maps"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Fully clickable map frame: clicking anywhere opens exact ASPL Google Maps link */}
                <a
                  href={companyDetails.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive-map-anchor"
                  title="Click to open exact location of ASPL Tech Solutions in Singasandra, Bengaluru on Google Maps"
                >
                  <div className="interactive-map-stage">
                    <iframe
                      src={companyDetails.embedMapUrl}
                      width="100%"
                      height="210"
                      style={{ border: 0, borderRadius: '16px', pointerEvents: 'none' }}
                      loading="lazy"
                      title="ASPL Tech Solutions Bengaluru Headquarters Map"
                    />
                    <div className="map-click-overlay-pill">
                      <MapPin size={14} className="map-pin-pulse" />
                      <span>📍 Singasandra, Bengaluru · Click to Open in Google Maps</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: High-End Contact Form */}
            <div className="contact-form-col">
              <div className="contact-form-card">
                <div className="form-heading-area">
                  <h3>Tell us about your project</h3>
                  <p>Share your vision and requirements. We'll respond with actionable insights.</p>
                </div>

                {submitted ? (
                  <div className="form-submission-success">
                    <CheckCircle2 size={44} className="success-check-icon" />
                    <h4>Thank You, {form.name}!</h4>
                    <p>
                      Your enquiry has been prepared and opened in your email client addressed to{' '}
                      <strong>{companyDetails.email}</strong>. We look forward to learning more about your project.
                    </p>
                    <button
                      className="btn-primary-pill"
                      style={{ marginTop: '16px' }}
                      onClick={() => setSubmitted(false)}
                    >
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="modern-contact-form">
                    <div className="form-fields-grid-2">
                      <div className="form-field-group">
                        <label className="field-label">Full Name *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. Anand Kumar"
                          className="modern-input"
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="field-label">Work Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. anand@company.com"
                          className="modern-input"
                        />
                      </div>
                    </div>

                    <div className="form-fields-grid-2">
                      <div className="form-field-group">
                        <label className="field-label">Phone / WhatsApp *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. +91 98765 43210"
                          className="modern-input"
                        />
                      </div>

                      <div className="form-field-group">
                        <label className="field-label">Company / Brand</label>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleInputChange}
                          placeholder="e.g. Tech Corp"
                          className="modern-input"
                        />
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">Primary Service Needed *</label>
                      <select
                        name="service"
                        value={selectedService}
                        onChange={(event) => onServiceChange(event.target.value)}
                        className="modern-select"
                      >
                        <option value="Web Development">Web Development (Corporate & Web Portals)</option>
                        <option value="Applications Development">App Development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="All 3 Integrated">Integrated Package (Web + App + Marketing)</option>
                      </select>
                    </div>

                    <div className="form-field-group">
                      <label className="field-label">Project Details & Objectives *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Tell us about your project, timeline, and goals..."
                        className="modern-textarea"
                      />
                    </div>

                    <button type="submit" className="form-submit-pill-btn">
                      <span>Send Project Enquiry</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
  </section>
  );
}
