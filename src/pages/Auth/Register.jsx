import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import AuthInput from "../../components/auth/AuthInput";
import Logo from '../../assets/images/Logo.png';

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!form.fullName.trim()) {
            alert("Full name is required");
            return;
        }

        if (!form.email.trim()) {
            alert("Email is required");
            return;
        }

        if (form.password.length < 8) {
            alert("Password must be at least 8 characters");
            return;
        }

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        navigate("/create-pin");
    };

    return (
        <MobileLayout>
            <main className="min-h-screen bg-black px-7 pt-8 pb-10">
                {/* Header */}
                <div className="flex items-center gap-5 mt-12">
                    <button
                        onClick={() => navigate(-1)}
                        className="text-white"
                    >
                        <ChevronLeft size={38} strokeWidth={3} />
                    </button>

                    <h1 className="text-[31px] font-bold text-white">
                        Sign Up
                    </h1>
                </div>

                {/* Intro */}
                <section className="mt-10">
                    <h2 className="text-[#00E58F] text-[38px] font-bold leading-tight">
                        Create Account
                    </h2>

                    <p className="text-white text-[18px] mt-2">
                        Start your crypto journey today
                    </p>
                </section>

                {/* Logo */}
                <section className="mt-5 flex flex-col items-center">
                    <img src={Logo} alt="cryptovault" className="mt-6 text-[#00E58F] text-4xl font-bold w-[165px] h-[175px]" />
                </section>

                {/* Form */}
                <form
                    onSubmit={handleRegister}
                    className="mt-10 space-y-5"
                >
                    <AuthInput
                        placeholder="Full Name"
                        value={form.fullName}
                        onChange={(e) =>
                            handleChange("fullName", e.target.value)
                        }
                    />

                    <AuthInput
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) =>
                            handleChange("email", e.target.value)
                        }
                    />

                    <AuthInput
                        placeholder="Password"
                        isPassword
                        value={form.password}
                        onChange={(e) =>
                            handleChange("password", e.target.value)
                        }
                    />

                    <AuthInput
                        placeholder="Confirm Password"
                        isPassword
                        value={form.confirmPassword}
                        onChange={(e) =>
                            handleChange(
                                "confirmPassword",
                                e.target.value
                            )
                        }
                    />

                    <button
                        type="submit"
                        className="
              w-full
              h-[58px]
              rounded-[18px]
              bg-[#00D983]
              text-black
              text-[22px]
              font-bold
              mt-8
              active:scale-[0.98]
              transition
            "
                    >
                        Create Account
                    </button>
                </form>

                {/* Footer */}
                <div className="flex justify-center mt-10 gap-3 text-[17px]">
                    <span className="text-white">
                        Already have an account?
                    </span>

                    <Link
                        to="/login"
                        className="text-[#00E58F] font-semibold"
                    >
                        Sign In
                    </Link>
                </div>
            </main>
        </MobileLayout>
    );
};

export default Register;