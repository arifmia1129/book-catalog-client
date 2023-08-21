import { Outlet } from "react-router-dom";
import Navbar from "../componets/Shared/Navbar";
import Footer from "../componets/Shared/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
