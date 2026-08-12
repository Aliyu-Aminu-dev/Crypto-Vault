import { useState } from "react";
import { ChevronLeft, LockKeyhole } from "lucide-react";
import { useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";
import PinDots from "./PinDots";
import NumberPad from "./NumberPad";

const ConfirmPin = () => {
  const navigate = useNavigate();

  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleNumberClick = (number) => {
    if (pin.length >= 4) return;

    const newPin = pin + number;
    setPin(newPin);
    setError("");

    if (newPin.length === 4) {
      const savedPin = localStorage.getItem("temp_wallet_pin");

      setTimeout(() => {
        if (newPin === savedPin) {
          localStorage.setItem("wallet_pin_set", "true");
          localStorage.removeItem("temp_wallet_pin");
          navigate("/biometric-setup");
        } else {
          setError("PIN does not match. Try again.");
          setPin("");
        }
      }, 250);
    }
  };

  const handleDelete = () => {
    setPin((prev) => prev.slice(0, -1));
    setError("");
  };

  return (
    <MobileLayout>
      <main className="min-h-screen bg-black px-7 pt-16 pb-10 flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-white"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>

          <h1 className="text-white text-[24px] font-bold">
            Confirm PIN
          </h1>
        </div>

        {/* Content */}
        <section className="flex-1 flex flex-col items-center justify-center -mt-10">
          <div className="w-24 h-24 rounded-full bg-[#111A35] flex items-center justify-center mb-8">
            <LockKeyhole size={46} className="text-[#00E58F]" />
          </div>

          <h2 className="text-white text-[28px] font-bold text-center">
            Confirm Wallet PIN
          </h2>

          <p className="text-[#8491B0] text-center mt-3 leading-6 max-w-[300px]">
            Re-enter your 4-digit PIN to confirm.
          </p>

          <div className="mt-12">
            <PinDots pin={pin} />
          </div>

          {error && (
            <p className="text-[#FF4D6D] text-sm mt-6">
              {error}
            </p>
          )}
        </section>

        {/* Number Pad */}
        <div className="pb-4">
          <NumberPad
            onNumberClick={handleNumberClick}
            onDelete={handleDelete}
          />
        </div>
      </main>
    </MobileLayout>
  );
};

export default ConfirmPin;