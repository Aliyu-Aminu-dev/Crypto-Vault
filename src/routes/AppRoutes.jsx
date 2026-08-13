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
import OtpVerification from "../pages/Auth/OtpVerification";
import CreatePassword from "../pages/Auth/CreatePassword";
import PasswordChanged from "../pages/Auth/PasswordChanged";
import CreatePin from "../pages/Auth/CreatePin";
import ConfirmPin from "../pages/Auth/ConfirmPin";
import BiometricSetup from "../pages/Auth/BiometricSetup";

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
            <Route path="/verify-otp" element={<OtpVerification />} />
            <Route path="/create-password" element={<CreatePassword />} />
            <Route path="/password-changed" element={<PasswordChanged />} />

            <Route path="/create-pin" element={<CreatePin />} />
            <Route path="/confirm-pin" element={<ConfirmPin />} />
            <Route path="/biometric-setup" element={<BiometricSetup />} />

        </Routes>
    );
};

export default AppRoutes;