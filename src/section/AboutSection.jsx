import { ArrowRight, Compass, Target } from 'lucide-react';
import {
  companyDetails,
  companyVision,
  companyMission,
} from '../data/content';
import './AboutSection.css';

export default function AboutSection({ onScrollTo }) {
  return (
    <section id="about" className="section about-intro-section">
      <div className="container about-intro-grid">
        <div className="about-intro-content">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>ABOUT ASPL</span>
          </div>

          <h2 className="section-title">
            A digital partner for{' '}
            <span className="text-gradient-orange">your next step</span>
          </h2>

          <p className="about-intro-lead">
            {companyDetails.name} is a Bengaluru-based company helping businesses
            build their digital presence and connect with customers.
          </p>

          <p className="about-intro-copy">
            Guided by the belief that success is a partnership, we focus on web
            development, app development, and digital marketing. We begin by
            understanding your goals, then shape practical digital work around
            what your business needs.
          </p>

          <button
            type="button"
            onClick={() => onScrollTo('contact')}
            className="btn-primary-pill"
          >
            <span>Talk to our team</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        <div className="about-intro-values">
          <article className="about-value-card">
            <div className="about-value-kicker vision">
              <span className="about-value-icon">
                <Compass size={18} aria-hidden="true" />
              </span>
              <span>OUR VISION</span>
            </div>
            <h3>Future-Ready Innovation</h3>
            <p>{companyVision}</p>
          </article>

          <article className="about-value-card">
            <div className="about-value-kicker mission">
              <span className="about-value-icon">
                <Target size={18} aria-hidden="true" />
              </span>
              <span>OUR MISSION</span>
            </div>
            <h3>Practical &amp; Scalable Impact</h3>
            <p>{companyMission}</p>
          </article>
        </div>
      </div>
    </section>
  );
}