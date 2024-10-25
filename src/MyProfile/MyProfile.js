// src/MyProfile.js
import React from "react";
import SideBar from "./SideBar";
import Card from "./Card";

export default function MyProfile() {
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

                {/* Profile Card */}
                <Card title="" editable>
                    <div className="flex space-x-4 items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-2xl">&#128100;</span>
                        </div>
                        <div>
                            <p>Kidloc Chikapa</p>
                            <p>Garden Farms</p>
                            <p>Lilongwe</p>
                        </div>
                    </div>
                </Card>

                {/* Additional Information Card */}
                <Card title="Profile Information" editable>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p>Kidloc Chikapa</p>
                            <p>Garden Farms</p>
                            <p>Lilongwe</p>
                        </div>
                        <div>
                            <p>kidlocchikapa@gmail.co</p>
                            <p>0990155300 / 0888777332</p>
                        </div>
                    </div>
                </Card>

                {/* Placeholder for additional content */}
                <div className="w-full max-w-md p-4 bg-white border rounded-lg shadow-sm"></div>
            </div>
        </div>
    );
}
