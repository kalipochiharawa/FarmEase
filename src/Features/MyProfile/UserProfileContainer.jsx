import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import Layout from "./Layout";

function UserProfileContainer() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = 4; // Replace with logic to dynamically fetch the logged-in user's ID.

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        setProfile(response.data); // Set the profile data
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleSave = async (updatedProfile) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/users/${userId}`,
        updatedProfile
      );
      setProfile(response.data); // Update the local profile state with the server's response
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  };

  if (loading) {
    return <Layout>
      <div>Loading...</div>
    </Layout>;
  }

  if (!profile) {
    return <Layout>
      <div>No profile data found.</div>
    </Layout>;
  }

  return (
    <Layout>
      <Profile profile={profile} onSave={handleSave} />
    </Layout>
  );
}

export default UserProfileContainer;
