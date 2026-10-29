
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Mic,
  TrendingUp,
  Check,
  LayoutGrid,
  PanelsTopLeft,
  Braces,
  Plus,
  Minus,
} from "lucide-react";

import "./ServicesSection.css";

import softwareImage from "../assets/3rdservice.png";
import marketingImage from "../assets/1stservice.png";
import creatorImage from "../assets/2ndservice.png";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software, web applications and scalable technology solutions that fit your business needs and technical workflows.",
    id: "software",
    href: "#software-development",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing to increase visibility, engagement and measurable growth through performance-driven channels.",
    id: "marketing",
    href: "#digital-marketing",
  },
  {
    icon: Mic,
    title: "Podcast & Creator Studio",
    description:
      "Professional studio setups with acoustic treatment, commercial hardware, multi-camera feeds and sound reinforcement.",
    id: "creator",
    href: "#creator-studio",
  },
];

const capabilities = {
  software: [
    {
      icon: Check,
      title: "Custom Web & Cloud Applications",
      description:
        "Modular architectures designed for performance, scalability and reliability.",
    },
    {
      icon: LayoutGrid,
      title: "Business Platforms & Portals",
      description:
        "Internal ERPs, client dashboards and self-service business workflows.",
    },
    {
      icon: Braces,
      title: "API Integrations & Modernization",
      description:
        "Integrations with payment gateways, CRMs and third-party web services.",
    },
    {
      icon: PanelsTopLeft,
      title: "UI/UX Design & Prototyping",
      description:
        "Intuitive interfaces shaped around user needs and customer journeys.",
    },
  ],

  marketing: [
    {
      icon: Check,
      title: "Search Engine Optimization",
      description:
        "Improve search visibility and help potential customers discover your business.",
    },
    {
      icon: TrendingUp,
      title: "Analytics & Performance Reporting",
      description:
        "Measure campaign performance and use data to improve results.",
    },
    {
      icon: Braces,
      title: "Paid Advertising & Campaigns",
      description:
        "Plan and optimize targeted campaigns around your business objectives.",
    },
    {
      icon: PanelsTopLeft,
      title: "Social Media & Content Marketing",
      description:
        "Build brand awareness and engagement through relevant content.",
    },
  ],

  creator: [
    {
      icon: Mic,
      title: "Podcast Recording",
      description:
        "Professional recording environments for creators and podcast hosts.",
    },
    {
      icon: LayoutGrid,
      title: "Video Production",
      description:
        "Multi-camera production for interviews, podcasts and digital content.",
    },
    {
      icon: Check,
      title: "Audio Setup",
      description:
        "Quality audio equipment and recording workflows.",
    },
    {
      icon: PanelsTopLeft,
      title: "Creator Workspace",
      description:
        "Studio facilities designed for professional content creation.",
    },
  ],
};

const specializedContent = {
  software: {
    label: "CORE ENGINEERING",
    title: "Technology designed around",
    highlight: "real business needs.",
    description:
      "We build custom software, web applications and digital platforms that solve complex business challenges. Our approach combines clean architecture, modern technologies and a focus on usability, performance and long-term scalability.",
    tags: [
      "Microservices",
      "Next.js & TypeScript",
      "Cloud Native AWS",
      "99.9% Uptime SLA",
    ],
    image: softwareImage,
    imageLabel: "Active Production Stack",
    imageHeading: "ENTERPRISE ARCHITECTURE",
    imageDescription:
      "Scalable APIs, event-driven queues and distributed clouds",
    imageTech: "React / Go / AWS",
  },

  marketing: {
    label: "DIGITAL MARKETING",
    title: "Digital marketing that drives measurable",
    highlight: "business growth.",
    description:
      "We create data-driven digital marketing strategies that strengthen your brand presence, reach the right audience and turn engagement into meaningful business opportunities. Our approach combines creative campaigns, targeted outreach and performance analytics to support sustainable growth.",
    tags: [
      "Search Engine Optimization",
      "Analytics & Reporting",
      "Paid Advertising",
      "Social Media Marketing",
    ],
    image: marketingImage,
    imageLabel: "Measurable Business Growth",
    imageHeading: "DIGITAL GROWTH",
    imageDescription:
      "Data-driven campaigns, audience insights and performance analytics",
    imageTech: "SEO / Analytics / Ads",
  },

  creator: {
    label: "PODCAST & CREATOR STUDIO",
    title: "Spaces designed for impactful",
    highlight: "content creation.",
    description:
      "We provide professional creator studio facilities designed for quality recording, clear audio, multi-camera production and engaging digital content.",
    tags: [
      "Podcast Recording",
      "Multi-Camera Production",
      "Audio & Video Setup",
      "Content Production",
    ],
    image: creatorImage,
    imageLabel: "Active Production Stack",
    imageHeading: "CREATOR STUDIO",
    imageDescription:
      "Professional recording, audio production and multi-camera workflows",
    imageTech: "Audio / Video / Studio",
  },
};

const faqItems = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with startups, small and medium-sized businesses, and established organisations looking for technology, marketing and content production solutions.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines depend on your requirements and the complexity of the project. We discuss the estimated timeline before starting.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Ongoing support and maintenance options can be discussed based on your project requirements.",
  },
  {
    question: "Can you handle development and marketing together?",
    answer:
      "Yes. We provide software development and digital marketing services to help businesses manage both through one team.",
  },
  {
    question: "How do you approach pricing?",
    answer:
      "Pricing depends on the scope, features and deliverables. Contact our team to discuss your requirements.",
  },
  {
    question: "What is included in a podcast studio setup?",
    answer:
      "Studio services can include podcast recording, video production, audio setup and creator workspace facilities.",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("software");
  const activeContent = specializedContent[activeService];
  const activeCapabilities = capabilities[activeService];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="services-page">
      {/* HERO */}
      <section className="services-hero" id="services">
        <div className="services-hero-inner">
          <div className="services-hero-content">
            <span className="services-hero-eyebrow">
              OUR EXPERTISE
            </span>

            <h1>
              Technology solutions
              <br />
              for <span>real business impact.</span>
            </h1>

            <p>
              From custom software to digital marketing and creator
              studio setups, we deliver end-to-end solutions that help
              businesses grow, operate efficiently and communicate
              with confidence.
            </p>

            <div className="services-hero-actions">
              <button
                type="button"
                className="services-hero-primary"
                onClick={() => scrollTo("contact")}
              >
                Discuss Your Project
                <ArrowRight size={20} />
              </button>

              <button
                type="button"
                className="services-hero-secondary"
                onClick={() => scrollTo("core-services")}
              >
                See Our Services
                <ChevronDown size={19} />
              </button>
            </div>
          </div>

          <div className="services-hero-visual">
            <div className="services-hero-image-frame">
              <img
                src={softwareImage}
                alt="Technology solutions workspace"
              />
            </div>

            <div className="services-floating-card services-floating-software">
              <span className="services-floating-icon software-icon">
                <Code2 size={21} />
              </span>
              <span>
                <strong>Software</strong>
                <small>Development</small>
              </span>
            </div>

            <div className="services-floating-card services-floating-marketing">
              <span className="services-floating-icon marketing-icon">
                <TrendingUp size={21} />
              </span>
              <span>
                <strong>Digital</strong>
                <small>Marketing</small>
              </span>
            </div>

            <div className="services-floating-card services-floating-creator">
              <span className="services-floating-icon creator-icon">
                <Mic size={21} />
              </span>
              <span>
                <strong>Creator</strong>
                <small>Studio Setup</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE SERVICES */}
      <section className="core-services-section" id="core-services">
        <div className="services-container">
          <div className="core-services-heading">
            <div>
              <span className="section-eyebrow">WHAT WE OFFER</span>
              <h2>
                Three core services.
                <br />
                Built for enterprise impact.
              </h2>
              <p>
                End-to-end solutions across software engineering,
                performance marketing and professional studio setups.
              </p>
            </div>

            <p className="core-services-note">
              Different business goals, one connected approach. We
              combine technology, creativity and strategy to help brands
              grow.
            </p>
          </div>

          <div className="core-services-grid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article className="core-service-card" key={service.id}>
                  <div className="core-service-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <button
                    type="button"
                    className="core-service-link"
                    onClick={() => {
                      setActiveService(service.id);
                      scrollTo("specialized-capabilities");
                    }}
                  >
                    Explore <ArrowRight size={16} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZED CAPABILITIES */}
      <section
        className="specialized-section"
        id="specialized-capabilities"
      >
        <div className="services-container">
          <div className="specialized-heading">
            <span className="specialized-eyebrow">
              <span />
              SPECIALIZED CAPABILITIES
            </span>

            <h2>
              Engineering, Growth &amp; Content
              <br />
              Infrastructure.
            </h2>

            <p>
              Select a specialized practice below to explore our
              engineering, marketing and content production services.
            </p>

            <div
              className="specialized-tabs"
              role="tablist"
              aria-label="Specialized services"
            >
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={activeService === service.id}
                  className={`specialized-tab ${
                    activeService === service.id ? "active" : ""
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  {String(index + 1).padStart(2, "0")}{" "}
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          <div className="specialized-layout">
            {/* LEFT BLUE PANEL */}
            <div className="specialized-feature" key={activeService}>
              <span className="specialized-feature-label">
                {activeContent.label}
              </span>

              <h3>
                {activeContent.title}{" "}
                <span>{activeContent.highlight}</span>
              </h3>

              <p>{activeContent.description}</p>

              <h4>KEY DELIVERABLES &amp; TECH</h4>

              <div className="technology-tags">
                {activeContent.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="specialized-feature-actions">
                <button
                  type="button"
                  onClick={() => scrollTo("contact")}
                >
                  Discuss a Project <ArrowRight size={17} />
                </button>

                <button
                  type="button"
                  className="secondary-feature-button"
                  onClick={() => scrollTo("core-services")}
                >
                  Review Work
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE AND CAPABILITIES */}
            <div
              className="specialized-right"
              key={`${activeService}-right`}
            >
              <div className="specialized-image">
                <img
                  src={activeContent.image}
                  alt={`${activeContent.label} workspace`}
                />

                <div className="active-production-label">
                  <span className="production-status-dot" />
                  {activeContent.imageLabel}
                </div>

                {/* Show the image caption only for Podcast & Creator Studio */}
                {activeService === "creator" && (
                  <div className="specialized-image-caption">
                    <div className="specialized-image-caption-content">
                      <strong>{activeContent.imageHeading}</strong>
                      <p>{activeContent.imageDescription}</p>
                    </div>

                    <span className="specialized-image-tech">
                      {activeContent.imageTech}
                    </span>
                  </div>
                )}
              </div>

              <div className="specialized-capabilities-grid">
                {activeCapabilities.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      className="specialized-capability-card"
                      key={item.title}
                    >
                      <div className="specialized-capability-icon">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </main>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="aspl-faq" id="faq">
      <div className="aspl-faq-inner">
        <div className="aspl-faq-intro">
          <span className="aspl-faq-label">FAQ</span>
          <h2>Questions before getting started.</h2>

          <p>
            Quick answers to common questions about our services,
            process and project engagement. Have an inquiry not covered
            here? Reach out directly.
          </p>

          <a href="/contact" className="aspl-faq-contact">
            Have a specific technical question? Speak with our team →
          </a>
        </div>

        <div className="aspl-faq-list">
          {faqItems.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                className={`aspl-faq-item ${isOpen ? "open" : ""}`}
                key={faq.question}
              >
                <button
                  type="button"
                  className="aspl-faq-question"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span>{faq.question}</span>

                  {isOpen ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </button>

                {isOpen && (
                  <div className="aspl-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
