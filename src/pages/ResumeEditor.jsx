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

  return (
    <MainLayout>

      <div className="grid md:grid-cols-2 gap-6">

        {/* FORM SIDE */}
        <div className="bg-white p-6 rounded-xl shadow space-y-6">

          <h2 className="text-xl font-semibold">
            Resume Details
          </h2>

          <PersonalForm
            personal={resumeData.personal}
            setResumeData={setResumeData}
          />

          <EducationForm
            education={resumeData.education}
            setResumeData={setResumeData}
          />

          <SkillsForm
            skills={resumeData.skills}
            setResumeData={setResumeData}
          />

          <ExperienceForm
            experience={resumeData.experience}
            setResumeData={setResumeData}
          />

          <ProjectsForm
            projects={resumeData.projects}
            setResumeData={setResumeData}
          />

          <CertificationsForm
            certifications={resumeData.certifications}
            setResumeData={setResumeData}
          />

        </div>

        {/* PREVIEW SIDE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            Resume Preview
          </h2>

          <ResumePreview data={resumeData} />
        </div>

      </div>

    </MainLayout>
  );
};

export default ResumeEditor;
