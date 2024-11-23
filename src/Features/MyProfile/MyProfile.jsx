import React from "react";

function UserProfile({ profile, onEdit }) {
  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <div className="flex flex-col items-start bg-white shadow-lg p-6 rounded-lg w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">My Profile</h2>

      <div className="flex items-center mb-4">
        <div className="h-16 w-16 bg-gray-200 rounded-full flex justify-center items-center text-gray-500 text-4xl">
          <span>👤</span>
        </div>
        <div className="ml-4">
          <p className="text-lg font-medium text-gray-700">Name: {profile.full_name}</p>
          <p className="text-sm text-gray-500">Farm Name: {profile.farm_name}</p>
          <p className="text-sm text-gray-500">Location: {profile.location}</p>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-gray-700">
          <span className="font-medium">Email: </span>
          {profile.email}
        </p>
        <p className="text-gray-700 mt-2">
          <span className="font-medium">Contact Details: </span>
          {profile.contact_details}
        </p>
      </div>

      <div className="flex mt-6 space-x-4">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default UserProfile;
