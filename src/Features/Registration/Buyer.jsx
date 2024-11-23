import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Buyer = () => {
  const navigate = useNavigate();

  // Background images
  const images = [
    "/Login-background.jpg",
    "/Algriculture-background2.jpg",
    "/Login-background.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically change the image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  // Handle dot click
  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Track form field states
  const [form, setForm] = useState({
    name: "",
    email: "",
    productTypes: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const handleInputChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const progress =
    (Object.values(form).filter((value) => value.trim() !== "").length /
      Object.keys(form).length) *
    100;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left section */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('${images[currentImageIndex]}')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-12">
          <h1 className="text-4xl font-bold mb-4 text-center">
            Buy Fresh Products
          </h1>
          <p className="text-lg mb-6 text-center">at the best market prices</p>
          <h1 className="text-white py-2 px-6 rounded-lg text-lg font-semibold">
            Register Now !!
          </h1>
          <div className="flex justify-center items-center mt-6 space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentImageIndex === index ? "bg-yellow-500" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-8 bg-white">
        <div className="w-full h-2 bg-gray-200 rounded-full mb-6">
          <div
            className="h-2 bg-yellow-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-center">Create Account</h2>
        <div className="flex justify-center mb-4 space-x-8">
          <button
            className="bg-white border-2 border-green-500 text-green-500 py-3 px-8 rounded-lg text-lg font-semibold flex items-center space-x-2"
            onClick={() => navigate("/Seller")}
          >
            Seller
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-8 rounded-lg text-lg font-semibold flex items-center space-x-2"
            onClick={() => navigate("/Buyer")}
          >
            Buyer
          </button>
        </div>
        <form className="space-y-4">
          {["name", "email", "productTypes", "location"].map((field) => (
            <input
              key={field}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
              type="text"
              placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
              value={form[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
            />
          ))}
          <div className="relative">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter Password"
              value={form.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {passwordVisible ? "Hide" : "👁️"}
            </button>
          </div>
          <div className="relative">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-yellow-500"
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) =>
                handleInputChange("confirmPassword", e.target.value)
              }
            />
            <button
              type="button"
              onClick={toggleConfirmPasswordVisibility}
              className="absolute right-3 top-2.5 text-gray-500 hover:text-gray-700"
            >
              {confirmPasswordVisible ? "Hide" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600"
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

export default Buyer;
