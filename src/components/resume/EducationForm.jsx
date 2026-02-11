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
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Education
      </button>

      {/* Live added education */}
      {education.length > 0 && (
        <ul className="mt-2 list-disc ml-5">
          {education.map((eduItem, index) => (
            <li key={index}>
              {eduItem.degree} - {eduItem.college} ({eduItem.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EducationForm;
