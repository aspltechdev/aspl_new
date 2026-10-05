import { ArrowRight, CheckCircle2, Globe, Smartphone, TrendingUp } from 'lucide-react';
import './ServiceCard.css';

const serviceIcons = {
  'web-development': Globe,
  'applications-development': Smartphone,
  'digital-marketing': TrendingUp,
};

const serviceBadges = {
  'web-development': 'Web Development',
  'applications-development': 'App Development',
  'digital-marketing': 'Digital Marketing',
};

export default function ServiceCard({ service, onSelectService }) {
  const Icon = serviceIcons[service.key] || Globe;
  const badgeText = serviceBadges[service.key] || 'Core Service';

  return (
    <article className="service-card-modern">
      {/* Visual Image Header */}
      {service.image && (
        <div className="service-card-media">
          <img
            src={service.image}
            alt={service.title}
            className="service-card-img"
            loading="lazy"
          />
          <div className="service-media-overlay" />
          <div className="service-floating-badge">
            <span className="badge-num">{service.id}</span>
            <span className="badge-sep">·</span>
            <span className="badge-label">{badgeText}</span>
          </div>
        </div>
      )}

      {/* Card Content Body */}
      <div className="service-card-body">
        <div className="service-header-row">
          <div className="service-icon-circle">
            <Icon size={22} className="service-icon" />
          </div>
          <h3 className="service-heading">{service.title}</h3>
        </div>

        <p className="service-summary">{service.short}</p>

        {/* Feature Checkpoints */}
        <div className="service-features-list">
          {service.points.slice(0, 4).map((pt, i) => (
            <div key={i} className="service-feature-item">
              <CheckCircle2 size={16} className="feature-check-icon" />
              <span>{pt}</span>
            </div>
          ))}
        </div>

        <div className="service-card-footer">
          <button
            onClick={() => onSelectService && onSelectService(service.title)}
            className="service-consult-btn"
          >
            <span><strong>Discuss this service</strong></span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </article>
  );
}
