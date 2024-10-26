
import React from "react";
import SideBar from "./SideBar";
import Card from "./Card";
import  { useState } from 'react';


const MyProfile = () => { 
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Kidloc Chikapa",
        farm: "Garden Farms",
        location: "Lilongwe",
        email: "kidlocchikapa@gmail.co",
        phone: "0990155300 / 0888777332"
    });

    const districtsInMalawi = [
        "Lilongwe", "Blantyre", "Mzuzu", "Zomba", 
        "Kasungu", "Mangochi", "Balaka", "Ntcheu", 
        "Mchinji", "Nkhotakota"
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value
        });
    };

    const handleSelectChange = (e) => {
        setProfile({
            ...profile,
            location: e.target.value
        });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const saveChanges = () => {
        // Add logic to save changes
        setIsEditing(false);
    };
    
    return (
        <div className="flex">
            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <div className="flex flex-col w-3/4 p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">My Profile</h1>
                    <button className="text-gray-500">My Account</button>
                </div>

               
                <div>
            {/* Profile Card */}
            <Card title="Profile" editable>
                <div className="flex space-x-4 items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-2xl">&#128100;</span>
                    </div>
                    <div>
                        {isEditing ? (
                            <>
                                <input
                                    name="name"
                                    value={profile.name}
                                    onChange={handleInputChange}
                                    placeholder="Name"
                                />
                                <input
                                    name="farm"
                                    value={profile.farm}
                                    onChange={handleInputChange}
                                    placeholder="Farm"
                                />
                                <select
                                    value={profile.location}
                                    onChange={handleSelectChange}
                                >
                                    {districtsInMalawi.map((district) => (
                                        <option key={district} value={district}>
                                            {district}
                                        </option>
                                    ))}
                                </select>
                            </>
                        ) : (
                            <>
                                <p>{profile.name}</p>
                                <p>{profile.farm}</p>
                                <p>{profile.location}</p>
                            </>
                        )}
                    </div>
                </div>
            </Card>

            {/* Additional Information Card */}
            <Card title="Profile Information" editable>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        {isEditing ? (
                            <>
                                <input
                                    name="email"
                                    value={profile.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                />
                                <input
                                    name="phone"
                                    value={profile.phone}
                                    onChange={handleInputChange}
                                    placeholder="Phone Number"
                                />
                            </>
                        ) : (
                            <>
                                <p>{profile.email}</p>
                                <p>{profile.phone}</p>
                            </>
                        )}
                    </div>
                </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-4">
                <button onClick={toggleEdit}>
                    {isEditing ? "Cancel" : "Edit"}
                </button>
                {isEditing && (
                    <button onClick={saveChanges}>
                        Save
                    </button>
                )}
            </div>
        </div>
        </div>
        </div>
    );
};
export default MyProfile;