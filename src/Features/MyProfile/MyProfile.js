import React, { useState } from 'react';
import SideBar from './SideBar';
import Header from './Header';
import Profile from './Profile';
import ProfileInformation from './ProfileInformation';
import EmptyCard from './EmptyCard';

function ProfileManagement() {
  const [profile, setProfile] = useState({
    firstName: 'Kidloc',
    lastName: 'Chikapa',
    location: 'Lilongwe',
    userType: 'Seller',
  });

  const [profileInfo, setProfileInfo] = useState({
    name: 'Kidloc Chikapa',
    location: 'Lilongwe',
    email: 'Kidlocchikapa@gmail.com',
    contact: '0990155300 / 0888777332',
    userType: 'Seller',
  });

  const handleProfileSave = (newProfile) => setProfile(newProfile);
  const handleProfileInfoSave = (newProfileInfo) => setProfileInfo(newProfileInfo);

  return (
    <div className="flex font-poppins">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1">
        <Header />

        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">My Profile</h1>

          <Profile profile={profile} onSave={handleProfileSave} />
          <ProfileInformation profileInfo={profileInfo} onSave={handleProfileInfoSave} />
        </div>
      </div>
    </div>
  );
}

export default ProfileManagement;
