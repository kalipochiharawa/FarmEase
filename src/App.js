import React from 'react';
import Sidebar from './Features/AddProducts/SideBar';
import AddProductForm from './Features/AddProducts/Addproduct'
const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <AddProductForm />
    </div>
  );
};

export default Layout;