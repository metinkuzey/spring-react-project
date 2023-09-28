import React from "react";
import useAuthContext from "../../hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuthContext();
  const location = useLocation();

  return allowedRoles.find((allowedRole) => allowedRole === auth?.user_role) ? (
    <Outlet />
  ) : auth?.user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
