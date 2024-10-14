import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import Login from "../pages/Login/Login";
import About from "../pages/AboutUs/About";
import OurServives from "../pages/OurServices/OurServices";
import Properites from "../pages/Properites/Properites";
import UserDashbord from "../pages/UserDashboard/UserDashbord";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import Contact from "../pages/ContactUs/Contact";
import FavoritesDashboard from "../pages/FavoritesDashboard/FavoritesDashboard";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/our-services" element={<OurServives />} />
      <Route path="/properites" element={<Properites />} />
      <Route path="/properites" element={<Properites />} />
      <Route path="/user-dashboard" element={<UserDashbord />} />
      <Route path="/favorites-dashboard" element={<FavoritesDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default Approutes;
