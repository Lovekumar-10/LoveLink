import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);

  // Register
  // const register = (name, email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  const register = async (name, email, password) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      fullName: name,
      email: user.email,
      phone: "",
      gender: "",
      dob: null,
      age: null,
      religion: "",
      caste: "",
      maritalStatus: "",
      height: "",
      education: "",
      profession: "",
      income: "",
      bio: "",
      location: {
        country: "",
        state: "",
        city: "",
      },
      interests: [],
      profileImages: [],
      profileCompleted: false,
      subscription: {
        plan: "free",
        startDate: serverTimestamp(),
        endDate: null,
        isActive: false,
      },
      likesSent: [],
      likesReceived: [],
      blockedUsers: [],
      isOnline: true,
      lastSeen: serverTimestamp(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      fcmToken: "",
    });

    return userCredential;
  };

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // Persist user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, register, login, logout, hasPaid, setHasPaid }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
