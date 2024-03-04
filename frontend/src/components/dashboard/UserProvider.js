import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Create a provider for UserContext
export const UserProvider = ({ children }) => {
  // State to hold user data
  const [userData, setUserData] = useState({
    reg_no: '',
    name: '',
    gender: '',
    dob: '',
    type: ''
  });

  // Function to update user data
  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to consume user data
export const useUser = () => useContext(UserContext);