import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import MobileLayout from "../../components/layout/MobileLayout";

const OtpVerification = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleContinue = () => {
    navigate("/create-password");
  };

  return (
    <MobileLayout>
      <div className="min-h-screen bg-black px-8 pt-16">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft size={30} className="text-white" />
          </button>

          <h1 className="text-white text-xl font-semibold">
            Verification
          </h1>
        </div>

        <h2 className="text-[#00E58F] text-4xl font-bold mt-10">
          Enter Code
        </h2>

        <p className="text-white mt-3">
          Enter the 6-digit code sent to your phone
        </p>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          className="
            mt-10
            w-full
            h-14
            rounded-xl
            border
            border-white
            text-center
            text-2xl
            tracking-[12px]
            bg-transparent
            text-white
            outline-none
          "
        />

        <button
          onClick={handleContinue}
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
          Verify
        </button>
      </div>
    </MobileLayout>
  );
};

export default OtpVerification;