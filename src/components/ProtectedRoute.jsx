import React from "react";

import { Navigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {

  const { user } = useAuth();

  // IF USER NOT LOGGED IN
  if (!user) {

    return <Navigate to="/login" />;
  }

  // IF LOGGED IN
  return children;
}

export default ProtectedRoute;