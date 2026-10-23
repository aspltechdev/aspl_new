// src/pages/Home.jsx
import avantLogo from "../assets/avant.png";
import dementeeLogo from "../assets/dementee.png";
import digipondiLogo from "../assets/digipondi.png";
import qesLogo from "../assets/qes.png";
import redbookLogo from "../assets/redbook.png";
import safetyglassLogo from "../assets/safetyglass.png";
import sdfoodsLogo from "../assets/sdfoods.png";
import uvagaiLogo from "../assets/uvagai.jpg";
import firstHomeImage from "../assets/1sthome.png";
import secondHomeImage from "../assets/2ndhome.png";
import thirdHomeImage from "../assets/3rdhome.png";
import fourthHomeImage from "../assets/4thhome.png";
import fifthHomeImage from "../assets/5thhome.png";
import reactHeroImage from "../assets/reacthero.png";
import rameshKumar from "../assets/rameshkumar.png";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Users,
  Rocket,
  Award,
  FileText,
  Lightbulb,
  Code2,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  CalendarDays
} from "lucide-react";
import "./Home.css";

const services = [
  {
    title: "Software Development",
    category: "software",
    image: thirdHomeImage,
  },
  {
    title: "Digital Marketing",
    category: "marketing",
    image: fourthHomeImage,
  },
  {
    title: "Podcast & Creator Studio",
    category: "studio",
    image: fifthHomeImage,
  },
];

const approach = [
  {
    title: "Understand",
    description: "Listen, research and define the right problem.",
    deliverable: "Scope & User Stories",
    icon: FileText,
  },
  {
    title: "Design",
    description: "Create solutions that fit your goals.",
    deliverable: "Wireframes & Prototypes",
    icon: Lightbulb,
  },
  {
    title: "Build",
    description: "Develop with quality and collaboration.",
    deliverable: "Clean Code & QA Tests",
    icon: Code2,
  },
  {
    title: "Improve",
    description: "Support and iterate for long-term value.",
    deliverable: "Analytics & Scale Sprints",
    icon: TrendingUp,
  },
];

const testimonials = [
  {
    quote:
      "Working with ASPL was a great experience. They understood our needs clearly and delivered a solution that made a real difference to our business.",
    name: "Ramesh Kumar",
    role: "Founder, EduCare",
  },
  {
    quote:
      "The team understood our requirements and helped us move forward with a practical, technology-driven solution.",
    name: "Our Client",
    role: "Business Partner",
  },
];

const clientLogos = [
  { name: "Avant Enterprise", image: avantLogo },
  { name: "De Mentee Technologies", image: dementeeLogo },
  { name: "DigiPondi", image: digipondiLogo },
  { name: "QES", image: qesLogo },
  { name: "Redbook", image: redbookLogo },
  { name: "Safety Glass", image: safetyglassLogo },
  { name: "S.D. Foods", image: sdfoodsLogo },
  { name: "Uvagai Foundation", image: uvagaiLogo },
];



const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [projectType, setProjectType] = useState("Software Development");

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  const testimonial = testimonials[testimonialIndex];

  const changeTestimonial = (direction) => {
    setTestimonialIndex((current) => {
      return (
        (current + direction + testimonials.length) % testimonials.length
      );
    });
  };

  return (
    <main className="aspl-home">
      {/* HERO SECTION */}
      <section className="aspl-hero" id="home">
        <div className="aspl-hero-inner">
          <div className="aspl-hero-content">
            <span className="aspl-eyebrow aspl-eyebrow-dark">
              DIGITAL EXCELLENCE
            </span>

            <h1>
              We Build It Like
              <br />
              <span>It's Our Own.</span>
            </h1>

            <p>
              We build business-focused software, strengthen digital presence
              and create production-ready studio environments that help brands
              turn ideas into measurable progress.
            </p>

            <div className="aspl-hero-actions">
              <a href="#contact" className="aspl-btn aspl-btn-orange">
                Get your free growth audit <ArrowRight size={18} />
              </a>

              <a href="#approach" className="aspl-btn aspl-btn-white">
                See how it works <ArrowRight size={18} />
              </a>
            </div>
          </div>

          
            <div className="aspl-orbit-wrap" aria-hidden="true">
  <img
    src={reactHeroImage}
    alt=""
    className="aspl-orbit"
  />
</div>
          </div>
      </section>


      {/* CLIENTS SECTION */}
      <section className="aspl-clients" id="clients">
        <div className="aspl-clients-inner">
          <span className="aspl-eyebrow">OUR CLIENTS</span>
          <h2>We’ve worked with amazing companies</h2>

          <div className="aspl-clients-marquee" aria-label="Our clients">
            <div className="aspl-clients-track">
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  className="aspl-client-card"
                  key={`${client.name}-${index}`}
                  aria-hidden={index >= clientLogos.length}
                >
                  <img
                    src={client.image}
                    alt={index >= clientLogos.length ? "" : client.name}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDATION SECTION */}
      <section className="aspl-foundation" id="about">
        <div className="aspl-foundation-inner">
          <div className="aspl-foundation-copy">
            <span className="aspl-eyebrow">OUR FOUNDATION</span>

            <h2>
              Progress through technology.
              <br />
              Powered by purpose.
            </h2>

            <p>
              ASPL Technology is an end-to-end technology partner for modern
              enterprises, high-growth startups, and media brands. We eliminate
              operational friction with custom-coded software, scale pipelines
              through performance digital marketing, and configure
              broadcast-grade media studios for authoritative brand
              storytelling.
            </p>

            <p>
              From full-stack web and cloud systems to acoustic studio builds
              and high-converting marketing engines, we handle every layer of
              your brand's digital infrastructure.
            </p>

            <a href="#services" className="aspl-text-link">
              Discover our technical capabilities <ArrowRight size={17} />
            </a>
          </div>

          <div className="aspl-foundation-visuals">
            <div className="aspl-foundation-building">
              <img
                src={firstHomeImage}
                alt="ASPL technology workspace and development"
                loading="lazy"
              />
              <span className="aspl-image-tag">CAMPUS HQ</span>
            </div>

            <div className="aspl-foundation-side">
              <div className="aspl-foundation-message">
                Technology and digital innovation that drive business growth
                and create lasting impact.
              </div>

              <div className="aspl-foundation-team">
                <img
                  src={secondHomeImage}
                  alt="ASPL digital team and technology"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section className="aspl-stats" aria-label="Company statistics">
        <div className="aspl-stats-inner">
          <div className="aspl-stat">
            <div className="aspl-stat-icon">
              <BriefcaseBusiness size={24} />
            </div>
            <div>
              <h3>
                1<span>+</span>
              </h3>
              <p>Years of Experience</p>
            </div>
          </div>

          <div className="aspl-stat">
            <div className="aspl-stat-icon">
              <Users size={25} />
            </div>
            <div>
              <h3>
                50<span>+</span>
              </h3>
              <p>Clients</p>
            </div>
          </div>

          <div className="aspl-stat">
            <div className="aspl-stat-icon">
              <Rocket size={25} />
            </div>
            <div>
              <h3>
                17<span>+</span>
              </h3>
              <p>Products Launched</p>
            </div>
          </div>

          <div className="aspl-stat">
            <div className="aspl-stat-icon">
              <Award size={25} />
            </div>
            <div>
              <h3>
                10<span>+</span>
              </h3>
              <p>Awards &amp; Recognitions</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="aspl-services" id="services">
        <div className="aspl-services-heading">
          <span className="aspl-eyebrow">OUR SERVICES</span>

          <h2>
            Three core services.
            <br />
            Built for enterprise impact.
          </h2>

          <p>
            End-to-end execution across bespoke software engineering,
            performance marketing, and physical studio setups.
          </p>
        </div>

        <div className="aspl-services-controls">
          <div className="aspl-filter-tabs" role="group" aria-label="Filter services">
            {[
              { label: "All", value: "all" },
              { label: "Software & Web", value: "software" },
              { label: "Digital Marketing", value: "marketing" },
              { label: "Studio Setup", value: "studio" },
            ].map((filter) => (
              <button
                type="button"
                key={filter.value}
                className={
                  activeFilter === filter.value ? "active" : ""
                }
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <a href="#contact" className="aspl-view-work">
            View all work <ArrowRight size={16} />
          </a>
        </div>

        <div className="aspl-service-banners" aria-label="Our services">
          {filteredServices.map((service, index) => (
            <a
              href="#contact"
              className="aspl-service-banner"
              key={service.category}
              style={{ "--service-index": index }}
            >
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <span className="aspl-service-title">{service.title}</span>
              <span className="aspl-service-arrow">
                <ArrowUpRight size={20} />
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="aspl-approach" id="approach">
        <div className="aspl-approach-heading">
          <span className="aspl-eyebrow">OUR APPROACH</span>
          <h2>
            From challenge to
            <br />
            meaningful progress.
          </h2>
        </div>

        <div className="aspl-approach-grid">
          {approach.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                className={`aspl-approach-card aspl-approach-card-${index + 1}`}
                key={step.title}
              >
                <div className="aspl-approach-icon">
                  <Icon size={28} />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>

                <div className="aspl-approach-divider" />

                <span>Deliverable: {step.deliverable}</span>
              </article>
            );
          })}
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="aspl-testimonials">
        <div className="aspl-testimonials-inner">
          <div className="aspl-testimonials-heading">
            <span className="aspl-eyebrow aspl-eyebrow-orange">
              WHAT PEOPLE SAY
            </span>

            <h2>
              Trusted by
              <br />
              businesses and
              <br />
              media founders.
            </h2>

            <div className="aspl-satisfaction">
              <span className="aspl-satisfaction-symbol">99%</span>
              <span className="aspl-satisfaction-star">★</span>
              <p>Verified Enterprise &amp; Student Satisfaction</p>
            </div>
          </div>

          <article className="aspl-testimonial-card">
            <div className="aspl-quote-mark">“</div>

            <div className="aspl-testimonial-content">
              <blockquote>“{testimonial.quote}”</blockquote>

              <div className="aspl-testimonial-divider" />

              <div className="aspl-testimonial-bottom">
                <div className="aspl-testimonial-person">
                 <div className="aspl-testimonial-avatar">
  <img
    src={rameshKumar}
    alt="Ramesh Kumar"
    className="aspl-testimonial-avatar-img"
  />
</div>

                  <div>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.role}</p>
                  </div>
                </div>

                <div className="aspl-testimonial-controls">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => changeTestimonial(-1)}
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => changeTestimonial(1)}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CONTACT CTA SECTION */}
      <section className="aspl-contact-cta" id="contact">
        <div className="aspl-contact-copy">
          <span className="aspl-eyebrow aspl-eyebrow-dark">
            LET'S BUILD WHAT'S NEXT
          </span>

          <h2>
            What could we
            <br />
            build <span>together?</span>
          </h2>

          <p>
            Connect directly with our solutions architects. We evaluate
            requirements, deliver clear technical roadmaps, and bring equipment
            setups to life on tight schedules.
          </p>
        </div>

        <form
          className="aspl-project-form"
          onSubmit={(event) => {
            event.preventDefault();

            const subject = encodeURIComponent(
              `Project enquiry: ${projectType}`
            );
            const body = encodeURIComponent(
              `Hello ASPL Team,\n\nI am interested in: ${projectType}.\nPlease contact me to discuss my requirements.`
            );

            window.location.href =
              `mailto:info@aspltechsolutions.com?subject=${subject}&body=${body}`;
          }}
        >
          <h3>WHAT ARE YOU LOOKING TO EXECUTE?</h3>

          <div className="aspl-project-options">
            {[
              "Software Development",
              "Digital Marketing",
              "Podcast Studio Setup",
              "Other Business Enquiry",
            ].map((type) => (
              <button
                className={
                  projectType === type ? "selected" : ""
                }
                type="button"
                key={type}
                onClick={() => setProjectType(type)}
              >
                <span className="aspl-option-dot" />
                {type}
              </button>
            ))}
          </div>

          <div className="aspl-project-actions">
            <button className="aspl-project-submit" type="submit">
              Discuss Your Project <ArrowRight size={17} />
            </button>

            <a
              href="mailto:info@aspltechsolutions.com?subject=Consultation%20Request"
              className="aspl-project-schedule"
            >
              Schedule a Consultation <CalendarDays size={16} />
            </a>
          </div>

          <p className="aspl-project-note">
            Guaranteed response within 24 business hours · Strict NDA Available
          </p>
        </form>
      </section>
    </main>
  );
};

export default Home;
