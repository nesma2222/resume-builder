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
    if (!project.title || !project.description) return; // Prevent empty projects
    setResumeData(prev => ({
      ...prev,
      projects: [...prev.projects, project]
    }));

    setProject({ title: "", description: "" });
  };

  return (
    <div className="space-y-4 mt-6">

      <h3 className="text-lg font-semibold">Projects</h3>

      <input
        name="title"
        placeholder="Project Title"
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={project.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Project Description"
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        value={project.description}
        onChange={handleChange}
      />

      <button
        onClick={addProject}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
      >
        Add Project
      </button>

    </div>
  );
};

export default ProjectsForm;
