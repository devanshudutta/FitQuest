import { Outlet, Navigate } from "react-router-dom";

// mock auth check
const isAuthenticated = true; // change this later to real logic

export default function PrivateLayout() {
  return isAuthenticated ? (
    <div>
      {/* Sidebar, top nav etc. */}
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
}
