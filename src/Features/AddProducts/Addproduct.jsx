import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Bell, User } from "lucide-react";

// Header Component
const Header = () => (
  <div className="flex justify-between items-center mb-6">
    <h1 className="text-lg sm:text-xl font-bold">Add New Product</h1>
    <div className="flex items-center space-x-4">
      <button className="flex items-center text-xs sm:text-sm hover:text-gray-600">
        <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <Link to="/MyProfile">
        <button className="flex items-center text-xs sm:text-sm hover:text-gray-600 space-x-2">
          <User className="w-4 h-4 sm:w-5 sm:h-5" />
          <span>My Account</span>
        </button>
      </Link>
    </div>
  </div>
);

// Image Upload Component
const ImageUpload = ({ image, setImage }) => {
  const [error, setError] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      // Sending the image to the backend to upload it
      const response = await axios.post("http://localhost:5000/upload-image", formData);
      setImage(response.data.imageUrl); // Update the productData with the imageUrl returned by the backend
      setError(null); // Clear any previous error messages
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
    }
  };

  return (
<<<<<<< HEAD
    <div className="p-3 sm:p-6 w-full max-w-4xl mx-auto bg-white font-poppins">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-lg sm:text-xl font-bold">Add New Product</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-xs sm:text-sm hover:text-gray-600">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <Link to= "/MyProfile">
          <button className="flex items-center text-xs sm:text-sm hover:text-gray-600 space-x-2">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>My Account</span>
          </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
        {/* General Information Section */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h2 className="text-sm sm:text-base text-bold text-lg font-medium mb-3 sm:mb-4">General Information</h2>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-xs sm:text-sm mb-1">Product Name</label>
              <input
                type="text"
                placeholder="Add product name"
                className="w-full p-2 border rounded-md bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm mb-1">Product Description</label>
              <textarea
                placeholder="Add product description"
                className="w-full p-2 border rounded-md bg-white text-sm"
                rows={2}
              />
            </div>
          </div>
        </div>

        {/* Upload Image Section */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
        <h2 className="text-sm sm:text-base text-bold text font-medium mb-3 sm:mb-4">Upload Image</h2>
        <div className="border border-gray-200 bg-white rounded-lg h-[140px] sm:h-[170px] flex items-center justify-center">
          {image ? (
            <div>
              <img src={image} alt="Product Image" className="w-full h-full object-cover rounded-lg" />
              <button onClick={() => setImage(null)} className="bg-red-500 text-white px-2 py-1 rounded-md mt-2">
                Delete Image
              </button>
            </div>
          ) : (
            <label className="cursor-pointer flex flex-col items-center justify-center">
              <input type="file" onChange={handleImageUpload} hidden />
              <div className="w-8 h-8 sm:w-12 sm:h-12 mx-auto border-2 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>  

            </label>
          )}
        </div>
      </div>


        {/* Pricing Section */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h2 className="text-sm sm:text-base text-bold text-lg font-medium mb-3 sm:mb-4">Pricing</h2>
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm mb-1">Add Price</label>
              <input
                type="text"
                placeholder="Add promotional Price"
                className="w-full p-2 border rounded-md bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm mb-1">Stock</label>
              <input
                type='number'
                placeholder="Add amount of stock"
                className="w-full p-2 border rounded-md bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm mb-1">Min Order</label>
              <input
                type='number'
                placeholder="Add Minimum order"
                className="w-full p-2 border rounded-md bg-white text-sm"
              />
            </div>
            <div>
              <label className="block text-xs sm:text-sm mb-1">Max Order</label>
              <input
                type='number'
                placeholder="Add Maximum order"
                className="w-full p-2 border rounded-md bg-white text-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Section with Confirm Button */}
        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <h2 className="text-sm sm:text-base text-bold text-lg font-medium mb-3 sm:mb-4">Category</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex gap-2">
              <select className="flex-1 p-2 border rounded-md bg-white text-gray-500 text-sm">
                <option value="">Livestock</option>
                <option value="">Legumes</option>
                <option value="">Vegetables</option>
                <option value="">Machinery</option>
                <option value="">Fruits</option>
                <option value="">Chemicals</option>
              </select>
              <button className="bg-green-500 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm whitespace-nowrap hover:bg-green-600 transition-colors">
                Add category
              </button>
            </div>
            {/* Confirm Button */}
            <button className="w-full bg-green-500 text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base hover:bg-green-600 transition-colors">
              Confirm
=======
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Upload Image</h2>
      <div className="border border-gray-200 bg-white rounded-lg h-[140px] flex items-center justify-center">
        {image ? (
          <div>
            <img
              src={image}
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => setImage(null)} // Reset the image when clicking "Delete Image"
              className="bg-red-500 text-white px-2 py-1 rounded-md mt-2"
            >
              Delete Image
>>>>>>> 9141bb97cd93895588d7dce73af75febc75361db
            </button>
          </div>
        ) : (
          <label className="cursor-pointer flex flex-col items-center justify-center">
            <input type="file" onChange={handleImageUpload} hidden />
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Upload Image</span>
          </label>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

// Main Form Component
const AddProductForm = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    productType: "",
    farmName: "",
    location: "",
    available: true,
    imageUrl: "", // Stores the image URL
  });
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Send the product data to the backend, including the image URL
      await axios.post("http://localhost:5000/products", productData); // Replace with your backend endpoint
      setMessage({ type: "success", text: "Product added successfully!" });
      
      // Reset the form after submission
      setProductData({
        name: "",
        description: "",
        price: "",
        category: "",
        productType: "",
        farmName: "",
        location: "",
        available: true,
        imageUrl: "", // Reset image URL
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage({ type: "error", text: "Failed to add product. Please try again." });
    }
  };

  return (
    <div className="p-6 w-full max-w-4xl mx-auto bg-white">
      <Header />
      {message.text && (
        <div
          className={`p-4 mb-6 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
        >
          {message.text}
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Information */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-4">General Information</h2>
          <div className="space-y-4">
            <input
              name="name"
              type="text"
              placeholder="Product Name"
              className="w-full p-2 border rounded-md"
              onChange={handleInputChange}
              value={productData.name}
            />
            <textarea
              name="description"
              placeholder="Product Description"
              className="w-full p-2 border rounded-md"
              rows={3}
              onChange={handleInputChange}
              value={productData.description}
            />
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Pricing</h2>
          <input
            name="price"
            type="number"
            placeholder="Price"
            className="w-full p-2 border rounded-md"
            onChange={handleInputChange}
            value={productData.price}
          />
        </div>

        {/* Image Upload */}
        <ImageUpload
          image={productData.imageUrl}
          setImage={(url) => setProductData({ ...productData, imageUrl: url })}
        />

        {/* Additional Details */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-medium mb-4">Additional Details</h2>
          <input
            name="category"
            type="text"
            placeholder="Category"
            className="w-full p-2 border rounded-md"
            onChange={handleInputChange}
            value={productData.category}
          />
          <input
            name="farmName"
            type="text"
            placeholder="Farm Name"
            className="w-full p-2 border rounded-md mt-4"
            onChange={handleInputChange}
            value={productData.farmName}
          />
          <input
            name="location"
            type="text"
            placeholder="Location"
            className="w-full p-2 border rounded-md mt-4"
            onChange={handleInputChange}
            value={productData.location}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-green-500 text-white py-2 rounded-md mt-4"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
