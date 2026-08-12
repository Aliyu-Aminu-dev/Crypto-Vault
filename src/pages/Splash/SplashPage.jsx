import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "../../components/layout/MobileLayout";
import Logo from '../../assets/images/Logo.png';

const SplashPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black px-6">
        <h1>
            <img src={Logo} alt="cryptovault" className="mt-6 text-[#00E58F] text-4xl font-bold" />
        </h1>
      </div>
    </MobileLayout>
  );
};

export default SplashPage;