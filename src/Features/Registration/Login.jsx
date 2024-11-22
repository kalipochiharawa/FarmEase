import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex h-screen bg-gray-100">
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
                {passwordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.038a8.38 8.38 0 00-.98.962M21 12s-2.214 4.243-6.975 7.788M1.014 15.12C4.96 19.96 12 20 12 20s7.04 0 10.986-4.88M12 4a8.38 8.38 0 00-.982.961M2.032 10.803C3.193 9.072 5.566 7 12 7s8.807 2.072 9.968 3.803M8 12a4 4 0 118 0 4 4 0 01-8 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.232 15.232a6 6 0 01-8.464-8.464m1.207 12.02C3.214 16.243 1 12 1 12s2.214-4.243 6.975-7.788M22.212 4.788C18.354 2.015 12 2 12 2s-6.354 0-10.212 2.788m10.955 14.31C20.786 16.243 23 12 23 12s-2.214-4.243-6.975-7.788M8.768 8.768a6 6 0 018.464 8.464m-1.207-12.02C20.786 7.757 23 12 23 12s-2.214-4.243-6.975-7.788"
                    />
                  </svg>
                )}
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
