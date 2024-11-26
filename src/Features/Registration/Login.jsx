import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen font-poppins bg-gray-100">
      {/* Left section (Image Background) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: "url('/Login-background.jpg')" }}
      >
        <div className="text-white p-6 lg:p-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Welcome Back!</h1>
          <p className="text-lg lg:text-xl">
            "Access your Farm Ease account to continue your journey. Whether you're buying or selling, we're here to support you. Simple, transparent, and impactful let's connect the agriculture industry together. Log in now and be part of the change!"   
          </p>
        </div>
      </div>

      {/* Right section (Form) */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form className="space-y-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              type="text"
              placeholder="Your Company/Farm Name"
            />
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              type="email"
              placeholder="Your Email"
            />
            
            {/* Password Field with Eye Icon */}
            <div className="relative">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
              >
                {passwordVisible ? "Hide" : "👁️"}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600"
              >
                Login
              </button>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/Buyer" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
