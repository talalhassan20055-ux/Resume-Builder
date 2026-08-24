function ResumeForm({
  resumeData,
  setResumeData,
  errors,
  setErrors,
}) {

  // ================= PERSONAL INFORMATION =================

  function handleChange(event) {
  const { name, value } = event.target;

  setResumeData({
    ...resumeData,
    [name]: value,
  });

  let errorMessage = "";

  if (name === "fullName" && !value.trim()) {
    errorMessage = "Full name is required";
  }

  if (name === "jobTitle" && !value.trim()) {
    errorMessage = "Job title is required";
  }

  if (name === "email") {
    if (!value.trim()) {
      errorMessage = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ) {
      errorMessage = "Enter a valid email";
    }
  }

  if (name === "phone" && !value.trim()) {
    errorMessage = "Phone number is required";
  }

  setErrors({
    ...errors,
    [name]: errorMessage,
  });
}


  // ================= EDUCATION =================

  function addEducation() {
    const newEducation = {
      degree: "",
      institution: "",
      year: "",
    };

    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
  }


  function removeEducation(indexToRemove) {
    const updatedEducation = resumeData.education.filter(
      (_, index) => index !== indexToRemove
    );

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  }


  function handleEducationChange(index, event) {
    const { name, value } = event.target;

    const updatedEducation = [...resumeData.education];

    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };

    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  }


  // ================= EXPERIENCE =================

  function addExperience() {
    const newExperience = {
      jobTitle: "",
      company: "",
      startYear: "",
      endYear: "",
      description: "",
    };

    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience],
    });
  }


  function removeExperience(indexToRemove) {
    const updatedExperience = resumeData.experience.filter(
      (_, index) => index !== indexToRemove
    );

    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  }


  function handleExperienceChange(index, event) {
    const { name, value } = event.target;

    const updatedExperience = [...resumeData.experience];

    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };

    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  }


  // ================= SKILLS =================

  function addSkill() {
    const newSkill = "";

    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill],
    });
  }


  function removeSkill(indexToRemove) {
    const updatedSkills = resumeData.skills.filter(
      (_, index) => index !== indexToRemove
    );

    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  }


  function handleSkillChange(index, event) {
    const updatedSkills = [...resumeData.skills];

    updatedSkills[index] = event.target.value;

    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  }
 function addProject() {
  const newProject = {
    name: "",
    technologies: "",
    description: "",
    link: "",
  };

  setResumeData({
    ...resumeData,
    projects: [
      ...(resumeData.projects || []),
      newProject,
    ],
  });
}

// Remove Project
function removeProject(indexToRemove) {
  const updatedProjects = resumeData.projects.filter(
    (_, index) => index !== indexToRemove
  );

  setResumeData({
    ...resumeData,
    projects: updatedProjects,
  });
}


// Update Project
function handleProjectChange(index, event) {
  const { name, value } = event.target;

  const updatedProjects = [...resumeData.projects];

  updatedProjects[index] = {
    ...updatedProjects[index],
    [name]: value,
  };

  setResumeData({
    ...resumeData,
    projects: updatedProjects,
  });
}


  // ================= UI =================

  return (
    <section className="resume-form">

      <h2>Build Your Resume</h2>

      <p className="form-description">
        Enter your personal information.
      </p>


      {/* ================= PERSONAL INFORMATION ================= */}

      <div className="form-section">

        <h3>Personal Information</h3>

        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          value={resumeData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
  <p className="error-message">
    {errors.fullName}
  </p>
)}


        <label>Job Title</label>

        <input
          type="text"
          name="jobTitle"
          value={resumeData.jobTitle}
          onChange={handleChange}
          placeholder="e.g. Software Engineer"
        />


        <label>Email</label>

        <input
          type="email"
          name="email"
          value={resumeData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
            {errors.email && (
  <p className="error-message">
    {errors.email}
  </p>
)}

        <label>Phone</label>

        <input
          type="tel"
          name="phone"
          value={resumeData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
        {errors.phone && (
         <p className="error-message">
         {errors.phone}
         </p>
         ) }


        <label>Address</label>

        <input
          type="text"
          name="address"
          value={resumeData.address}
          onChange={handleChange}
          placeholder="Enter your address"
        />


        <label>LinkedIn</label>

        <input
          type="text"
          name="linkedin"
          value={resumeData.linkedin}
          onChange={handleChange}
          placeholder="LinkedIn profile"
        />


        <label>GitHub</label>

        <input
          type="text"
          name="github"
          value={resumeData.github}
          onChange={handleChange}
          placeholder="GitHub profile"
        />


        <label>Professional Summary</label>

        <textarea
          name="summary"
          value={resumeData.summary}
          onChange={handleChange}
          placeholder="Write a short professional summary"
          rows="5"
        />

      </div>


      {/* ================= EDUCATION ================= */}

      <div className="form-section">

        <div className="section-heading">

          <h3>Education</h3>

          <button
            type="button"
            className="add-button"
            onClick={addEducation}
          >
            + Add Education
          </button>

        </div>


        {resumeData.education.map((education, index) => (

          <div
            className="education-item"
            key={index}
          >

            <h4>
              Education {index + 1}
            </h4>


            <label>Degree</label>

            <input
              type="text"
              name="degree"
              value={education.degree}
              onChange={(event) =>
                handleEducationChange(index, event)
              }
              placeholder="e.g. BS Software Engineering"
            />


            <label>Institution</label>

            <input
              type="text"
              name="institution"
              value={education.institution}
              onChange={(event) =>
                handleEducationChange(index, event)
              }
              placeholder="e.g. University of Mianwali"
            />


            <label>Year</label>

            <input
              type="text"
              name="year"
              value={education.year}
              onChange={(event) =>
                handleEducationChange(index, event)
              }
              placeholder="e.g. 2026"
            />


            <button
              type="button"
              className="remove-button"
              onClick={() => removeEducation(index)}
            >
              Remove
            </button>

          </div>

        ))}

      </div>


      {/* ================= EXPERIENCE ================= */}

      <div className="form-section">

        <div className="section-heading">

          <h3>Experience</h3>

          <button
            type="button"
            className="add-button"
            onClick={addExperience}
          >
            + Add Experience
          </button>

        </div>


        {resumeData.experience.map((experience, index) => (

          <div
            className="experience-item"
            key={index}
          >

            <h4>
              Experience {index + 1}
            </h4>


            <label>Job Title</label>

            <input
              type="text"
              name="jobTitle"
              value={experience.jobTitle}
              onChange={(event) =>
                handleExperienceChange(index, event)
              }
              placeholder="e.g. Frontend Developer"
            />
            {errors.jobTitle && (
  <p className="error-message">
    {errors.jobTitle}
  </p>
)}


            <label>Company</label>

            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={(event) =>
                handleExperienceChange(index, event)
              }
              placeholder="e.g. ABC Software House"
            />


            <label>Start Year</label>

            <input
              type="text"
              name="startYear"
              value={experience.startYear}
              onChange={(event) =>
                handleExperienceChange(index, event)
              }
              placeholder="e.g. 2024"
            />


            <label>End Year</label>

            <input
              type="text"
              name="endYear"
              value={experience.endYear}
              onChange={(event) =>
                handleExperienceChange(index, event)
              }
              placeholder="e.g. 2026"
            />


            <label>Description</label>

            <textarea
              name="description"
              value={experience.description}
              onChange={(event) =>
                handleExperienceChange(index, event)
              }
              placeholder="Describe your responsibilities and achievements"
              rows="4"
            />


            <button
              type="button"
              className="remove-button"
              onClick={() => removeExperience(index)}
            >
              Remove
            </button>

          </div>

        ))}

      </div>


      {/* ================= SKILLS ================= */}

      <div className="form-section">

        <div className="section-heading">

          <h3>Skills</h3>

          <button
            type="button"
            className="add-button"
            onClick={addSkill}
          >
            + Add Skill
          </button>

        </div>


        {resumeData.skills.map((skill, index) => (

          <div
            className="skill-item"
            key={index}
          >

            <label>
              Skill {index + 1}
            </label>


            <input
              type="text"
              value={skill}
              onChange={(event) =>
                handleSkillChange(index, event)
              }
              placeholder="e.g. JavaScript"
            />


            <button
              type="button"
              className="remove-button"
              onClick={() => removeSkill(index)}
            >
              Remove
            </button>

          </div>

        ))}

      </div>
      {/* ================= PROJECTS ================= */}

<div className="form-section">

  <div className="section-heading">

    <h3>Projects</h3>

    <button
      type="button"
      className="add-button"
      onClick={addProject}
    >
      + Add Project
    </button>

  </div>


  {(resumeData.projects || []).map((project, index) => (

    <div
      className="project-item"
      key={index}
    >

      <h4>
        Project {index + 1}
      </h4>


      <label>Project Name</label>

      <input
        type="text"
        name="name"
        value={project.name}
        onChange={(event) =>
          handleProjectChange(index, event)
        }
        placeholder="e.g. Resume Builder"
      />


      <label>Technologies</label>

      <input
        type="text"
        name="technologies"
        value={project.technologies}
        onChange={(event) =>
          handleProjectChange(index, event)
        }
        placeholder="e.g. React, JavaScript, CSS"
      />


      <label>Description</label>

      <textarea
        name="description"
        value={project.description}
        onChange={(event) =>
          handleProjectChange(index, event)
        }
        placeholder="Describe your project"
        rows="4"
      />


      <label>Project Link</label>

      <input
        type="text"
        name="link"
        value={project.link}
        onChange={(event) =>
          handleProjectChange(index, event)
        }
        placeholder="https://github.com/username/project"
      />


      <button
        type="button"
        className="remove-button"
        onClick={() => removeProject(index)}
      >
        Remove
      </button>

    </div>

  ))}

</div>

    </section>
  );
}

export default ResumeForm;