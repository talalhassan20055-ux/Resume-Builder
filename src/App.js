import html2pdf from "html2pdf.js";
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
       photo: "",
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

  async function handlePrint() {
  const isValid = validateResume();

  if (!isValid) {
    return;
  }

  const resume = document.querySelector(".resume-paper");

  if (!resume) {
    return;
  }

  const options = {
    margin: 0,
    filename: `${resumeData.fullName || "resume"}.pdf`,

    image: {
      type: "jpeg",
      quality: 0.98,
    },

    html2canvas: {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  await html2pdf()
    .set(options)
    .from(resume)
    .save();
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
     photo: "",
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

  <div className="template-buttons">

    {/* 1. Classic Professional */}
    <button
      type="button"
      className={selectedTemplate === "classic" ? "active" : ""}
      onClick={() => setSelectedTemplate("classic")}
    >
      Classic
    </button>

    {/* 2. Modern */}
    <button
      type="button"
      className={selectedTemplate === "modern" ? "active" : ""}
      onClick={() => setSelectedTemplate("modern")}
    >
      Modern
    </button>

    {/* 3. Minimal */}
    <button
      type="button"
      className={selectedTemplate === "minimal" ? "active" : ""}
      onClick={() => setSelectedTemplate("minimal")}
    >
      Minimal
    </button>

    {/* 4. Executive */}
    <button
      type="button"
      className={selectedTemplate === "executive" ? "active" : ""}
      onClick={() => setSelectedTemplate("executive")}
    >
      Executive
    </button>

    {/* 5. Tech Developer */}
    <button
      type="button"
      className={selectedTemplate === "tech" ? "active" : ""}
      onClick={() => setSelectedTemplate("tech")}
    >
      Tech Developer
    </button>

    {/* 6. Creative Portfolio */}
    <button
      type="button"
      className={selectedTemplate === "creative" ? "active" : ""}
      onClick={() => setSelectedTemplate("creative")}
    >
      Creative
    </button>

    {/* 7. Elegant */}
    <button
      type="button"
      className={selectedTemplate === "elegant" ? "active" : ""}
      onClick={() => setSelectedTemplate("elegant")}
    >
      Elegant
    </button>

    {/* 8. Compact One Page */}
    <button
      type="button"
      className={selectedTemplate === "compact" ? "active" : ""}
      onClick={() => setSelectedTemplate("compact")}
    >
      Compact
    </button>

    {/* 9. Two Column */}
    <button
      type="button"
      className={selectedTemplate === "two-column" ? "active" : ""}
      onClick={() => setSelectedTemplate("two-column")}
    >
      Two Column
    </button>

    {/* 10. Academic */}
    <button
      type="button"
      className={selectedTemplate === "academic" ? "active" : ""}
      onClick={() => setSelectedTemplate("academic")}
    >
      Academic
    </button>

    {/* 11. Dark Premium */}
    <button
      type="button"
      className={selectedTemplate === "dark-premium" ? "active" : ""}
      onClick={() => setSelectedTemplate("dark-premium")}
    >
      Dark Premium
    </button>

  </div>
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