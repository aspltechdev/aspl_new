
import { ArrowUpRight } from "lucide-react";
import "./ServiceStcak.css";

const services = [
  {
    id: 1,
    title: "Software Development",
    image: "/images/software-development.png",
    alt: "Software development workspace",
    description:
      "Custom software, web applications and scalable technology solutions.",
  },
  {
    id: 2,
    title: "Digital Marketing",
    image: "/images/digital-marketing.png",
    alt: "Digital marketing workspace",
    description:
      "Strategic digital marketing to increase visibility and business growth.",
  },
  {
    id: 3,
    title: "Podcast & Creator Studio",
    image: "/images/podcast-studio.png",
    alt: "Podcast and creator studio",
    description:
      "Professional studio setups with recording equipment and acoustic treatment.",
  },
];

export default function ServiceStack() {
  return (
    <section className="aspl-services-stack" id="services">
      <div className="aspl-services-stack-heading">
        <span className="aspl-services-eyebrow">OUR EXPERTISE</span>

        <h2>
          Technology solutions for{" "}
          <span>real business impact.</span>
        </h2>

        <p>
          Explore our software development, digital marketing, and
          creator studio services designed to help businesses grow.
        </p>
      </div>

      <div className="aspl-service-banners">
        {services.map((service) => (
          <article
            className="aspl-service-banner"
            key={service.id}
            style={{ "--card-index": service.id }}
          >
            <img
              className="aspl-service-image"
              src={service.image}
              alt={service.alt}
              loading={service.id === 1 ? "eager" : "lazy"}
            />

            <div className="aspl-service-overlay" />

            <div className="aspl-service-content">
              <span className="aspl-service-number">
                0{service.id}
              </span>

              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>

              <a
                href="/contact"
                className="aspl-service-action"
                aria-label={`Enquire about ${service.title}`}
              >
                <ArrowUpRight size={23} />
              </a>
            </div>

            <span className="aspl-service-title">
              {service.title}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}
