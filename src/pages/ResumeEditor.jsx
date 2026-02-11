import { useState } from "react";
import MainLayout from "../layouts/MainLayout";

import PersonalForm from "../components/resume/PersonalForm";
import EducationForm from "../components/resume/EducationForm";
import SkillsForm from "../components/resume/SkillsForm";
import ExperienceForm from "../components/resume/ExperienceForm";
import ProjectsForm from "../components/resume/ProjectsForm";
import CertificationsForm from "../components/resume/CertificationsForm";
import ResumePreview from "../components/resume/ResumePreview";

const ResumeEditor = () => {

  // ⭐ Step State
  const [step, setStep] = useState(1);

  // ⭐ Resume Data
  const [resumeData, setResumeData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      summary: ""
    },
    education: [],
    skills: [],
    experience: [],
    projects: [],
    certifications: []
  });

  // ⭐ Step Navigation
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // ⭐ Step Content Renderer
  const renderStep = () => {

    switch (step) {

      case 1:
        return (
          <PersonalForm
            personal={resumeData.personal}
            setResumeData={setResumeData}
          />
        );

      case 2:
        return (
          <EducationForm
            education={resumeData.education}
            setResumeData={setResumeData}
          />
        );

      case 3:
        return (
          <ExperienceForm
            experience={resumeData.experience}
            setResumeData={setResumeData}
          />
        );

      case 4:
        return (
          <SkillsForm
            skills={resumeData.skills}
            setResumeData={setResumeData}
          />
        );

      case 5:
        return (
          <ProjectsForm
            projects={resumeData.projects}
            setResumeData={setResumeData}
          />
        );

      case 6:
        return (
          <CertificationsForm
            certifications={resumeData.certifications}
            setResumeData={setResumeData}
          />
        );

      case 7:
        return <ResumePreview data={resumeData} />;

      default:
        return null;
    }
  };

  const steps = [
    "Personal",
    "Education",
    "Experience",
    "Skills",
    "Projects",
    "Certifications",
    "Preview"
  ];

  return (
    <MainLayout>

      <div className="bg-white p-8 rounded-xl shadow">

        {/*  Step Indicator */}
        <div className="flex justify-between mb-8">

          {steps.map((label, index) => (
            <div
              key={index}
              className={`flex-1 text-center text-sm font-medium ${
                step === index + 1
                  ? "text-purple-600"
                  : "text-gray-400"
              }`}
            >
              {label}
            </div>
          ))}

        </div>

        {/*  Step Content */}
        {renderStep()}

        {/*  Navigation Buttons */}
        <div className="flex justify-between mt-8">

          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Back
            </button>
          )}

          {step < steps.length && (
            <button
              onClick={nextStep}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Next
            </button>
          )}

        </div>

      </div>

    </MainLayout>
  );
};

export default ResumeEditor;
