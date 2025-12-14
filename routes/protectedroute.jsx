import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../component/context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  const loggedIn =
    isAuthenticated &&
    (localStorage.getItem("isLoggedIn") === "true" || !!localStorage.getItem("token"));

  if (!loggedIn) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;
