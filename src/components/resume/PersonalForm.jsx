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
    <div className="space-y-4 mt-4">

      <h3 className="text-lg font-semibold">Personal Information</h3>

      <input
        name="name"
        placeholder="Full Name"
        value={personal.name}
        onChange={handleChange}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="email"
        placeholder="Email"
        value={personal.email}
        onChange={handleChange}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="phone"
        placeholder="Phone"
        value={personal.phone}
        onChange={handleChange}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        name="linkedin"
        placeholder="LinkedIn"
        value={personal.linkedin}
        onChange={handleChange}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={personal.summary}
        onChange={handleChange}
        className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

    </div>
  );
};

export default PersonalForm;
