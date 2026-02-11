import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 hidden md:block bg-gray-900 text-white min-h-screen p-6">

      <h2 className="text-2xl font-bold mb-8">
        Resume Builder
      </h2>

      <nav className="space-y-4">

        <Link to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>

        <Link to="/editor" className="block hover:text-blue-400">
          Resume Editor
        </Link>

        <Link to="/preview" className="block hover:text-blue-400">
          Preview
        </Link>

      </nav>

    </div>
  );
};

export default Sidebar;
