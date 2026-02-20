// DummyUserContext.jsx
import React, { createContext, useState } from "react";
import { dummyUsers } from "../data/dummyUsers";

export const DummyUserContext = createContext();

export const DummyUserProvider = ({ children }) => {
  const [user, setUser] = useState(dummyUsers[0]);
  const [users, setUsers] = useState(dummyUsers);

  const updateUser = (updatedData) =>
    setUser((prev) => ({ ...prev, ...updatedData }));

  return (
    <DummyUserContext.Provider value={{ user, users, setUser, updateUser }}>
      {children}
    </DummyUserContext.Provider>
  );
};
