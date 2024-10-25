import React from "react";
import { FaHouse } from "react-icons/fa6";
import { LuPlusCircle } from "react-icons/lu";
import { IoWalletOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import { HiOutlineTrash } from "react-icons/hi2";

export default function SideBar() {
    return (
        <div className="bg-white shadow-lg p-4 w-64"> {/* Container styles */}
            <h3 className="text-xl font-bold mb-4">FarmEase</h3>
            <ul className="space-y-2"> {/* Use space-y for vertical spacing */}
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <FaHouse className="mr-2" /> {/* Margin right for spacing */}
                        <span className="smallText">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <LuPlusCircle className="mr-2" />
                        <span className="smallText">Add product</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <IoWalletOutline className="mr-2" />
                        <span className="smallText">Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <MdPersonOutline className="mr-2" />
                        <span className="smallText">My Profile</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <FaInfo className="mr-2" />
                        <span className="smallText">Profile Info</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <BiLogOutCircle className="mr-2" />
                        <span className="smallText">Logout</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded transition">
                        <HiOutlineTrash className="mr-2" />
                        <span className="smallText">Delete Account</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

    