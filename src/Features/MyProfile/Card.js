import React, { useState } from 'react';
import { IoPersonOutline } from "react-icons/io5";  // Importing the person icon

function Card({ title, details, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState(details);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    setIsEditing(false);
    onSave(editedDetails);
  };

  const handleChange = (field, value) => {
    setEditedDetails((prevDetails) => ({ ...prevDetails, [field]: value }));
  };

  const malawiDistricts = [
    'Lilongwe', 'Blantyre', 'Zomba', 'Dedza', 'Mchinji', 
    'Nkhotakota', 'Mangochi', 'Mzuzu', 'Kasungu', 'Salima',
  ];

  return (
    <div className="relative w-full max-w-2xl p-4 bg-white border rounded-lg shadow-sm mb-6">
      <div className="flex justify-between items-center mb-2">
        <h2 className={`font-semibold ${title === "Profile Information" ? "text-green-600" : "text-black"}`}>
          {title}
        </h2>
        <button onClick={isEditing ? handleSaveClick : handleEditClick} className="bg-gray-200 px-3 py-1 rounded text-gray-700 hover:bg-gray-300">
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <div className="mt-4 flex items-start space-x-6">
        {/* Large Person Icon on the Left */}
        <div className="flex-shrink-0">
          <IoPersonOutline className="h-24 w-24 text-gray-600" /> {/* Large icon */}
        </div>

        {/* Details Section on the Right */}
        <div className="flex-1 space-y-4">
          {/* Name Field */}
          <div className="flex items-center space-x-2">
            <label className="font-medium w-1/3">Name:</label>
            {isEditing ? (
              <input
                type="text"
                value={editedDetails.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{editedDetails.name}</p>
            )}
          </div>

          {/* Location Field */}
          <div className="flex items-center space-x-2">
            <label className="font-medium w-1/3">Location:</label>
            {isEditing ? (
              <select
                value={editedDetails.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full p-2 border rounded"
              >
                {malawiDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            ) : (
              <p>{editedDetails.location}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="flex items-center space-x-2">
            <label className="font-medium w-1/3">Email:</label>
            {isEditing ? (
              <input
                type="email"
                value={editedDetails.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{editedDetails.email}</p>
            )}
          </div>

          {/* Contact Number Field */}
          <div className="flex items-center space-x-2">
            <label className="font-medium w-1/3">Contact Number:</label>
            {isEditing ? (
              <input
                type="text"
                value={editedDetails.contact}
                onChange={(e) => handleChange('contact', e.target.value)}
                className="w-full p-2 border rounded"
              />
            ) : (
              <p>{editedDetails.contact}</p>
            )}
          </div>

          {/* User Type Field */}
          <div className="flex items-center space-x-2">
            <label className="font-medium w-1/3">User Type:</label>
            {isEditing ? (
              <select
                value={editedDetails.userType}
                onChange={(e) => handleChange('userType', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            ) : (
              <p>{editedDetails.userType}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
