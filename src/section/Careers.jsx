
import React, { useState } from "react";
import {
  MapPin,
  BriefcaseBusiness,
  Clock3,
  ArrowRight,
  X,
  Upload,
} from "lucide-react";
import "./Careers.css";

const jobs = [
  {
    id: "uiux",
    title: "UI/UX DESIGNER",
    location: "Bengaluru",
    type: "Full time",
    experience: "0-1 years",
    skills: "UI/UX Design, Figma, Wireframing, Prototyping",
    description:
      "Design intuitive and visually appealing websites, mobile applications, and software interfaces. Create wireframes, prototypes, and responsive UI designs while collaborating with developers to deliver seamless user experiences.",
    requiredSkills:
      "Figma, User Research, Prototyping, Responsive Design, Design Systems.",
    education: "Bachelor's Degree or relevant qualification.",
    experienceDetails:
      "1-3 years. Freshers with a strong portfolio may also apply.",
  },
  {
    id: "digital-marketing",
    title: "DIGITAL MARKETING",
    location: "Bengaluru",
    type: "Full time",
    experience: "0-1 years",
    skills:
      "SEO, SEM, Social Media Marketing, Google Ads, Content Marketing",
    description:
      "Plan and execute digital marketing campaigns to improve brand awareness, website traffic, and lead generation. Manage social media platforms, optimize website performance, and analyze campaign results to achieve business goals.",
    requiredSkills:
      "SEO, Google Analytics, Social Media Management, Email Marketing, and Digital Advertising.",
    education:
      "Bachelor's Degree in Marketing, Business, or a related field.",
    experienceDetails:
      "1-3 years. Freshers with relevant skills may also apply.",
  },
];

const Careers = () => {
  const [expandedJob, setExpandedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    position: "",
    experienceLevel: "0-1 Years",
    resume: null,
  });

  // Expand or collapse only the clicked job.
  const toggleJob = (jobId) => {
    setExpandedJob((current) =>
      current === jobId ? null : jobId
    );
  };

  // Open the form for the selected job.
  const openApplicationForm = (job) => {
    setFormData((previous) => ({
      ...previous,
      position: job.title,
      experienceLevel: "0-1 Years",
      resume: null,
    }));

    setShowApplicationForm(true);
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;

    if (name === "resume") {
      setFormData((previous) => ({
        ...previous,
        resume: files?.[0] || null,
      }));
      return;
    }

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.resume) {
      alert("Please upload your resume.");
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(formData.resume.type)) {
      alert("Please upload a PDF, DOC, or DOCX file.");
      return;
    }

    if (formData.resume.size > 5 * 1024 * 1024) {
      alert("Your resume must be 5 MB or smaller.");
      return;
    }

    /*
      Connect your backend API here.

      Example using Axios:

      const data = new FormData();
      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("location", formData.location);
      data.append("position", formData.position);
      data.append("experienceLevel", formData.experienceLevel);
      data.append("resume", formData.resume);

      await axios.post("/api/careers/apply", data);
    */

    try {
      setSubmitting(true);

      alert(
        "Form validation successful. Connect your backend API to submit the application."
      );
    } catch (error) {
      console.error("Application error:", error);
      alert("Unable to process your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="careers-page">
      {/* Careers hero */}
      <section className="careers-hero">
        <div className="careers-hero-content">
          <span className="careers-eyebrow">
            GROW YOUR CAREER
          </span>

          <h1>
            Find Your Next Opportunity
            <br />
            With a <span>Growing Tech Team</span>
          </h1>

          <p>
            Explore roles where your ideas, skills, and ambition can
            turn into meaningful work, stronger experience, and
            long-term career growth.
          </p>

          <div className="careers-hero-buttons">
            <button
              type="button"
              className="careers-primary-button"
              onClick={() =>
                document
                  .getElementById("open-roles")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Open Roles <ArrowRight size={19} />
            </button>

            <button
              type="button"
              className="careers-secondary-button"
              onClick={() => openApplicationForm(jobs[0])}
            >
              Send Resume <ArrowRight size={19} />
            </button>
          </div>
        </div>

        <div className="careers-hero-image">
          <img
            src="/images/career-person.png"
            alt="Professional exploring career opportunities"
          />
        </div>
      </section>

      {/* Open positions */}
      <section
        className="career-jobs-section"
        id="open-roles"
      >
        <div className="career-jobs-heading">
          <span>JOIN OUR TEAM</span>
          <h2>Explore Open Positions</h2>
          <p>
            Find an opportunity that matches your skills and interests.
          </p>
        </div>

        <div className="career-jobs-grid">
          {jobs.map((job) => {
            const isExpanded = expandedJob === job.id;

            return (
              <article
                className={`career-job-card ${
                  isExpanded ? "expanded" : ""
                }`}
                key={job.id}
              >
                <div className="career-job-header">
                  <div className="career-job-heading-content">
                    <h3>{job.title}</h3>

                    <div className="career-job-meta">
                      <span>
                        <MapPin size={15} />
                        {job.location}
                      </span>

                      <span className="career-meta-dot">•</span>

                      <span>
                        <BriefcaseBusiness size={15} />
                        {job.type}
                      </span>

                      <span className="career-meta-dot">•</span>

                      <span>
                        <Clock3 size={15} />
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
                    onClick={() => toggleJob(job.id)}
                    aria-expanded={isExpanded}
                    aria-label={
                      isExpanded
                        ? `Collapse ${job.title}`
                        : `Expand ${job.title}`
                    }
                  >
                    {isExpanded ? "−" : "+"}
                  </button>
                </div>

                {isExpanded && (
                  <div className="career-job-details">
                    <div className="career-job-divider" />

                    <h4>Job Description</h4>
                    <p>{job.description}</p>

                    <p>
                      <strong>Required Skills:</strong>{" "}
                      {job.requiredSkills}
                    </p>

                    <p>
                      <strong>Education:</strong>{" "}
                      {job.education}
                    </p>

                    <p>
                      <strong>Experience:</strong>{" "}
                      {job.experienceDetails}
                    </p>

                    <button
                      type="button"
                      className="career-apply-button"
                      onClick={() => openApplicationForm(job)}
                    >
                      Apply Now <ArrowRight size={18} />
                    </button>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Application form popup */}
      {showApplicationForm && (
        <div
          className="career-modal-overlay"
          onClick={closeApplicationForm}
        >
          <section
            className="career-application-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="career-application-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="career-modal-close"
              onClick={closeApplicationForm}
              aria-label="Close application form"
            >
              <X size={20} />
            </button>

            <p className="career-modal-intro">
              Share your details and upload your resume to apply for
              a career opportunity at ASPL Tech Solution.
            </p>

            <h2 id="career-application-title">
              APPLY NOW!
            </h2>

            <form
              className="career-application-form"
              onSubmit={handleSubmit}
            >
              <div className="career-form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  aria-label="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  aria-label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  aria-label="Location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />

                <label className="career-form-field">
                  <span>Position Applied for</span>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    readOnly
                  />
                </label>

                <label className="career-form-field">
                  <span>
                    Experience Level <b>*</b>
                  </span>

                  <select
                    name="experienceLevel"
                    value={formData.experienceLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="0-1 Years">0-1 Years</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3-5 Years">3-5 Years</option>
                    <option value="5+ Years">5+ Years</option>
                  </select>
                </label>
              </div>

              <label className="career-resume-label">
                Upload Resume (PDF/DOC/DOCX) <b>*</b>
              </label>

              <label className="career-resume-upload">
                <Upload size={22} />

                <span>
                  {formData.resume
                    ? formData.resume.name
                    : "Choose your resume file"}
                </span>

                <small>
                  PDF, DOC or DOCX · Maximum 5 MB
                </small>

                <small>
                  File upload must be connected to a website backend.
                </small>

                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                />
              </label>

              <button
                type="submit"
                className="career-submit-button"
                disabled={submitting}
              >
                {submitting
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
};

export default Careers;
