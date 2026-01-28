import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("adminToken");

  // Agar token nahi hai → login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Token hai → allow
  return <Outlet />;
};

export default ProtectedRoute;
