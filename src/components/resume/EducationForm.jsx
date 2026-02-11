import { useState } from "react";

const EducationForm = ({ education, setResumeData }) => {

  const [edu, setEdu] = useState({
    college: "",
    degree: "",
    year: ""
  });

  const handleChange = (e) => {
    setEdu({
      ...edu,
      [e.target.name]: e.target.value
    });
  };

  const addEducation = () => {
    if (!edu.college || !edu.degree || !edu.year) return;

    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, edu]
    }));

    // Clear form
    setEdu({
      college: "",
      degree: "",
      year: ""
    });
  };

  return (
    <div className="space-y-4 mt-6">

      <h3 className="text-lg font-semibold">Education</h3>

      <input
        name="college"
        placeholder="College Name"
        value={edu.college}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="degree"
        placeholder="Degree"
        value={edu.degree}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="year"
        placeholder="Year"
        value={edu.year}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <button
        onClick={addEducation}
        className="bg-blue-500 text-grey px-4 py-2 rounded"
      >
        Add Education
      </button>

    </div>
  );
};

export default EducationForm;
