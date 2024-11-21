import React, { useState } from "react";
import axios from "axios";
import Tomato from "../../Assets/Images/Tomato.png";

const Registering = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    productType: "",
    location: "",
    password: "",
    confirmPassword: "",
  });

  const [activeRole, setActiveRole] = useState("Seller");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password,
        role: activeRole,
      };

      const response = await axios.post("http://localhost:5000/auth/register", payload);

      if (response.status === 201) {
        setSuccessMessage("Registration successful!");
        setErrorMessage("");
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phoneNumber: "",
          productType: "",
          location: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred during registration");
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
        <div className="flex mb-6">
          <button
            onClick={() => setActiveRole("Seller")}
            className={`w-1/2 py-2 text-lg font-semibold rounded-tl-lg ${
              activeRole === "Seller"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Seller
          </button>
          <button
            onClick={() => setActiveRole("Buyer")}
            className={`w-1/2 py-2 text-lg font-semibold rounded-tr-lg ${
              activeRole === "Buyer"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Buyer
          </button>
        </div>

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="Your Company/Farm name"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
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
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-500"
            >
              <option disabled value="">
                Type of product
              </option>
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Dairy</option>
              <option>Grains</option>
            </select>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-gray-500"
            >
              <option disabled value="">
                Where are you located
              </option>
              <option>Urban Area</option>
              <option>Rural Area</option>
            </select>
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

          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 focus:ring-green-500"
            />
            <label htmlFor="remember" className="text-gray-700">
              Remember me
            </label>
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
