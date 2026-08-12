import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const AuthInput = ({
  type = "text",
  placeholder,
  value,
  onChange,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full h-[58px] rounded-[18px] border border-white/80 px-5 flex items-center">
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none text-white placeholder:text-[#C9C9C9] text-[17px]"
      />

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-[#C9C9C9]"
        >
          {showPassword ? <EyeOff size={26} /> : <Eye size={26} />}
        </button>
      )}
    </div>
  );
};

export default AuthInput;