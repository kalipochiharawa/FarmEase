import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Seller = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  // State to track form field completion
  const [progress, setProgress] = useState(0);

  // Form fields (for simplicity, we'll track these as a single state object)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    product: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  // Function to toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };

      // Calculate progress based on filled fields
      const filledFields = Object.values(updatedFormData).filter((val) => val.trim() !== "").length;
      const totalFields = Object.keys(updatedFormData).length;
      const newProgress = (filledFields / totalFields) * 100;

      setProgress(newProgress);
      return updatedFormData;
    });
  };

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
          <h1 className=" text-white py-2 px-6 rounded-lg text-lg font-semibold">
            Register Now !
          </h1>
        </div>
      </div>

      {/* Right section (Form) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 bg-white">
        {/* Progress bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <div className="flex justify-center mb-4 space-x-8">
          <button
            className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg text-lg font-semibold"
            onClick={() => navigate("/Seller")}
          >
            Seller
          </button>
          <button
            className="bg-white border-2 border-yellow-500 text-yellow-500 py-3 px-8 rounded-lg text-lg font-semibold"
            onClick={() => navigate("/Buyer")}
          >
            Buyer
          </button>
        </div>

        <form className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            type="text"
            name="company"
            placeholder="Your Company/Farm Name"
            value={formData.company}
            onChange={handleInputChange}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            type="text"
            name="product"
            placeholder="Type of Product"
            value={formData.product}
            onChange={handleInputChange}
          />
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            type="text"
            name="location"
            placeholder="Where are you located"
            value={formData.location}
            onChange={handleInputChange}
          />
          <div className="relative">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? "Hide" : "Show"}
            </button>
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
              type={confirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {confirmPasswordVisible ? "Hide" : "Show"}
            </button>
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
