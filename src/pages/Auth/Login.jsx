import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import AuthInput from "../../components/auth/AuthInput";
import FingerprintLogin from "../../components/auth/FingerprintLogin";
import Logo from '../../assets/images/Logo.png';
import fingerprint from '../../assets/images/fingerprint.png';

const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("token", "demo-token");
        navigate("/home");
    };

    return (
        <MobileLayout>
            <main className="min-h-screen bg-black px-7 pt-8 pb-10">
                {/* Status spacing already handled by top padding */}

                {/* Header */}
                <div className="flex items-center gap-5 mt-12">
                    <button
                        type="button"
                        onClick={() => navigate(-1)}
                        className="w-8 h-8 flex items-center justify-center text-white"
                        aria-label="Go back"
                    >
                        <ChevronLeft size={38} strokeWidth={3} />
                    </button>

                    <h1 className="text-[31px] leading-none font-bold text-white">
                        Sign in
                    </h1>
                </div>

                {/* Welcome Text */}
                <section className="mt-12">
                    <h2 className="text-[#00E58F] text-[38px] leading-tight font-bold">
                        Welcome Back
                    </h2>

                    <p className="text-white text-[18px] mt-2">
                        Hello there, sign in to continue
                    </p>
                </section>

                {/* Logo */}
                <section className="mt-5 flex flex-col items-center">
                    <img src={Logo} alt="cryptovault" className="mt-6 text-[#00E58F] text-4xl font-bold w-[165px] h-[175px]" />
                </section>

                {/* Form */}
                <form onSubmit={handleSubmit} className="mt-16">
                    <div className="space-y-7">
                        <AuthInput
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                        />

                        <AuthInput
                            placeholder="Password"
                            isPassword
                            value={form.password}
                            onChange={(e) => handleChange("password", e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end mt-6">
                        <Link
                            to="/forgot-password"
                            className="text-[#C9C9C9] text-[16px]"
                        >
                            Forgot your password ?
                        </Link>
                    </div>

                    <button
                        type="submit"
                        className="mt-14 w-full h-[58px] rounded-[18px] bg-[#00D983] text-black text-[22px] font-bold active:scale-[0.98] transition"
                    >
                        Sign in
                    </button>
                </form>

                {/* Fingerprint */}
                <div className="flex justify-center">
                    <img src={fingerprint} alt="fingerprint" className="mt-6 text-[#00E58F] text-4xl font-bold w-[65px] h-[65px]" />
                </div>

                {/* Footer */}
                <div className="mt-12 flex items-center justify-center gap-4 text-[17px]">
                    <span className="text-white">Don't have an account?</span>

                    <Link to="/register" className="text-[#00E58F] font-semibold">
                        Sign Up
                    </Link>
                </div>
            </main>
        </MobileLayout>
    );
};

export default Login;