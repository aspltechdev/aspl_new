
import {
  ArrowRight,
  Shield,
  Lightbulb,
  Users,
  BriefcaseBusiness,
  Headset,
  ChartNoAxesColumnIncreasing,
  Star,
  Check,
  Play,
} from "lucide-react";
import "./AboutSection.css";
import aboutOfficeImage from "../assets/1stabout.png";
import aboutteamImage from "../assets/2ndabout.png";
import aboutphilosophyImage from "../assets/3rdabout.png";
import creativeStrategyImage from "../assets/4thabout.png";
import broadcastStudioImage from "../assets/5thabout.png";
import aboutApproachImage from "../assets/6thabout.png";

const assets = {
  office: aboutOfficeImage,
  belief: aboutphilosophyImage,
  culture: "/assets/about-culture.png",
  strategy: "/assets/about-strategy.png",
  studio: "/assets/about-studio.png",
  approach: "/assets/about-approach.png",
};

const beliefs = [
  {
    icon: Shield,
    title: "Business Oriented",
    description: "Solutions aligned with your real business goals.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description: "Ideas that bring meaningful and lasting difference.",
  },
  {
    icon: Users,
    title: "Long-Term Partnerships",
    description: "We grow alongside you and your teams.",
  },
];

const impactItems = [
  {
    icon: BriefcaseBusiness,
    title: "Multiple Industries",
    description:
      "Experience across varied business verticals, SaaS, healthcare, and enterprise commerce.",
  },
  {
    icon: Headset,
    title: "End-to-End Support",
    description:
      "From early product discovery and UX roadmaps to deployment and marketing execution.",
  },
  {
    icon: ChartNoAxesColumnIncreasing,
    title: "Scalable Solutions",
    description:
      "Built with forward-compatible code and cloud infrastructure for today and tomorrow.",
  },
  {
    icon: Star,
    title: "Ongoing Collaboration",
    description:
      "A disciplined focus on long-term client success and strategic continuous improvement.",
  },
];

const approachItems = [
  {
    number: "01",
    title: "Cross-Functional",
    description:
      "Development, marketing and content infrastructure unified.",
  },
  {
    number: "02",
    title: "Collaborative Process",
    description:
      "Clear communication, weekly milestones, and transparency.",
  },
  {
    number: "03",
    title: "Flexible & Scalable",
    description:
      "Architectures that adapt smoothly as your user base expands.",
  },
  {
    number: "04",
    title: "Real Outcomes",
    description:
      "Practical business solutions engineered for measurable impact.",
  },
];

function SectionBadge({ children }) {
  return <span className="about-badge">{children}</span>;
}

function About() {
  const handleContact = () => {
    window.location.href = "/contact";
  };

  return (
    <main className="about-page">
      {/* ================= HERO ================= */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-content">
            <SectionBadge>ABOUT ASPL</SectionBadge>

            <h1 className="about-hero-title">
              Technology. People.
              <span>Purpose.</span>
            </h1>

            <p className="about-hero-description">
              We are a technology and digital solutions partner for
              businesses that want to create real value through
              technology, creativity and collaboration.
            </p>

            <button
              className="about-gradient-button"
              onClick={handleContact}
            >
              Let's Work Together
              <ArrowRight size={19} />
            </button>
          </div>

          <div className="about-hero-visual">
            <img
              className="about-office-image"
              src={aboutOfficeImage}
              alt="ASPL office building"
            />

            <div className="about-values-card">
              <span>
                <i className="about-dot dot-cyan" />
                Technology
              </span>
              <span>
                <i className="about-dot dot-yellow" />
                Creativity
              </span>
              <span>
                <i className="about-dot dot-purple" />
                Collaboration
              </span>
              <span>
                <i className="about-dot dot-orange" />
                Business Impact
              </span>
            </div>

            <button
              className="about-video-card"
              onClick={() =>
                document
                  .getElementById("about-culture")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="Explore ASPL culture"
            >
              <span className="about-play-icon">
                <Play size={17} fill="currentColor" />
              </span>

              <span className="about-video-copy">
                <strong>A glimpse into ASPL</strong>
                <small>Tech, creators & culture</small>
              </span>

              <span className="about-video-time">02:18</span>
            </button>
          </div>
        </div>
      </section>

      {/* ================= OUR BELIEF ================= */}
      <section className="about-belief section-white">
        <div className="about-two-column">
          <div className="about-belief-content">
            <SectionBadge>OUR BELIEF</SectionBadge>

            <h2 className="about-section-title">
              Real problems. Practical solutions.
            </h2>

            <p className="about-section-description">
              We believe technology and creativity should solve real
              business challenges. Our focus is on understanding your
              goals, bringing the right expertise to the table, and
              building solutions that create lasting value.
            </p>

            <a className="about-text-link" href="/services">
              Our Approach <ArrowRight size={17} />
            </a>

            <div className="about-belief-divider" />

            <div className="about-belief-items">
              {beliefs.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    className="about-belief-item"
                    key={item.title}
                  >
                    <span className="about-belief-icon">
                      <Icon size={24} />
                    </span>

                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="about-belief-visual">
            <img
              src={aboutteamImage}
              alt="ASPL team collaborating on digital solutions"
            />

            <div className="about-collaboration-card">
              <span className="about-collaboration-icon">
                <Users size={26} />
              </span>

              <span>
                <strong>Collaboration</strong>
                <small>at the core of every delivery</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR CULTURE ================= */}
      <section className="about-culture" id="about-culture">
        <div className="about-culture-inner">
          <div className="about-culture-content">
            <SectionBadge>OUR CULTURE</SectionBadge>

            <h2 className="about-section-title">
              A place to think, create and grow.
            </h2>

            <p className="about-section-description">
              We value curiosity, clear communication and a collaborative
              mindset. Our team works in a supportive environment where
              ideas are shared, skills are developed and meaningful work
              is created together.
            </p>
          </div>

          <div className="about-culture-gallery">
            <article className="about-culture-feature">
  <img
    src={aboutphilosophyImage}
    alt="ASPL team philosophy"
  />

  <div className="about-culture-feature-caption">
    <span className="about-philosophy-badge">
      PHILOSOPHY
    </span>
    <h3>Good Ideas, Great People.</h3>
  </div>
</article>
            <div className="about-culture-small-grid">
              <article className="about-culture-small-card">
                <img
                  src={creativeStrategyImage}
                  alt="Team members planning creative strategies"
                />
                <span>Creative Strategy Sessions</span>
              </article>

              <article className="about-culture-small-card">
                <img
                  src={broadcastStudioImage}
                  alt="ASPL creator studio"
                />
                <span>Broadcast Creator Studio</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="about-approach section-white">
        <div className="about-two-column about-approach-inner">
          <div className="about-approach-visual">
            <img
              src={aboutApproachImage}
              alt="ASPL team combining technology, creativity and strategy"
            />

            <div className="about-execution-card">
              <span className="about-execution-icon">
                <Check size={22} />
              </span>

              <span>
                <strong>Full-Stack Execution</strong>
                <small>Design, code & content under one roof</small>
              </span>
            </div>
          </div>

          <div className="about-approach-content">
            <SectionBadge>OUR APPROACH</SectionBadge>

            <h2 className="about-section-title">
              Technology, creativity and strategy — together.
            </h2>

            <p className="about-section-description">
              We combine technical expertise, digital strategy and
              creative infrastructure to deliver solutions that make
              a real difference. Our approach is practical,
              collaborative and focused on long-term value.
            </p>

            <div className="about-approach-grid">
              {approachItems.map((item) => (
                <article
                  className="about-approach-card"
                  key={item.number}
                >
                  <span className="about-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUR IMPACT ================= */}
      <section className="about-impact section-white">
        <div className="about-impact-inner">
          <SectionBadge>OUR IMPACT</SectionBadge>

          <h2 className="about-section-title">
            Building long-term partnerships.
          </h2>

          <p className="about-section-description about-impact-description">
            We work with businesses across different industries to solve
            meaningful problems and create opportunities for growth.
          </p>

          <a className="about-text-link" href="/services">
            Our Work <ArrowRight size={17} />
          </a>

          <div className="about-impact-grid">
            {impactItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  className="about-impact-card"
                  key={item.title}
                >
                  <span className="about-impact-icon">
                    <Icon size={27} />
                  </span>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="about-cta-section">
        <div className="about-cta">
          <div className="about-cta-content">
            <SectionBadge>LET'S CREATE TOGETHER</SectionBadge>

            <h2>Have a project in mind?</h2>

            <p>
              We'd love to hear about it. Let's discuss how ASPL can
              help you turn your ideas into real business results.
            </p>
          </div>

          <button
            className="about-cta-button"
            onClick={handleContact}
          >
            Start a Conversation
            <ArrowRight size={22} />
          </button>
        </div>
      </section>
    </main>
  );
}

export default About;