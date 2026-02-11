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
    if (!exp.company || !exp.role || !exp.duration) return; // simple validation

    setResumeData(prev => ({
      ...prev,
      experience: [...prev.experience, exp]
    }));

    setExp({ company: "", role: "", duration: "" });
  };

  return (
    <div className="space-y-2 mt-6">

      <h3 className="text-lg font-semibold">Experience</h3>

      <input
        name="company"
        placeholder="Company"
        className="w-full p-2 border rounded"
        value={exp.company}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        className="w-full p-2 border rounded"
        value={exp.role}
        onChange={handleChange}
      />

      <input
        name="duration"
        placeholder="Duration"
        className="w-full p-2 border rounded"
        value={exp.duration}
        onChange={handleChange}
      />

      <button
        onClick={addExperience}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Experience
      </button>

      {/* Live added experience */}
      {experience.length > 0 && (
        <ul className="mt-2 list-disc ml-5">
          {experience.map((expItem, index) => (
            <li key={index}>
              {expItem.role} at {expItem.company} ({expItem.duration})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExperienceForm;
