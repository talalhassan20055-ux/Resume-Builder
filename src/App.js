import html2pdf from "html2pdf.js";
import { useEffect, useState } from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import Developer from "./components/Developer";



// Anime background images
const animeBackgrounds = [
  "/images/image/anime-bg1.png",
  "/images/image/anime-bg2.png",
  "/images/image/anime-bg3.png",
  "/images/image/anime-bg4.png",
  "/images/image/anime-bg5.png",
  "/images/image/anime-bg6.png",
  "/images/image/anime-bg7.png",
  "/images/image/anime-bg8.png",
  "/images/image/anime-bg9.png",
  "/images/image/anime-bg10.png",
  "/images/image/anime-bg11.png",
  "/images/image/anime-bg12.png",
  "/images/image/anime-bg13.png",
  "/images/image/anime-bg14.png",
  "/images/image/anime-bg15.png",
  "/images/image/anime-bg16.png",
  "/images/image/anime-bg17.png",
  "/images/image/anime-bg18.png",
  "/images/image/anime-bg19.png",
  "/images/image/anime-bg20.png",
];

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
 



const [backgroundIndex, setBackgroundIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setBackgroundIndex((prev) => (prev + 1) % animeBackgrounds.length);
  }, 12000); // 8 seconds

  return () => clearInterval(interval);
}, []);

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

    enableLinks: true,

    html2canvas: {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#ffffff",
      logging: false,

      scrollX: 0,
      scrollY: 0,
      
    },

    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      compress: true,
    },

    pagebreak: {
      mode: ["css", "legacy"],
      avoid: [
        ".education-preview",
        ".experience-preview",
        ".project-preview",
        ".skill-item",
      ],
    },
  };

  try {
    resume.scrollIntoView({
      behavior: "auto",
      block: "start",
    });

    await html2pdf()
      .set(options)
      .from(resume)
      .save();

  } catch (error) {
    console.error("PDF generation error:", error);
  }
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
    <div
  className="app"
  style={{
    backgroundImage: `
  linear-gradient(
    rgba(5, 10, 25, 0.45),
    rgba(5, 10, 25, 0.60)
  ),
  url("${animeBackgrounds[backgroundIndex]}")
`,
  }}
>
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
      <Developer />
    </div>
  );
}

export default App;