import { useState } from "react";

const ExperienceForm = ({ experience, setResumeData }) => {

  const [exp, setExp] = useState({
    company: "",
    role: "",
    duration: ""
  });

  const handleChange = (e) => {
    setExp({ ...exp, [e.target.name]: e.target.value });
  };

  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, exp]
    }));

    setExp({ company: "", role: "", duration: "" });
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Experience</h3>

      <input
        name="company"
        placeholder="Company"
        className="w-full p-2 border rounded mb-2"
        value={exp.company}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        className="w-full p-2 border rounded mb-2"
        value={exp.role}
        onChange={handleChange}
      />

      <input
        name="duration"
        placeholder="Duration"
        className="w-full p-2 border rounded mb-2"
        value={exp.duration}
        onChange={handleChange}
      />

      <button
        onClick={addExperience}
        className="bg-blue-500 text-grey px-3 py-1 rounded"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
