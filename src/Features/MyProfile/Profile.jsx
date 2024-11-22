import React, { useState, useEffect } from "react";

function Profile({ profile, onSave }) {
  const [editableProfile, setEditableProfile] = useState(profile);
  const [isEditing, setIsEditing] = useState(false);

  // Update the editable profile when the profile prop changes
  useEffect(() => {
    setEditableProfile(profile);
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile({ ...editableProfile, [name]: value });
  };

  const handleSave = async () => {
    try {
      await onSave(editableProfile); // Save changes through the provided onSave function
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("Failed to save profile changes.");
    }
  };

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mb-6 bg-white shadow rounded p-6">
      <h2 className="text-xl font-bold mb-4">Profile Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={editableProfile.full_name || ""}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={editableProfile.location || ""}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Farm Name</label>
          <input
            type="text"
            name="farm_name"
            value={editableProfile.farm_name || ""}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Details</label>
          <input
            type="text"
            name="contact_details"
            value={editableProfile.contact_details || ""}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            disabled={!isEditing}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={editableProfile.email || ""}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
}

export default Profile;
