import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SignUp from "./Features/UserRegistration/Login";
import Registering from "./Features/UserRegistration/Register";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
  
    {
      path: "/Login",
      element: <SignUp></SignUp>
    },
    {
      path: "/Register",
      element: <Registering></Registering>
    },
  
  ]);
  export default router;
  
