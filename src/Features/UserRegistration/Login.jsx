import React, { useState } from "react";
import Tomato from "../../Assets/Images/Tomato.png";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to authenticate");
      }

      // Save token to localStorage or context (if needed)
      localStorage.setItem("authToken", data.token);

      // Redirect to dashboard or authenticated route
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
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

        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="text"
              name="company"
              placeholder="Your Company/Farm name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <div className="relative">
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
              Forget Password?
            </a>
          </div>
        </form>

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

export default SignUp;
