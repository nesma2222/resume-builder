import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { AuthContext } from "../context/AuthContext";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { email };

    login(userData);
    navigate("/dashboard");
  };

  return (
    <AuthLayout>

      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome Back
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-black p-3 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

      </form>

      <p className="text-center mt-4">
        Don’t have an account?
        <Link to="/register" className="text-blue-500 ml-1 font-semibold">
          Register
        </Link>
      </p>

    </AuthLayout>
  );
};

export default Login;
