import {
  House,
  ChartNoAxesCombined,
  ArrowLeftRight,
  Clock3,
  User,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const BottomNavigation = () => {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] h-24 bg-[#08112d] rounded-t-[35px] flex items-center justify-around z-50">
      <NavLink to="/home">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-[#00E58F]" : "text-[#66739C]"
            }`}
          >
            <House size={24} />
            <span className="text-xs">Home</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/markets">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-[#00E58F]" : "text-[#66739C]"
            }`}
          >
            <ChartNoAxesCombined size={24} />
            <span className="text-xs">Markets</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/trade">
        {({ isActive }) => (
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center ${
              isActive ? "bg-[#00E58F]" : "bg-[#18254A]"
            }`}
          >
            <ArrowLeftRight
              size={24}
              className={isActive ? "text-black" : "text-white"}
            />
          </div>
        )}
      </NavLink>

      <NavLink to="/activity">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-[#00E58F]" : "text-[#66739C]"
            }`}
          >
            <Clock3 size={24} />
            <span className="text-xs">Activity</span>
          </div>
        )}
      </NavLink>

      <NavLink to="/profile">
        {({ isActive }) => (
          <div
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-[#00E58F]" : "text-[#66739C]"
            }`}
          >
            <User size={24} />
            <span className="text-xs">Profile</span>
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default BottomNavigation;