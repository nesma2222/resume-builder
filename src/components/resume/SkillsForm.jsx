import { useState } from "react";

const SkillsForm = ({ skills, setResumeData }) => {

  const [skill, setSkill] = useState("");

  const addSkill = () => {
    if (!skill) return;

    setResumeData(prev => ({
      ...prev,
      skills: [...prev.skills, skill]
    }));

    setSkill("");
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Skills</h3>

      <input
        type="text"
        placeholder="Enter skill"
        className="w-full p-2 border rounded mb-2"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        onClick={addSkill}
        className="bg-blue-500 text-grey px-3 py-1 rounded"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsForm;
