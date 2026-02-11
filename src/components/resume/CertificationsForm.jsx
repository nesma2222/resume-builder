import { useState } from "react";

const CertificationsForm = ({ certifications, setResumeData }) => {

  const [cert, setCert] = useState("");

  const addCertification = () => {
    if (!cert) return;

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
        className="bg-blue-500 text-grey px-3 py-1 rounded"
      >
        Add Certification
      </button>
    </div>
  );
};

export default CertificationsForm;
