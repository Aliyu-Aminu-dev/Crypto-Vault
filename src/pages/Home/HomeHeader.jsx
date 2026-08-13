import { Bell } from "lucide-react";
import Profile from "../../assets/images/Profile.png";

const HomeHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={Profile} alt="cryptovault" className="mt-2 w-[50px] h-[50px]" />
        
        <div>
          <p className="text-[#8190B5] text-sm">
            Welcome back,
          </p>

          <h2 className="text-white text-xl font-bold">
            Ugo Nelly
          </h2>
        </div>
      </div>

      <button className="w-10 h-10 rounded-full bg-[#131A2E] flex items-center justify-center relative">
        <Bell size={28} className="text-[#8190B5]" />

        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
      </button>
    </div>
  );
};

export default HomeHeader;