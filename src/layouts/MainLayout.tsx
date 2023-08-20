import { Outlet } from "react-router-dom";
import Navbar from "../componets/Shared/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
