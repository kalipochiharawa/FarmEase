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
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    
    if (!file) return;
    
    // Preview the image before uploading
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("https://mlimiaguleonline.onrender.com/upload-image", formData);
      setImage(response.data.imageUrl); 
      setError(null); 
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-medium mb-4">Upload Image</h2>
      <div className="border border-gray-200 bg-white rounded-lg h-[240px] flex items-center justify-center">
        {image || imagePreview ? (
          <div className="relative">
            <img
              src={imagePreview || image}
              alt="Product"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => { setImage(null); setImagePreview(null); }} // Reset the image when clicking "Delete Image"
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md"
            >
              Delete Image
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
      await axios.post("https://mlimiaguleonline.onrender.com/products", productData); // Replaced with the online server URL
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
