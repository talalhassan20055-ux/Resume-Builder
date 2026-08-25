function ModernMinimal({ resumeData }) {
  return (
    <div className="template-modern-minimal">

      {/* Header */}
      <header className="modern-header">
        <h1>{resumeData.fullName || "Your Name"}</h1>

        <p>
          {resumeData.jobTitle || "Professional Title"}
        </p>

        <div className="modern-contact">
          {resumeData.email && <span>{resumeData.email}</span>}
          {resumeData.phone && <span>{resumeData.phone}</span>}
          {resumeData.address && <span>{resumeData.address}</span>}
        </div>
      </header>

      {/* Profile */}
      {resumeData.summary && (
        <section className="modern-section">
          <h2>Profile</h2>
          <p>{resumeData.summary}</p>
        </section>
      )}

      {/* Experience */}
      {resumeData.experience &&
        resumeData.experience.length > 0 && (
          <section className="modern-section">
            <h2>Experience</h2>

            {resumeData.experience.map((experience, index) => (
              <div
                className="modern-item"
                key={index}
              >
                <div className="modern-item-heading">
                  <div>
                    <h3>
                      {experience.jobTitle}
                    </h3>

                    <p className="modern-company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="modern-date">
                    {experience.startYear} -{" "}
                    {experience.endYear || "Present"}
                  </span>
                </div>

                {experience.description && (
                  <p>
                    {experience.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

      {/* Education */}
      {resumeData.education &&
        resumeData.education.length > 0 && (
          <section className="modern-section">
            <h2>Education</h2>

            {resumeData.education.map((education, index) => (
              <div
                className="modern-item"
                key={index}
              >
                <div className="modern-item-heading">
                  <div>
                    <h3>
                      {education.degree}
                    </h3>

                    <p className="modern-company">
                      {education.institution}
                    </p>
                  </div>

                  <span className="modern-date">
                    {education.year}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

      {/* Skills */}
      {resumeData.skills &&
        resumeData.skills.length > 0 && (
          <section className="modern-section">
            <h2>Skills</h2>

            <div className="modern-skills">
              {resumeData.skills.map((skill, index) => (
                <span key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

      {/* Projects */}
      {resumeData.projects &&
        resumeData.projects.length > 0 && (
          <section className="modern-section">
            <h2>Projects</h2>

            {resumeData.projects.map((project, index) => (
              <div
                className="modern-item"
                key={index}
              >
                <h3>{project.title}</h3>

                {project.description && (
                  <p>{project.description}</p>
                )}

                {project.technologies && (
                  <p className="modern-tech">
                    {project.technologies}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

    </div>
  );
}

export default ModernMinimal;