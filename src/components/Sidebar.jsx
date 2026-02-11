import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, Eye } from "lucide-react";

const Sidebar = () => {

  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={18} />
    },
    {
      name: "Resume Editor",
      path: "/editor",
      icon: <FileText size={18} />
    },
    {
      name: "Preview",
      path: "/preview",
      icon: <Eye size={18} />
    }
  ];

  return (
    <div className="w-64 hidden md:flex flex-col bg-gradient-to-b from-purple-700 to-indigo-800 text-white min-h-screen p-6">

      {/* Logo / Branding */}
      <h2 className="text-2xl font-bold mb-10 tracking-wide">
        Resume Builder
      </h2>

      {/* Navigation */}
      <nav className="space-y-2">

        {menuItems.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200
              
              ${location.pathname === item.path
                ? "bg-white text-purple-700 font-semibold shadow"
                : "hover:bg-white/10"
              }
              
            `}
          >
            {item.icon}
            {item.name}
          </Link>

        ))}

      </nav>

    </div>
  );
};

export default Sidebar;
