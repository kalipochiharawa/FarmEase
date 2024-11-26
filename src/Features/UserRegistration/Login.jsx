import React, { useState } from "react";
import Tomato from "../LandingPage/Subcomponents/tomato.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Base API URL from environment variables
  const API_BASE_URL =
    process.env.REACT_APP_API_BASE_URL || "https://mlimiaguleonline.onrender.com";

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Attempt to parse JSON error
        throw new Error(errorData.message || "Failed to authenticate. Please try again.");
      }

      const data = await response.json();

      // Save token to localStorage or another secure location
      localStorage.setItem("authToken", data.accessToken);

      // Redirect to dashboard or authenticated route
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2 bg-cover bg-center relative">
        <img
          src={Tomato}
          alt="Tomatoes"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section with Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Login</h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded mb-4">{error}</p>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-6 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <a
              href="/forgot-password"
              className="text-green-500 hover:underline font-semibold"
            >
              Forgot Password?
            </a>
          </div>
        </form>

        {/* Redirect to Register */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-green-500 font-semibold">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
