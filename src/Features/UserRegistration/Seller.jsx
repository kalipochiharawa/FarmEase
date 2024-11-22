import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Seller = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left section (Image Background with centered text) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Login-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-12">
          <h1 className="text-4xl font-bold mb-4 text-center">Sell your Products</h1>
          <p className="text-lg mb-6 text-center">at your desired cost</p>
          <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold">
            Register Now !!
          </button>
          {/* Dots for registration steps */}
          <div className="flex justify-center items-center mt-6 space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          </div>
        </div>
      </div>

      {/* Right section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 bg-white">
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: "33%" }}
          ></div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <div className="flex justify-center mb-4 space-x-8">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold flex items-center"
            onClick={() => navigate("/Seller")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
            Seller
          </button>
          <button
            className="bg-white border-2 border-yellow-500 text-yellow-500 py-3 px-8 rounded-lg text-lg font-semibold flex items-center"
            onClick={() => navigate("/Buyer")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 1c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
            Buyer
          </button>
        </div>
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
            type="text"
            placeholder="Type of Product"
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            type="text"
            placeholder="Where are you located"
          />
          {/* Password Field */}
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
                    d="M15.232 15.232a6 6 0 01-8.464-8.464m1.207 12.02C3.214 16.243 1 12 1 12s2.214-4.243 6.975-7.788M22.212 4.788C18.354 2.015 12 2 12 2s-6.354 0-10.212 2.788m10.955 14.31C20.786 16.243 23 12 23 12s-2.214-4.243-6.975-7.788M8.768 8.768a6 6 0 018.464 8.464m-1.207-12.02C20.786 7.757 23 12 23 12s-2.214-4.243-6.975-7.788"
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
          {/* Confirm Password Field */}
          <div className="relative">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {confirmPasswordVisible ? (
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
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label>Remember me</label>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            Create an Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/Login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Seller;
