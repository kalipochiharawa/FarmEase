// src/SideBar.js
import React from "react";
import { MdHome } from 'react-icons/md';
import { LuPlusCircle } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi2";
import { FaInfo } from "react-icons/fa6";

export default function SideBar() {
    return (
        <div className="w-1/4 bg-white p-4 h-screen">
            <h3 className="text-xl font-bold text-green-500 mb-4">FarmEase</h3>
            <ul className="space-y-4">
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        < MdHome className="text-lg" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        <LuPlusCircle className="text-lg" />
                        <span>Add Product</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        <IoWalletOutline className="text-lg" />
                        <span>Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        <MdPersonOutline className="text-lg" />
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        <FaInfo className="text-lg" />
                        <span>Profile Info</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        <BiLogOutCircle className="text-lg" />
                        <span>Logout</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center space-x-2">
                        <HiOutlineTrash className="text-lg" />
                        <span>Delete Account</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}
