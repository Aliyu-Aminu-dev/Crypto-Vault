import { Routes, Route } from "react-router-dom";

import SplashPage from "../pages/Splash/SplashPage";

import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import HomePage from "../pages/Home/HomePage";
import MarketsPage from "../pages/Markets/MarketsPage";
import TradePage from "../pages/Trade/TradePage";
import ActivityPage from "../pages/Activity/ActivityPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import ForgotPassword from "../pages/Auth/ForgotPassword";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/home" element={<HomePage />} />
      <Route path="/markets" element={<MarketsPage />} />
      <Route path="/trade" element={<TradePage />} />
      <Route path="/activity" element={<ActivityPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
};

export default AppRoutes;