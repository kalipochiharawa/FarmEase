import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already logged in (e.g., via token)
    const token = localStorage.getItem("authToken");
    if (token) {
      setUser({ token }); // You might want to decode and validate the token
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("authToken", userData.token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
