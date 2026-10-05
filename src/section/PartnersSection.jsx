import { CheckCircle2 } from 'lucide-react';
import { partners } from '../data/content';
import './PartnersSection.css';

export default function PartnersSection() {
  return (
<section id="partners" className="section partners-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="section-badge">
              <span className="badge-dot" />
              <span>STRATEGIC NETWORK</span>
            </div>
            <h2 className="section-title">
              Our Official <span className="text-gradient-orange">Strategic Partners</span>
            </h2>
            <p className="section-subtitle">
              Backed by the best in the industry. We partner with leading technology platforms and marketing networks to deliver cutting-edge web, app, and digital marketing solutions. These official alliances ensure our team is always equipped with the latest tools, certified expertise, and direct support to drive your business forward.
            </p>
          </div>

          {/* Static 4-Card Showcase Grid */}
          <div className="partners-showcase-grid">
            {partners.map((partner) => (
              <div key={partner.id} className="partner-showcase-card">
                <div className={`partner-logo-stage ${partner.darkBg ? 'dark-stage' : ''}`}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="partner-showcase-img"
                    loading="lazy"
                  />
                </div>
                <div className="partner-showcase-meta">
                  <h4 className="partner-name">{partner.name}</h4>
                  <span className="partner-category">{partner.category}</span>
                  <div className="partner-verified-tag">
                    <CheckCircle2 size={12} />
                    <span>Official Partner</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  </section>
  );
}
