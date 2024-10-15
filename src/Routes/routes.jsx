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
<<<<<<< Updated upstream
import FavoritesDashboard from "../pages/FavoritesDashboard/FavoritesDashboard";

=======
import Properties from "../pages/Properties/Properties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails"
import FavoriteDashboard from "../pages/FavoriteDashboard/FavoriteDashboard";
import ReviewDasboard from "../pages/ReviewDashboard/ReviewDasboard";
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
      <Route path="/properites" element={<Properites />} />
      <Route path="/properites" element={<Properites />} />
      <Route path="/user-dashboard" element={<UserDashbord />} />
      <Route path="/favorites-dashboard" element={<FavoritesDashboard />} />
=======
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:_id" element={<PropertyDetails />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/favorite-dashboard" element={<FavoriteDashboard />} />
      <Route path="/reviews" element={<ReviewDasboard />} />
>>>>>>> Stashed changes
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default Approutes;
