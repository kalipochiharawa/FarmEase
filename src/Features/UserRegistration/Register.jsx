import React, { useState } from "react";
import axios from "axios";
import Tomato from "../../Assets/Images/Tomato.png";

const Registering = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    farm_name: "",
    location: "",
    email: "",
    contact_details: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Get the API URL from environment variable
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://farmeaseonline.onrender.com/"; // Default to Render URL

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password confirmation
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const payload = {
        full_name: formData.full_name,
        farm_name: formData.farm_name,
        location: formData.location,
        email: formData.email,
        contact_details: formData.contact_details,
        password: formData.password,
      };

      // API call to backend
      const response = await axios.post(
        `${API_BASE_URL}/auth/register`, // Use the updated API URL
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
        setFormData({
          full_name: "",
          farm_name: "",
          location: "",
          email: "",
          contact_details: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error); // Logs for debugging
      setErrorMessage(
        error.response?.data?.message ||
          "An error occurred during registration. Please try again."
      );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Section with Image */}
      <div className="w-full lg:w-1/2 bg-cover bg-center relative">
        <img
          src={Tomato}
          alt="Sell your products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-6">
          <h1 className="text-4xl font-bold">Sell your Products</h1>
          <p className="text-lg mt-2">at your desired cost</p>
          <button className="mt-4 px-6 py-2 bg-green-500 rounded-lg shadow-lg text-lg font-semibold hover:bg-green-600">
            Register Now !!
          </button>
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-16 py-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Account</h2>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="farm_name"
              value={formData.farm_name}
              onChange={handleChange}
              placeholder="Farm Name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="contact_details"
              value={formData.contact_details}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Create an Account
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 font-semibold">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registering;
