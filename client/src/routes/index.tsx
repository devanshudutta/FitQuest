import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../features/dashboard/Dashboard";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import PrivateLayout from "../layouts/PrivateLayout";
import PublicLayout from "../layouts/PublicLayout";
import LandingPage from "../pages/LandingPage";
import AuthPage from "../pages/AuthPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
          { path: "", element:<LandingPage/> },
          { path: "auth", element: <AuthPage /> },
        ],
      },
      {
        path: "/app",
        element: <PrivateLayout />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          // more authenticated routes here later
        ],
      },
]);
