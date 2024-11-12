import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5'; // Importing the IoPersonOutline icon

function Profile({ profile, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    setIsEditing(false);
    onSave(editedProfile); // Save changes to the parent
  };

  const handleChange = (field, value) => {
    setEditedProfile((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-lg p-4 bg-white shadow-sm rounded-md mb-6">
      <div className="flex items-center mb-4">
        {/* Person icon on the left side */}
        <div className="flex-shrink-0 mr-6">
          <IoPersonOutline size={80} className="text-gray-600" />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-xl">Profile</h2>
            <button
              onClick={isEditing ? handleSaveClick : handleEditClick}
              className="px-4 py-2 bg-white text-green-500 border border-green-500 rounded-md"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>
          </div>

          <div className="space-y-4 mt-4">
            {/* Name */}
            <div className="flex items-center space-x-2">
              <label className="font-medium w-1/3">Name:</label>
              {isEditing ? (
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={editedProfile.firstName}
                    onChange={(e) => handleChange('firstName', e.target.value)}
                    className="p-2 border rounded"
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    value={editedProfile.lastName}
                    onChange={(e) => handleChange('lastName', e.target.value)}
                    className="p-2 border rounded"
                    placeholder="Last Name"
                  />
                </div>
              ) : (
                <p>{`${editedProfile.firstName} ${editedProfile.lastName}`}</p>
              )}
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2">
              <label className="font-medium w-1/3">Location:</label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) => handleChange('location', e.target.value)}
                  className="p-2 border rounded"
                  placeholder="Location"
                />
              ) : (
                <p>{editedProfile.location}</p>
              )}
            </div>

            {/* User Type */}
            <div className="flex items-center space-x-2">
              <label className="font-medium w-1/3">User Type:</label>
              {isEditing ? (
                <select
                  value={editedProfile.userType}
                  onChange={(e) => handleChange('userType', e.target.value)}
                  className="p-2 border rounded"
                >
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
              ) : (
                <p>{editedProfile.userType}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
