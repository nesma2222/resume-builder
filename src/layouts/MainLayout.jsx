import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-hidden">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">

          {/* Centered Professional Container */}
          <div className="max-w-6xl mx-auto">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
};

export default MainLayout;
