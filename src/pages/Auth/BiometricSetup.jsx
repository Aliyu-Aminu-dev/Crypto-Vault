import { Fingerprint, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";

const BiometricSetup = () => {
  const navigate = useNavigate();

  const handleEnableBiometric = () => {
    localStorage.setItem("biometric_enabled", "true");
    localStorage.setItem("token", "demo-token");
    navigate("/home");
  };

  const handleSkip = () => {
    localStorage.setItem("biometric_enabled", "false");
    localStorage.setItem("token", "demo-token");
    navigate("/home");
  };

  return (
    <MobileLayout>
      <main className="min-h-screen bg-black px-7 pt-16 pb-10 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div className="relative mb-10">
            <div className="w-36 h-36 rounded-full bg-[#111A35] flex items-center justify-center">
              <Fingerprint
                size={82}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>

            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-[#00E58F] flex items-center justify-center">
              <ShieldCheck size={26} className="text-black" />
            </div>
          </div>

          <h1 className="text-white text-[30px] font-bold leading-tight">
            Enable Biometrics
          </h1>

          <p className="text-[#8491B0] text-[16px] leading-7 mt-4 max-w-[320px]">
            Use fingerprint or face authentication to access your wallet faster.
          </p>

          {/* Security Card */}
          <div className="w-full mt-12 rounded-[24px] bg-[#111A35] p-5 text-left">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-[#08112D] flex items-center justify-center">
                <ShieldCheck size={24} className="text-[#00E58F]" />
              </div>

              <div>
                <h2 className="text-white font-semibold text-[17px]">
                  Extra wallet protection
                </h2>

                <p className="text-[#8491B0] text-sm leading-6 mt-1">
                  Your PIN remains the backup method if biometrics are unavailable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <button
            type="button"
            onClick={handleEnableBiometric}
            className="w-full h-[58px] rounded-[18px] bg-[#00E58F] text-black text-[18px] font-bold active:scale-[0.98] transition"
          >
            Enable Biometrics
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="w-full h-[58px] rounded-[18px] bg-[#111A35] text-white text-[18px] font-semibold active:scale-[0.98] transition"
          >
            Skip for now
          </button>
        </div>
      </main>
    </MobileLayout>
  );
};

export default BiometricSetup;