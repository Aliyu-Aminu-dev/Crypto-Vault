import {
  ChevronRight,
} from "lucide-react";

const ProfileMenuItem = ({
  icon,
  title,
  value,
}) => {
  return (
    <button
      className="
        mt-3
        w-full
        bg-[#131A2E]
        rounded-[20px]
        p-4
        flex
        items-center
        justify-between
      "
    >
      <div className="flex items-center gap-4">
        <div className="text-[#00E58F]">
          {icon}
        </div>

        <span className="text-white font-medium">
          {title}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {value && (
          <span className="text-[#8190B5] text-sm">
            {value}
          </span>
        )}

        <ChevronRight
          size={18}
          className="text-[#8190B5]"
        />
      </div>
    </button>
  );
};

export default ProfileMenuItem;