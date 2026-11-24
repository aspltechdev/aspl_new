import { useState } from "react";
import {
  Send,
  Phone,
  Mail,
  Clock3,
} from "lucide-react";
import "./ContactSection.css";
import careerImage from "../assets/careerhero1.png";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/leads`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.projectType,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus(
        "Thank you! Your request has been submitted successfully."
      );

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact submission error:", error);
      setStatus(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
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
      <section
        className="contact-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(0, 15, 38, 0.95) 0%,
              rgba(0, 24, 51, 0.82) 45%,
              rgba(0, 24, 51, 0.35) 100%
            ),
            url(${careerImage})
          `,
        }}
      >
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
            <a
              href="#contact-form"
              className="contact-btn contact-btn-primary"
            >
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
          For the final website, add the verified Google Maps embed
          for the current ASPL office location.
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
      <section
        className="contact-process-section"
        id="contact-form"
      >
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

                <option value="UI/UX Design">
                  UI/UX Design
                </option>

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

            {status && (
              <p
                role="status"
                className="contact-form-status"
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="contact-btn contact-btn-primary contact-submit-btn"
            >
              {loading ? "Submitting..." : "Submit Request"}
              <Send size={17} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;