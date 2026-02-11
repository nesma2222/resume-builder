import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/editor">Editor</Link>
      <Link to="/preview">Preview</Link>
    </div>
  );
};

export default Navbar;
