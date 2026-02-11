const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        {children}
      </div>

    </div>
  );
};

export default AuthLayout;
//resuable wrapper..for login and register