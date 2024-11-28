import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import Layout from "./Layout";

function UserProfileContainer() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the user ID dynamically. This could be from authentication context or local storage.
  const userId = localStorage.getItem("userId"); // Replace this with the actual logic to retrieve logged-in user's ID.

  useEffect(() => {
    const fetchProfile = async () => {
      if (!userId) {
        console.error("No user ID found.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `https://mlimiaguleonline.onrender.com/users/${userId}`
        );
        setProfile(response.data); // Set the profile data
      } catch (error) {
        console.error("Error fetching profile data:", error);
        alert("Failed to load profile. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleSave = async (updatedProfile) => {
    try {
      const response = await axios.put(
        `https://mlimiaguleonline.onrender.com/users/${userId}`,
        updatedProfile
      );
      setProfile(response.data);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <p>Loading...</p>
        </div>
      </Layout>
    );
  }

  if (!profile) {
    return (
      <Layout>
        <div className="flex items-center justify-center h-full">
          <p>No profile data found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Profile profile={profile} onSave={handleSave} />
    </Layout>
  );
}

export default UserProfileContainer;
