import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const ProtectedRoute = () => {
  const authenticated = sessionStorage.getItem("isAuthenticated");
  return authenticated === "true" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
