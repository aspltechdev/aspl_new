
import { useState } from "react";
import {
  ArrowRight,
  Send,
  Phone,
  Mail,
  Clock3,
  MapPin,
} from "lucide-react";
import "./ContactSection.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend or email service when ready.
    console.log("Contact form submission:", formData);
    alert("Thank you! Your request has been captured.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9688941297",
      href: "tel:+919688941297",
    },
    {
      icon: Mail,
      title: "Email",
      content: "Yari.Innovative@gmail.com",
      href: "mailto:Yari.Innovative@gmail.com",
    },
    {
      icon: Clock3,
      title: "RESPONSE",
      content: "We Usually Respond Within 1 Business Day",
      href: null,
    },
  ];

  const responseSteps = [
    "Share Your Project Goals And Current Challenges.",
    "Get A Practical Consultation With Suggested Next Steps.",
    "Move Into Design, Development, Integration, Or Support.",
  ];

  return (
    <div className="contact-page">
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-eyebrow">
            START A CONVERSATION
          </span>

          <h1>
            Speak With a Specialist
            <br />
            For Your <span>Digital Needs</span>
          </h1>

          <p>
            Connect with ASPL Tech Solutions for software development,
            web and mobile applications, digital marketing, UI/UX
            design, custom business solutions, and dependable
            technical support.
          </p>

          <div className="contact-hero-actions">
            <a href="#contact-form" className="contact-btn contact-btn-primary">
              Send Your Requirement <Send size={18} />
            </a>

            <a
              href="tel:+919688941297"
              className="contact-btn contact-btn-secondary"
            >
              <Phone size={17} fill="currentColor" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="contact-info-section">
        <div className="contact-info-grid">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div className="contact-info-card" key={card.title}>
                <div className="contact-info-icon">
                  <Icon size={26} />
                </div>

                <div className="contact-info-text">
                  <h3>{card.title}</h3>

                  {card.href ? (
                    <a href={card.href}>{card.content}</a>
                  ) : (
                    <p>{card.content}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Office Location */}
      <section className="contact-location-section">
        <span className="contact-section-label">LOCATION</span>

        <h2>Bengaluru, Karnataka, India</h2>

        <p className="contact-location-description">
          For the final website, add the verified Google Maps embed for the current ASPL office location.
        </p>

        <div className="contact-map">
          <iframe
            title="Map of Bengaluru, Karnataka"
            src="https://maps.google.com/maps?q=Bengaluru%2C%20Karnataka%2C%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      {/* Response Process and Form */}
      <section className="contact-process-section" id="contact-form">
        <div className="contact-process-card">
          <h2>How We Respond</h2>

          <h3>
            Clear Conversations
            <br />
            Before Clean Delivery.
          </h3>

          <p>
            We start by understanding your business process,
            immediate pain points, timeline, and the result you
            want your users to experience.
          </p>

          <div className="contact-response-steps">
            {responseSteps.map((step, index) => (
              <div className="contact-response-step" key={step}>
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-card">
          <span className="contact-section-label">
            SEND A MESSAGE
          </span>

          <h2>Tell Us What You Need.</h2>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />

              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Project type
                </option>
                <option value="Software Development">
                  Software Development
                </option>
                <option value="Web Development">
                  Web Development
                </option>
                <option value="App Development">
                  App Development
                </option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Digital Marketing">
                  Digital Marketing
                </option>
                <option value="Podcast & Creator Studio">
                  Podcast & Creator Studio
                </option>
                <option value="Other">Other</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your requirement"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
            />

            <p className="contact-form-note">
              This site is protected by reCAPTCHA.
            </p>

            <button
              type="submit"
              className="contact-btn contact-btn-primary contact-submit-btn"
            >
              Submit Request <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
