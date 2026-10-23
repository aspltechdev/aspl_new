
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Search,
  ChevronDown,
  Plus,
  Minus,
  Code2,
  MapPin,
  BriefcaseBusiness,
  Clock3,
} from "lucide-react";
import "./Careers.css";
import careerImage from "../assets/1stcareer.png";
const jobs = [
  {
    id: 1,
    title: "UI/UX DESIGNER",
    location: "Bengaluru",
    type: "Full time",
    experience: "0-1 years",
    category: "Design",
    skills: "UI/UX Design, Figma, Wireframing, Prototyping",
    description:
      "Design intuitive digital experiences, create wireframes and prototypes, and collaborate with developers to deliver user-friendly products.",
    requirements: [
      "Knowledge of Figma and design systems.",
      "Understanding of user research and usability principles.",
      "Ability to create wireframes and interactive prototypes.",
    ],
  },
  {
    id: 2,
    title: "DIGITAL MARKETING",
    location: "Bengaluru",
    type: "Full time",
    experience: "0-1 years",
    category: "Marketing",
    skills:
      "SEO, SEM, Social Media Marketing, Google Ads, Content Marketing",
    description:
      "Help improve brand visibility, plan digital campaigns, manage social media platforms, and measure marketing performance.",
    requirements: [
      "Understanding of SEO and digital marketing.",
      "Knowledge of social media platforms and analytics.",
      "Creative thinking and communication skills.",
    ],
  },
];

const CareerSelect = ({ label, value, onChange, options }) => (
  <div className="career-filter">
    <select
      aria-label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    <ChevronDown size={16} aria-hidden="true" />
  </div>
);

export default function Careers() {
  const [search, setSearch] = useState("");
  const [jobType, setJobType] = useState("All Jobs");
  const [experience, setExperience] = useState("Experience");
  const [location, setLocation] = useState("Location");
  const [expandedJob, setExpandedJob] = useState(null);

  const filteredJobs = useMemo(() => {
    const term = search.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesSearch =
        !term ||
        job.title.toLowerCase().includes(term) ||
        job.skills.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term) ||
        job.category.toLowerCase().includes(term);

      const matchesType =
        jobType === "All Jobs" || job.type === jobType;

      const matchesExperience =
        experience === "Experience" ||
        job.experience === experience;

      const matchesLocation =
        location === "Location" || job.location === location;

      return (
        matchesSearch &&
        matchesType &&
        matchesExperience &&
        matchesLocation
      );
    });
  }, [search, jobType, experience, location]);

  const scrollToJobs = () => {
    document.getElementById("open-roles")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="careers-page">
      {/* HERO SECTION */}
      <section className="careers-hero" id="careers-home">
        <div className="careers-hero-inner">
          <div className="careers-hero-content">
            <span className="careers-eyebrow">
              GROW YOUR CAREER
            </span>

            <h1>
              Find Your Next Opportunity
              <br />
              With a{" "}
              <span>Growing Tech Team</span>
            </h1>

            <p>
              Explore roles where your ideas, skills, and ambition
              can turn into meaningful work, stronger experience,
              and long-term career growth.
            </p>

            <div className="careers-hero-actions">
              <button
                type="button"
                className="careers-primary-btn"
                onClick={scrollToJobs}
              >
                View Open Roles
                <ArrowRight size={19} />
              </button>

              <button
                type="button"
                className="careers-secondary-btn"
                onClick={scrollToContact}
              >
                Send Resume
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        <div className="careers-hero-visual">
  <img
    src={careerImage}
    alt="Professional representing career opportunities at ASPL"
  />
</div>
        </div>
      </section>

      {/* SEARCH AND FILTERS */}
      <section className="career-search-section" aria-label="Search jobs">
        <div className="career-search-bar">
          <label className="career-search-input">
            <Search size={20} />
            <input
              type="search"
              placeholder="Find your next opportunity"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <CareerSelect
            label="Job type"
            value={jobType}
            onChange={setJobType}
            options={[
              "All Jobs",
              "Full time",
              "Part time",
              "Internship",
              "Contract",
            ]}
          />

          <CareerSelect
            label="Experience"
            value={experience}
            onChange={setExperience}
            options={[
              "Experience",
              "0-1 years",
              "1-3 years",
              "3-5 years",
              "5+ years",
            ]}
          />

          <CareerSelect
            label="Location"
            value={location}
            onChange={setLocation}
            options={["Location", "Bengaluru"]}
          />
        </div>
      </section>

      {/* AVAILABLE JOBS */}
      <section className="career-openings" id="open-roles">
        <div className="career-openings-heading">
          <span className="career-section-label">
            AVAILABLE JOBS
          </span>

          <h2>
            <span>Our</span>{" "}
            <span className="career-orange-text">
              Current Openings
            </span>
          </h2>
        </div>

        <div className="career-jobs-area">
          <div className="career-jobs-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const isExpanded = expandedJob === job.id;

                return (
                  <article
                    className={`career-job-card ${
                      isExpanded ? "expanded" : ""
                    }`}
                    key={job.id}
                  >
                    <div className="career-job-top">
                      <div className="career-job-info">
                        <h3>{job.title}</h3>

                        <div className="career-job-meta">
                          <span>
                            <MapPin size={13} />
                            {job.location}
                          </span>
                          <i />
                          <span>
                            <BriefcaseBusiness size={13} />
                            {job.type}
                          </span>
                          <i />
                          <span>
                            <Clock3 size={13} />
                            Experience: {job.experience}
                          </span>
                        </div>

                        <p className="career-job-skills">
                          <strong>Required Skills:</strong>{" "}
                          {job.skills}
                        </p>
                      </div>

                      <button
                        type="button"
                        className="career-job-toggle"
                        aria-label={
                          isExpanded
                            ? `Collapse ${job.title}`
                            : `View details for ${job.title}`
                        }
                        aria-expanded={isExpanded}
                        onClick={() =>
                          setExpandedJob(
                            isExpanded ? null : job.id
                          )
                        }
                      >
                        {isExpanded ? (
                          <Minus size={22} />
                        ) : (
                          <Plus size={22} />
                        )}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="career-job-details">
                        <h4>About this role</h4>
                        <p>{job.description}</p>

                        <h4>What we're looking for</h4>
                        <ul>
                          {job.requirements.map((requirement) => (
                            <li key={requirement}>
                              {requirement}
                            </li>
                          ))}
                        </ul>

                        <button
                          type="button"
                          className="career-apply-btn"
                          onClick={scrollToContact}
                        >
                          Apply for this role
                          <ArrowRight size={17} />
                        </button>
                      </div>
                    )}
                  </article>
                );
              })
            ) : (
              <div className="career-no-results">
                <Code2 size={32} />
                <h3>No matching roles found</h3>
                <p>
                  Try changing your search or selecting different
                  filters to explore available opportunities.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setJobType("All Jobs");
                    setExperience("Experience");
                    setLocation("Location");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="career-resume-section" id="career-resume">
        <div className="career-resume-banner">
          <div className="career-resume-content">
            <h2>Didn't Find Your Role?</h2>
            <p>
              Send us your resume and details. We'll get back to you
              when a role fits your profile.
            </p>
          </div>

          <a
            href="#contact"
            className="career-resume-btn"
            onClick={scrollToContact}
          >
            Send Resume
            <ArrowRight size={19} />
          </a>
        </div>
      </section>
    </main>
  );
}
