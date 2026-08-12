import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import AuthInput from "../../components/auth/AuthInput";

import { useState } from "react";

const CreatePassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

  const handleSave = () => {
    navigate("/password-changed");
  };

  return (
    <MobileLayout>
      <div className="min-h-screen bg-black px-8 pt-16">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft size={30} className="text-white" />
          </button>

          <h1 className="text-white text-xl font-semibold">
            New Password
          </h1>
        </div>

        <h2 className="text-[#00E58F] text-4xl font-bold mt-10">
          Create Password
        </h2>

        <div className="mt-12 space-y-5">
          <AuthInput
            placeholder="New Password"
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
              handleChange("confirmPassword", e.target.value)
            }
          />
        </div>

        <button
          onClick={handleSave}
          className="
            mt-10
            w-full
            h-14
            rounded-xl
            bg-[#00E58F]
            text-black
            text-lg
            font-bold
          "
        >
          Save Password
        </button>
      </div>
    </MobileLayout>
  );
};

export default CreatePassword;