import {
  ArrowRight,
  Sparkles,
  Layers,
  Code2,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  MapPin,
} from 'lucide-react';
import { companyDetails } from '../data/content';
import './Hero.css';

export default function Hero({ onScrollTo }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Headline, Description, Pill Actions */}
        <div className="hero-content">
          {/* Location Badge (Strictly Bengaluru Headquarters) */}
          <div className="company-tag">
            <span className="company-tag-dot" />
            <span>Digital · Technology · Design</span>
          </div>

          <h1 className="hero-heading">
            Digital ideas, <br />
            built for <span className="text-gradient-orange">what’s next.</span>
          </h1>

          <p className="hero-subtext">
            ASPL Tech Solutions empowers high-growth enterprises and forward- thinking brands with production-grade <strong>web development</strong>,
            useful <strong>app development</strong>, and focused <strong>digital marketing</strong>.
          </p>

          <div className="hero-actions-row">
            <button
              onClick={() => onScrollTo && onScrollTo('services')}
              className="hero-btn-primary"
            >
              <span>Explore Services</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() => onScrollTo && onScrollTo('contact')}
              className="hero-btn-secondary"
            >
              <span>Contact Us</span>
            </button>
          </div>

          <div className="hero-trust-bar">
            <MapPin size={16} className="trust-location-icon" />
            <div className="trust-text">
              <strong>Digital solutions for business</strong> · Bengaluru, India
            </div>
          </div>
        </div>

        {/* Right Column: High-Tech Featured Card + Mini Cards (Dementee style) */}
        <div className="hero-visual-col">
          {/* Main Visual Card */}
          <div className="hero-featured-card">
            <div className="featured-card-header">
              <div className="terminal-dots">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="featured-badge">
                <span className="live-dot" />
                  <span>ASPL Tech Solutions · Bengaluru</span>
              </div>
            </div>

            <div className="featured-card-body">
              <div className="capability-chip">
                <Code2 size={16} className="chip-icon orange" />
                <div>
                  <strong>Web Platforms</strong>
                  <span>Websites shaped around your business</span>
                </div>
              </div>

              <div className="capability-chip">
                <Smartphone size={16} className="chip-icon cyan" />
                <div>
                  <strong>App Development</strong>
                  <span>Useful apps for customers and teams</span>
                </div>
              </div>

              <div className="capability-chip">
                <TrendingUp size={16} className="chip-icon green" />
                <div>
                  <strong>Digital Marketing</strong>
                  <span>Reach the right people online</span>
                </div>
              </div>
            </div>

            <div className="featured-card-footer">
              <div className="footer-metric"><span className="metric-val">100%</span><span className="metric-sub">In-House Code</span></div>
              <div className="footer-metric"><span className="metric-val">Zero</span><span className="metric-sub">Legacy Debt</span></div>
              <div className="footer-metric"><span className="metric-val">24/7</span><span className="metric-sub">Reliability</span></div>
            </div>
          </div>

          {/* Mini Cards Row (Dementee-style side by side) */}
          <div className="hero-mini-cards">
            <div className="mini-card white">
              <div className="mini-card-label">PROJECT SUCCESS</div>
              <div className="mini-card-number text-gradient-orange">99.8%</div>
              <p className="mini-card-text">On-time milestone delivery across web & cloud platforms</p>
            </div>

            <div className="mini-card gradient">
              <div className="mini-card-label light">THREE FOCUSED SERVICES</div>
              <div className="mini-card-number light">One partner</div>
              <p className="mini-card-text light">Websites, applications, and digital marketing in one place.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-stats-bar" aria-label="ASPL company statistics">
        <div className="hero-stat-item">
          <strong className="hero-stat-value orange">150+</strong>
          <span className="hero-stat-label">Digital Platforms Built</span>
        </div>

        <div className="hero-stat-item">
          <strong className="hero-stat-value blue">99.8%</strong>
          <span className="hero-stat-label">Delivery Success &amp; Satisfaction</span>
        </div>

        <div className="hero-stat-item">
          <strong className="hero-stat-value white">10+ Yrs</strong>
          <span className="hero-stat-label">Digital Delivery Experience</span>
        </div>

        <div className="hero-stat-item">
          <strong className="hero-stat-value yellow">4</strong>
          <span className="hero-stat-label">Official Strategic Partners</span>
        </div>
      </div>
    </section>
  );
}
