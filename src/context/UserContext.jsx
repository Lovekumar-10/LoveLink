import { createContext, useState, useEffect } from "react";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { db,auth } from "../firebase";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const createUserProfile = async (data) => {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      ...data,
      createdAt: new Date()
    });
  };

  const getUserProfile = async () => {
    const snap = await getDoc(doc(db, "users", auth.currentUser.uid));
    if (snap.exists()) setUserData(snap.data());
  };

  const updateProfile = async (data) => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), data);
  };

  return (
    <UserContext.Provider value={{ userData, createUserProfile, getUserProfile, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
