import { ArrowRight, Sparkles } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { coreServices } from '../data/content';
import './ServicesSection.css';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-head text-center">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>OUR CORE CAPABILITIES</span>
          </div>

          <h2 className="section-title">
            Digital services for{' '}
            <span className="text-gradient-orange">business growth</span>
          </h2>

          <p className="section-subtitle">
            We build high-performance web and mobile applications, then deploy data-driven marketing campaigns to scale them. By combining agile engineering with strategic growth marketing, we deliver end-to-end digital solutions focused entirely on your business goals.
          </p>
        </div>

        <div className="services-grid-3">
          {coreServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        <div className="integrated-formula-card">
          <div className="formula-text">
            <span className="formula-badge">
              <Sparkles size={14} aria-hidden="true" />
              One connected digital partner
            </span>

            <h3>Need a website, app, or marketing solution?</h3>
            <p>
              Tell us about your goals. We’ll help you plan the right mix of
              digital services for your business.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onSelectService?.('All 3 Integrated')}
            className="btn-primary-pill"
          >
            <span>Start Your Project</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}