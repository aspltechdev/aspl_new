
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Mic,
  TrendingUp,
  Check,
  LayoutGrid,
  Grid2X2,
  SquareTerminal,
  PanelsTopLeft,
  Braces,
  Megaphone,
  Plus,
  Minus,
} from "lucide-react";
import "./ServicesSection.css";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software, web applications and scalable technology solutions that fit your business needs and technical workflows.",
    href: "/services#software-development",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Strategic digital marketing to increase visibility, engagement and measurable growth through high-intent performance channels.",
    href: "/services#digital-marketing",
  },
  {
    icon: Mic,
    title: "Podcast & Creator Studio",
    description:
      "Professional studio setups with the right acoustic treatment, commercial hardware, multi-camera feeds and sound reinforcement.",
    href: "/services#creator-studio",
  },
];

const capabilities = [
  {
    icon: Check,
    title: "Custom Web & Cloud Applications",
    description:
      "Modular architectures designed for high transactional throughput and zero downtime.",
  },
  {
    icon: LayoutGrid,
    title: "Business Platforms & Portals",
    description:
      "Internal ERPs, client dashboards, and mission-critical self-service workflows.",
  },
  {
    icon: Braces,
    title: "API Integrations & Modernization",
    description:
      "Seamless integration with payment gateways, CRMs, and third-party web services.",
  },
  {
    icon: PanelsTopLeft,
    title: "UI/UX Design & Prototyping",
    description:
      "Intuitive digital interaction design validated through customer journey research.",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("software");

  const specializedContent = {
    software: {
      label: "CORE ENGINEERING",
      title: "Technology designed around",
      highlight: "real business needs.",
      description:
        "We build custom software, web applications and digital platforms that solve complex business challenges. Our approach combines clean architecture, modern technologies and a focus on usability, performance and long-term scalability.",
      tags: ["Microservices", "Next.js & TypeScript", "Cloud Native AWS", "99.9% Uptime SLA"],
      image: "/images/hero-technology.png",
      imageLabel: "Active Production Stack",
    },
    marketing: {
      label: "DIGITAL MARKETING",
      title: "Digital marketing that drives measurable",
      highlight: "business growth.",
      description:
        "We create data-driven digital marketing strategies that strengthen your brand presence, reach the right audience, and turn engagement into meaningful business opportunities. Our approach combines creative campaigns, targeted outreach and performance analytics to support sustainable growth.",
      tags: ["Search Engine Optimization", "Analytics & Performance Reporting", "Paid Advertising & Campaigns", "Social Media & Content Marketing"],
      image: "/images/digital-marketing-team.png",
      imageLabel: "Measurable Business Growth.",
    },
creator: {
  label: "PODCAST & CREATOR STUDIO",
  title: "Spaces designed for impactful",
  highlight: "content creation.",
  description:
    "We provide professional creator studio facilities designed for quality recording, clear audio, multi-camera production and engaging digital content.",
  tags: [
    "Custom Web & Cloud Applications",
    "Business Platforms & Portals",
    "API Integrations & Modernization",
    "UI/UX Design & Prototyping",
  ],
  image: "/images/creator-studio.png",
  imageLabel: "Active Production Stack",
},
  };

  const activeContent = specializedContent[activeService];

  const activeCapabilities =
  activeService === "marketing"
    ? [
        {
          icon: Check,
          title: "Custom Web & Cloud Applications",
          description:
            "Modular architectures designed for high transactional throughput and zero downtime.",
        },
        {
          icon: LayoutGrid,
          title: "Business Platforms & Portals",
          description:
            "Internal ERPs, client dashboards, and mission-critical self-service workflows.",
        },
        {
          icon: Braces,
          title: "API Integrations & Modernization",
          description:
            "Seamless integration with payment gateways, CRMs, and third-party web services.",
        },
        {
          icon: PanelsTopLeft,
          title: "UI/UX Design & Prototyping",
          description:
            "Intuitive digital interaction design validated through customer journey research.",
        },
      ]
    : activeService === "creator"
      ? [
          {
          icon: Check,
          title: "Custom Web & Cloud Applications",
          description:
            "Modular architectures designed for high transactional throughput and zero downtime.",
        },
        {
          icon: LayoutGrid,
          title: "Business Platforms & Portals",
          description:
            "Internal ERPs, client dashboards, and mission-critical self-service workflows.",
        },
        {
          icon: Braces,
          title: "API Integrations & Modernization",
          description:
            "Seamless integration with payment gateways, CRMs, and third-party web services.",
        },
        {
          icon: PanelsTopLeft,
          title: "UI/UX Design & Prototyping",
          description:
            "Intuitive digital interaction design validated through customer journey research.",
        },
      ]
      : capabilities;
      const podcastCapabilities = [
  {
    icon: Check,
    title: "Custom Web & Cloud Applications",
    description:
      "Modular architectures designed for high transactional throughput and zero downtime.",
  },
  {
    icon: Grid2X2,
    title: "Business Platforms & Portals",
    description:
      "Internal ERPs, client dashboards, and mission-critical self-service workflows.",
  },
  {
    icon: SquareTerminal,
    title: "API Integrations & Modernization",
    description:
      "Seamless integration with payment gateways, CRMs, and third-party web services.",
  },
  {
    icon: PanelsTopLeft,
    title: "UI/UX Design & Prototyping",
    description:
      "Intuitive digital interaction design validated through customer journey research.",
  },
];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="services-page">
      {/* SERVICE HERO */}
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
                <ArrowRight size={21} />
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
                src="/images/hero-technology.png"
                alt="Technology and digital solutions workspace"
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
              <span className="section-eyebrow">
                WHAT WE OFFER
              </span>

              <h2>
                Three core services.
                <br />
                Built for enterprise impact.
              </h2>

              <p>
                End-to-end solutions across bespoke software engineering,
                performance marketing and physical studio setups.
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
                <article
                  className="core-service-card"
                  key={service.title}
                  id={
                    service.title === "Software Development"
                      ? "software-development"
                      : service.title === "Digital Marketing"
                        ? "digital-marketing"
                        : "creator-studio"
                  }
                >
                  <div className="core-service-icon">
                    <Icon size={28} />
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <a href={service.href}>
                    Explore <ArrowRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIZED CAPABILITIES */}
      
      <section className="specialized-section">
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
              Select a specialized practice below to explore how we execute
              full-cycle engineering, revenue-focused marketing, and
              broadcast-grade studio facilities.
            </p>

            <div className="specialized-tabs" role="tablist" aria-label="Specialized services">
              <button type="button" role="tab" aria-selected={activeService === "software"} className={`specialized-tab ${activeService === "software" ? "active" : ""}`} onClick={() => setActiveService("software")}>
                01 Software Development
              </button>
              <button type="button" role="tab" aria-selected={activeService === "marketing"} className={`specialized-tab ${activeService === "marketing" ? "active" : ""}`} onClick={() => setActiveService("marketing")}>
                02 Digital Marketing
              </button>
              <button type="button" role="tab" aria-selected={activeService === "creator"} className={`specialized-tab ${activeService === "creator" ? "active" : ""}`} onClick={() => setActiveService("creator")}>
                03 Podcast &amp; Creator Studio
              </button>
            </div>
          </div>

          <div className="specialized-layout" key={activeService}>
            <div className="specialized-feature">
              <span className="specialized-feature-label">{activeContent.label}</span>
              <h3>{activeContent.title} <span>{activeContent.highlight}</span></h3>
              <p>{activeContent.description}</p>
              <h4>KEY DELIVERABLES &amp; TECH</h4>
              <div className="technology-tags">
                {activeContent.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <div className="specialized-feature-actions">
                <button type="button" onClick={() => scrollTo("contact")}>
                  Discuss a Project <ArrowRight size={17} />
                </button>
                <button type="button" onClick={() => scrollTo("core-services")}>Review Work</button>
              </div>
            </div>

            <div className="specialized-right">
              <div className="specialized-image">
                <img src={activeContent.image} alt={activeContent.label} onError={(event) => { event.currentTarget.style.display = "none"; }} />
                <span className="active-production-label">{activeContent.imageLabel}</span>
              </div>
              <div className="capabilities-grid">
                {activeCapabilities.map((capability) => {
                  const Icon = capability.icon;
                  return (
                    <article className="capability-card" key={capability.title}>
                      <div className="capability-icon"><Icon size={23} /></div>
                      <div><h4>{capability.title}</h4><p>{capability.description}</p></div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION - displayed after Specialized Capabilities */}
      <FAQSection />
    </main>
  );
};

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with startups, small and medium-sized businesses, and established organisations looking for technology, marketing, and content production solutions.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines depend on your requirements and the complexity of the project. We discuss the estimated timeline before starting.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes, ongoing support and maintenance options can be discussed based on your project requirements.",
    },
    {
      question: "Can you handle both development and marketing for the same project?",
      answer: "Yes, we provide software development and digital marketing services to help businesses manage both through one team.",
    },
    {
      question: "How do you approach pricing?",
      answer: "Pricing depends on the scope, features, and deliverables. Contact our team to discuss your requirements.",
    },
    {
      question: "What is included in a podcast studio setup?",
      answer: "Our creator studio services can include podcast recording, video production, audio setup, and creator workspace facilities.",
    },
  ];

  return (
    <section className="aspl-faq" id="faq">
      <div className="aspl-faq-inner">
        <div className="aspl-faq-intro">
          <span className="aspl-faq-label">FAQ</span>
          <h2>Questions before getting started.</h2>
          <p>Quick answers to common questions about our services, process and project engagement. Have an inquiry not covered here? Reach out directly.</p>
          <a href="/contact" className="aspl-faq-contact">
            Have a specific technical question? Speak with our team <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="aspl-faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`aspl-faq-item ${isOpen ? "open" : ""}`} key={faq.question}>
                <button type="button" className="aspl-faq-question" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)}>
                  <span>{faq.question}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {isOpen && <div className="aspl-faq-answer"><p>{faq.answer}</p></div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
