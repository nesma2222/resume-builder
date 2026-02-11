import { useState } from "react";

const CertificationsForm = ({ certifications, setResumeData }) => {

  const [cert, setCert] = useState("");

  const addCertification = () => {
    if (!cert.trim()) return;

    setResumeData(prev => ({
      ...prev,
      certifications: [...prev.certifications, cert]
    }));

    setCert("");
  };

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-2">Certifications</h3>

      <input
        type="text"
        placeholder="Certification Name"
        className="w-full p-2 border rounded mb-2"
        value={cert}
        onChange={(e) => setCert(e.target.value)}
      />

      <button
        onClick={addCertification}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Add Certification
      </button>

      {/* Show added certifications */}
      <ul className="mt-3 list-disc ml-5">
        {certifications.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CertificationsForm;
