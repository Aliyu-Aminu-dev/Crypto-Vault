import MobileLayout from "../../components/layout/MobileLayout";
import BottomNavigation from "../../components/layout/BottomNavigation";
import StatCard from "./StatCard";
import SectionTitle from "./SectionTitle";
import ProfileMenuItem from "./ProfileMenuItem";
import {
  ChevronRight,
  User,
  Shield,
  Bell,
  Wallet,
  CreditCard,
  Globe,
  Moon,
  Smartphone,
  LogOut,
  BadgeCheck,
} from "lucide-react";

import Profile2 from "../../assets/images/Profile2.png";
import logo from "../../assets/images/Logo.png";

const ProfilePage = () => {
  return (
    <MobileLayout>
      <div className="px-5 pt-8 pb-32">
        {/* Header */}
        <h1 className="text-white text-[34px] font-bold">
          Profile
        </h1>

        {/* User Card */}
        <div className="mt-8 bg-[#131A2E] rounded-[30px] p-5">
          <div className="flex justify-between">
          <div className="flex gap-4">
            <img src={Profile2} alt="profile2" className="mt-2 w-[50px] h-[50px]" />

            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-white text-xl font-bold">
                  Ugo Nelly
                </h2>

                <BadgeCheck
                  size={18}
                  className="text-[#00E58F]"
                />
              </div>

              <p className="text-[#8190B5] mt-1">
                ugo@example.com
              </p>

              <span className="inline-flex mt-3 px-3 py-1 rounded-full bg-[#02251B] text-[#00E58F] text-xs font-semibold">
                Verified Account
              </span>
            </div>
            </div>
            <img src={logo} alt="logo" className="mt-2 w-[50px] h-[55px]" />

          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-3 gap-3 mt-5">
          <StatCard title="Assets" value="$1.6K" />
          <StatCard title="Trades" value="128" />
          <StatCard title="Activity" value="243" />
        </div>

        {/* Account */}
        <SectionTitle title="Account" />

        <ProfileMenuItem
          icon={<User size={20} />}
          title="Personal Information"
        />

        <ProfileMenuItem
          icon={<Wallet size={20} />}
          title="Wallet Management"
        />

        <ProfileMenuItem
          icon={<CreditCard size={20} />}
          title="Payment Methods"
        />

        {/* Security */}
        <SectionTitle title="Security" />

        <ProfileMenuItem
          icon={<Shield size={20} />}
          title="Wallet PIN"
          value="Enabled"
        />

        <ProfileMenuItem
          icon={<Smartphone size={20} />}
          title="Biometric Login"
          value="On"
        />

        <ProfileMenuItem
          icon={<Shield size={20} />}
          title="2FA Authentication"
        />

        <ProfileMenuItem
          icon={<Shield size={20} />}
          title="Active Devices"
        />

        {/* Preferences */}
        <SectionTitle title="Preferences" />

        <ProfileMenuItem
          icon={<Bell size={20} />}
          title="Notifications"
        />

        <ProfileMenuItem
          icon={<Globe size={20} />}
          title="Language"
          value="English"
        />

        <ProfileMenuItem
          icon={<Moon size={20} />}
          title="Appearance"
          value="Dark"
        />

        {/* Logout */}
        <button
          className="
            mt-10
            w-full
            h-[58px]
            rounded-[18px]
            bg-[#240D14]
            text-[#FF4D6D]
            font-semibold
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      <BottomNavigation />
    </MobileLayout>
  );
};

export default ProfilePage;