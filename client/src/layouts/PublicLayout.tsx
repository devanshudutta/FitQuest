import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <div>
      {/* Maybe a minimal navbar */}
      <Outlet />
    </div>
  );
}
