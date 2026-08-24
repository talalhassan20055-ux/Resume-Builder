import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";

function App() {

  const [resumeData, setResumeData] = useState(() => {

    const savedResume = localStorage.getItem("resumeData");

    if (savedResume) {
      return JSON.parse(savedResume);
    }

    return {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
      summary: "",
      education: [],
      experience: [],
      skills: [],
      projects: [],
    };
  });


  const [selectedTemplate, setSelectedTemplate] =
    useState("classic");
  const [errors, setErrors] = useState({});

  useEffect(() => {

    localStorage.setItem(
      "resumeData",
      JSON.stringify(resumeData)
    );

  }, [resumeData]);

  function validateResume() {
  const newErrors = {};

  if (!resumeData.fullName.trim()) {
    newErrors.fullName = "Full name is required";
  }

  if (!resumeData.jobTitle.trim()) {
    newErrors.jobTitle = "Job title is required";
  }

  if (!resumeData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(resumeData.email)
  ) {
    newErrors.email = "Enter a valid email";
  }

  if (!resumeData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
}

  function handlePrint() {
  const isValid = validateResume();

  if (!isValid) {
    return;
  }

  window.print();
}
function resetResume() {
  const emptyResume = {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    summary: "",
    education: [],
    experience: [],
    skills: [],
    projects: [],
  };

  setResumeData(emptyResume);

  localStorage.removeItem("resumeData");
}

  return (
    <div className="app">
      <Navbar />
      <div className="template-selector">

  <h3>Choose Template</h3>

  <button
    type="button"
    className={selectedTemplate === "classic" ? "active" : ""}
    onClick={() => setSelectedTemplate("classic")}
  >
    Classic
  </button>

  <button
    type="button"
    className={selectedTemplate === "modern" ? "active" : ""}
    onClick={() => setSelectedTemplate("modern")}
  >
    Modern
  </button>

  <button
    type="button"
    className={selectedTemplate === "minimal" ? "active" : ""}
    onClick={() => setSelectedTemplate("minimal")}
  >
    Minimal
  </button>

</div>
<button
  type="button"
  className="print-button"
  onClick={handlePrint}
>
  🖨 Print / Save PDF
</button>
<button
  type="button"
  className="reset-button"
  onClick={resetResume}
>
  🗑 Reset Resume
</button>
      <main className="builder-container">
        <ResumeForm
  resumeData={resumeData}
  setResumeData={setResumeData}
  errors={errors}
   setErrors={setErrors}
/>

        <ResumePreview
  resumeData={resumeData}
  selectedTemplate={selectedTemplate}
/>
      </main>
    </div>
  );
}

export default App;