import { FaLinkedin, FaGithub } from "react-icons/fa";


function ResumePreview({ resumeData, selectedTemplate }) {
  return (
    <section className="resume-preview">
      <h2>Resume Preview</h2>

      <div className={`resume-paper ${selectedTemplate}`}>
        <header className="resume-header">

  {resumeData.photo &&
    [
      "modern",
      "executive",
      "creative",
      "elegant",
      "two-column",
      "dark-premium"
    ].includes(selectedTemplate) && (
      <img
        src={resumeData.photo}
        alt="Profile"
        className="resume-profile-photo"
      />
    )}
          <h1>
            {resumeData.fullName || "Your Name"}
          </h1>

          <p>
            {resumeData.jobTitle || "Software Engineer"}
          </p>

         <div className="contact-info">

  <span>
    {resumeData.email}
  </span>

  <span>
    {resumeData.phone}
  </span>


  {resumeData.linkedin && (
  <a
    href={
      resumeData.linkedin.startsWith("http://") ||
      resumeData.linkedin.startsWith("https://")
        ? resumeData.linkedin
        : `https://${resumeData.linkedin}`
    }
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    <FaLinkedin />
    LinkedIn
  </a>
)}


  {resumeData.github && (
  <a
    href={
      resumeData.github.startsWith("http://") ||
      resumeData.github.startsWith("https://")
        ? resumeData.github
        : `https://${resumeData.github}`
    }
    target="_blank"
    rel="noopener noreferrer"
    className="social-link"
  >
    <FaGithub />
    GitHub
  </a>
)}
</div>
        </header>

        <section className="resume-section">
          <h3>Profile</h3>

          <p>
            {resumeData.summary ||
              "Your professional summary will appear here."}
          </p>
        </section>

       <section className="resume-section">
  <h3>Education</h3>

  {resumeData.education.length === 0 ? (
    <p>Your education information will appear here.</p>
  ) : (
    resumeData.education.map((education, index) => (
      <div className="education-preview" key={index}>
        <h4>{education.degree}</h4>

        <p>{education.institution}</p>

        <span>{education.year}</span>
      </div>
    ))
  )}
</section>

        <section className="resume-section">

  <h3>Experience</h3>

  {resumeData.experience.length === 0 ? (

    <p>
      Your work experience will appear here.
    </p>

  ) : (

    resumeData.experience.map((experience, index) => (

      <div
        className="experience-preview"
        key={index}
      >

        <h4>
          {experience.jobTitle || "Job Title"}
        </h4>

        <p>
          {experience.company || "Company"}
        </p>

        <p>
          {experience.startYear || "Start"} -{" "}
          {experience.endYear || "Present"}
        </p>

        <p>
          {experience.description || "Job description"}
        </p>

      </div>

    ))

  )}

</section>

        <section className="resume-section">

  <h3>Skills</h3>

  {resumeData.skills.length === 0 ? (

    <p>
      Your skills will appear here.
    </p>

  ) : (

    <ul className="skills-list">

      {(resumeData.skills || []).map((skill, index) => (

        <li key={index}>
          {skill || "Skill"}
        </li>

      ))}

    </ul>

  )}

</section>

{/* ================= PROJECTS ================= */}

<section className="resume-section">

  <h3>Projects</h3>

  {(!resumeData.projects || resumeData.projects.length === 0) ? (

    <p>
      Your projects will appear here.
    </p>

  ) : (

    resumeData.projects.map((project, index) => (

      <div
        className="project-preview"
        key={index}
      >

        <h4>
          {project.name || "Project Name"}
        </h4>

        <p>
          <strong>Technologies:</strong>{" "}
          {project.technologies || "Technologies"}
        </p>

        <p>
          {project.description || "Project description"}
        </p>

       {project.link && (
  <p>
    <strong>Link:</strong>{" "}
    <a
      href={
        project.link.startsWith("http://") ||
        project.link.startsWith("https://")
          ? project.link
          : `https://${project.link}`
      }
      target="_blank"
      rel="noopener noreferrer"
    >
      View Project
    </a>
  </p>
)}

      </div>

    ))

  )}

</section>
      </div>

      
    </section>
  );
}

export default ResumePreview;