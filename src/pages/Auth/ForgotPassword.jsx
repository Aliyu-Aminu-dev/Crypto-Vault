import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const handleSend = () => {
    navigate("/verify-otp");
  };

  return (
    <MobileLayout>
      <div className="min-h-screen bg-black px-8 pt-16">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft size={30} className="text-white" />
          </button>

          <h1 className="text-white text-[20px] font-semibold">
            Forgot password
          </h1>
        </div>

        {/* Card */}
        <div className="mt-10 bg-[#F1F1F1] rounded-[22px] p-5">
          <h2 className="font-semibold text-black">
            Type your phone number
          </h2>

          <input
            type="tel"
            placeholder="(+234)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="
              mt-5
              w-full
              h-12
              rounded-xl
              border
              border-gray-500
              px-4
              outline-none
            "
          />

          <p className="text-gray-700 text-sm mt-6">
            We texted you a code to verify your phone number
          </p>

          <button
            onClick={handleSend}
            className="
              mt-12
              w-full
              h-12
              rounded-xl
              bg-[#0B6B46]
              text-white
              font-semibold
            "
          >
            Send
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default ForgotPassword;