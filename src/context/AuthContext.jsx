import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";

import { auth } from "../firebase/firebase";

import { db } from "../firebase/firebase";

const AuthContext = createContext();

export const useAuth = () =>
  useContext(AuthContext);

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [userRole, setUserRole] =
  useState(null);

// REGISTER
const register = async (
  email,
  password,
  role
) => {

  // CREATE AUTH USER
  const userCredential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  // SAVE USER DATA
  await setDoc(
    doc(db, "users", userCredential.user.uid),
    {
      email,
      role,
    }
  );

  return userCredential;
};

  // LOGIN
  const login = (email, password) => {

    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  // LOGOUT
  const logout = () => {

    return signOut(auth);
  };

  // AUTH STATE
useEffect(() => {

  const unsubscribe =
    onAuthStateChanged(
      auth,
      async (currentUser) => {

        setUser(currentUser);

        // FETCH ROLE
        if (currentUser) {

          const docRef = doc(
            db,
            "users",
            currentUser.uid
          );

          const docSnap =
            await getDoc(docRef);

          if (docSnap.exists()) {

            setUserRole(
              docSnap.data().role
            );
          }

        } else {

          setUserRole(null);
        }
      }
    );

  return () => unsubscribe();

}, []);

  return (

    <AuthContext.Provider
      value={{
        user,
          userRole,
        register,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
}

export default AuthProvider;