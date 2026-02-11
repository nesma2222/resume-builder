import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Topbar = () => {

  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-white shadow p-4 flex justify-between">

      <h1 className="font-semibold text-lg">
        Dashboard
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-100 text-red-600 px-4 py-1 rounded hover:bg-red-200"
      >
        Logout
      </button>

    </div>
  );
};

export default Topbar;
