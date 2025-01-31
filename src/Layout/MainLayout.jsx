import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto font_poppins">
      <Navbar />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default MainLayout;
