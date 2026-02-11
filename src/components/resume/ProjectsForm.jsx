import { useState } from "react";

const ProjectsForm = ({ projects, setResumeData }) => {

  const [project, setProject] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const addProject = () => {
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, project]
    }));

    setProject({ title: "", description: "" });
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Projects</h3>

      <input
        name="title"
        placeholder="Project Title"
        className="w-full p-2 border rounded mb-2"
        value={project.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Project Description"
        className="w-full p-2 border rounded mb-2"
        value={project.description}
        onChange={handleChange}
      />

      <button
        onClick={addProject}
        className="bg-blue-500 text-grey px-3 py-1 rounded"
      >
        Add Project
      </button>
    </div>
  );
};

export default ProjectsForm;
