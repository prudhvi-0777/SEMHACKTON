import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

/**
 * Wrap a route element with <ProtectedRoute><Page /></ProtectedRoute>
 * It redirects to "/" (login) when no token exists.
 */
export default function ProtectedRoute({ children }) {
  const { token } = useAuth();
  if (!token) return <Navigate to="/" replace />;
  return children;
}
