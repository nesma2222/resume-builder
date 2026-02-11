const PersonalForm = ({ personal, setResumeData }) => {

  const handleChange = (e) => {
    setResumeData(prev => ({
      ...prev,
      personal: {
        ...prev.personal,
        [e.target.name]: e.target.value
      }
    }));
  };

  return (
    <div className="space-y-4">

      <input
        name="name"
        placeholder="Full Name"
        value={personal.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="email"
        placeholder="Email"
        value={personal.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={personal.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <input
        name="linkedin"
        placeholder="LinkedIn"
        value={personal.linkedin}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

      <textarea
        name="summary"
        placeholder="Summary"
        value={personal.summary}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />

    </div>
  );
};

export default PersonalForm;
