const ResumePreview = ({ data }) => {
  return (
    <div className="space-y-4">

      {/* Personal */}
      <h1 className="text-2xl font-bold">
        {data.personal.name || "Your Name"}
      </h1>

      <p>{data.personal.email}</p>
      <p>{data.personal.phone}</p>
      <p>{data.personal.linkedin}</p>

      <hr />

      <p>{data.personal.summary}</p>

      {/* Education */}
      <section>
        <h2 className="text-xl font-semibold">Education</h2>

        {data.education.map((edu, i) => (
          <div key={i}>
            <p className="font-medium">{edu.degree}</p>
            <p>{edu.institution}</p>
            <p className="text-sm text-gray-500">{edu.year}</p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold">Skills</h2>

        <ul className="list-disc ml-5">
          {data.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-xl font-semibold">Experience</h2>

        {data.experience.map((exp, i) => (
          <div key={i}>
            <p className="font-medium">{exp.role}</p>
            <p>{exp.company}</p>
            <p className="text-sm text-gray-500">{exp.duration}</p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold">Projects</h2>

        {data.projects.map((proj, i) => (
          <div key={i}>
            <p className="font-medium">{proj.title}</p>
            <p>{proj.description}</p>
          </div>
        ))}
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-xl font-semibold">Certifications</h2>

        <ul className="list-disc ml-5">
          {data.certifications.map((cert, i) => (
            <li key={i}>{cert}</li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default ResumePreview;
