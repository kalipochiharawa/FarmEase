import React from "react";
import SideBar from "./SideBar";

function Layout({ children }) {
  return (
    <div className="flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;
