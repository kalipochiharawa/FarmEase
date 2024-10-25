import React from "react";
import MyProfile from "./MyProfile/MyProfile"
import Sidebar from "./MyProfile/SideBar";
import Card from "./MyProfile/Card"

const App = () => {
  return (
    <div className='container`'>
       <MyProfile/>
       <Card/>
    </div>
  );
}

export default App;
