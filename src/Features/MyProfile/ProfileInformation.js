import React, { useState } from 'react';

function ProfileInformation({ profileInfo, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfileInfo, setEditedProfileInfo] = useState(profileInfo);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    setIsEditing(false);
    onSave(editedProfileInfo); // Save changes to the parent
  };

  const handleChange = (field, value) => {
    setEditedProfileInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-lg p-4 bg-white shadow-sm rounded-md mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">Profile Information</h2>
        <button
          onClick={isEditing ? handleSaveClick : handleEditClick}
          className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded-md"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
      <div className="space-y-4">
        {/* Name */}
        <div className="flex items-center space-x-2">
          <label className="font-medium w-1/3">Name:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedProfileInfo.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="p-2 border rounded"
            />
          ) : (
            <p>{editedProfileInfo.name}</p>
          )}
        </div>

        {/* Location */}
        <div className="flex items-center space-x-2">
          <label className="font-medium w-1/3">Location:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedProfileInfo.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="p-2 border rounded"
            />
          ) : (
            <p>{editedProfileInfo.location}</p>
          )}
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <label className="font-medium w-1/3">Email:</label>
          {isEditing ? (
            <input
              type="email"
              value={editedProfileInfo.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="p-2 border rounded"
            />
          ) : (
            <p>{editedProfileInfo.email}</p>
          )}
        </div>

        {/* Contact */}
        <div className="flex items-center space-x-2">
          <label className="font-medium w-1/3">Contact:</label>
          {isEditing ? (
            <input
              type="text"
              value={editedProfileInfo.contact}
              onChange={(e) => handleChange('contact', e.target.value)}
              className="p-2 border rounded"
            />
          ) : (
            <p>{editedProfileInfo.contact}</p>
          )}
        </div>

        {/* User Type */}
        <div className="flex items-center space-x-2">
          <label className="font-medium w-1/3">User Type:</label>
          {isEditing ? (
            <select
              value={editedProfileInfo.userType}
              onChange={(e) => handleChange('userType', e.target.value)}
              className="p-2 border rounded"
            >
              <option value="Seller">Seller</option>
              <option value="Buyer">Buyer</option>
            </select>
          ) : (
            <p>{editedProfileInfo.userType}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
