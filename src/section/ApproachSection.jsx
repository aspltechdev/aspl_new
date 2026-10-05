import { ShieldCheck } from 'lucide-react';
import { asplBrochurePillars, companyDetails } from '../data/content';
import './ApproachSection.css';

export default function ApproachSection() {
  return (
<section id="approach" className="section advantage-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge cyan">
              <span className="badge-dot cyan" />
              <span>The ASPL ADVANTAGE</span>
            </div>
            <h2 className="section-title">
              why forward-thinking businesses <span className="text-gradient-orange">Partner With Us</span>
            </h2>
            <p className="section-subtitle">
              <strong>"{companyDetails.quote}"</strong> — We bridge the gap between emerging tech and real-world execution. By working as an extension of your team, we deliver high-impact, practical IT solutions designed entirely around your business goals.
            </p>
          </div>

          {/* 5 Brochure Pillars Bento Grid */}
          <div className="pillars-bento-grid">
            {asplBrochurePillars.map((pillar) => (
              <div key={pillar.id} className="pillar-bento-card">
                <div className="pillar-num-badge">{pillar.id}</div>
                <h4 className="pillar-card-title">{pillar.title}</h4>
                <p className="pillar-card-tagline">{pillar.tagline}</p>
                <p className="pillar-card-desc">{pillar.description}</p>
                <div className="pillar-highlight-tag">
                  <ShieldCheck size={14} className="highlight-icon" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
  </section>
  );
}
