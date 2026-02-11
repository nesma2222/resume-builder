const ResumePreview = ({ data }) => {
  return (
    <div className="space-y-6">

      {/* Personal Info */}
      <section className="p-4 bg-white shadow rounded-md">
        <h1 className="text-3xl font-bold mb-1">
          {data.personal.name || "Your Name"}
        </h1>
        <p className="text-gray-700">{data.personal.email}</p>
        <p className="text-gray-700">{data.personal.phone}</p>
        <p className="text-gray-700">{data.personal.linkedin}</p>
        <p className="mt-2 text-gray-600">{data.personal.summary}</p>
      </section>

      {/* Education */}
      <section className="p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        {data.education.length === 0 ? (
          <p className="text-gray-500">No education added</p>
        ) : (
          data.education.map((edu, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{edu.degree}</p>
              <p>{edu.college}</p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))
        )}
      </section>

      {/* Skills */}
      <section className="p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        {data.skills.length === 0 ? (
          <p className="text-gray-500">No skills added</p>
        ) : (
          <ul className="list-disc ml-5">
            {data.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        )}
      </section>

      {/* Experience */}
      <section className="p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        {data.experience.length === 0 ? (
          <p className="text-gray-500">No experience added</p>
        ) : (
          data.experience.map((exp, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{exp.role}</p>
              <p>{exp.company}</p>
              <p className="text-gray-500 text-sm">{exp.duration}</p>
            </div>
          ))
        )}
      </section>

      {/* Projects */}
      <section className="p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        {data.projects.length === 0 ? (
          <p className="text-gray-500">No projects added</p>
        ) : (
          data.projects.map((proj, i) => (
            <div key={i} className="mb-2">
              <p className="font-medium">{proj.title}</p>
              <p>{proj.description}</p>
            </div>
          ))
        )}
      </section>

      {/* Certifications */}
      <section className="p-4 bg-white shadow rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        {data.certifications.length === 0 ? (
          <p className="text-gray-500">No certifications added</p>
        ) : (
          <ul className="list-disc ml-5">
            {data.certifications.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        )}
      </section>

    </div>
  );
};

export default ResumePreview;
