import { useNavigate } from "react-router-dom";

import MobileLayout from "../../components/layout/MobileLayout";

import illustration from "../../assets/images/illustration.png";

const PasswordChanged = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="min-h-screen bg-black flex flex-col justify-center items-center px-8">
         <img src={illustration} alt="cryptovault" className="mt-6 text-[#00E58F] text-4xl font-bold w-[175px] h-[175px]" />

        <h2 className="mt-6 text-[#00E58F] text-3xl font-bold text-center">
          Change password successfully!
        </h2>

        <p className="mt-5 text-white text-center leading-7">
          You have successfully changed password.
          <br />
          Please use the new password when Sign in.
        </p>

        <button
          onClick={() => navigate("/login")}
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
          Ok
        </button>
      </div>
    </MobileLayout>
  );
};

export default PasswordChanged;