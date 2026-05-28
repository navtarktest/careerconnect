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

import { auth } from "../firebase/firebase";

const AuthContext = createContext();

export const useAuth = () =>
  useContext(AuthContext);

function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // REGISTER
  const register = (email, password) => {

    return createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
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
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser);
      });

    return () => unsubscribe();

  }, []);

  return (

    <AuthContext.Provider
      value={{
        user,
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