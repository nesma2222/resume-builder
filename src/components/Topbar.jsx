import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";

const Topbar = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm border-b">

      {/* Accent Line */}
      <div className="h-1 bg-gradient-to-r from-purple-600 to-sky-500"></div>

      <div className="flex items-center justify-between px-6 py-3">

        {/* Page Title */}
        <h1 className="font-semibold text-lg text-gray-700">
          Resume Builder Dashboard
        </h1>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Profile Avatar */}
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
            <User size={16} />
            <span className="text-sm">User</span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition"
          >
            <LogOut size={16} />
            Logout
          </button>

        </div>

      </div>

    </div>
  );
};

export default Topbar;
