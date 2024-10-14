import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Registration from "../pages/Registration/Registration";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import Login from "../pages/Login/Login";
import About from "../pages/AboutUs/About";
import OurServives from "../pages/OurServices/OurServices";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import UserDashboard from "../pages/UserDashboard/UserDashborad"
import Contact from "../pages/ContactUs/Contact";
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails"
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
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:_id" element={<PropertyDetails />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default Approutes;
