import {
  ArrowUp,
  ArrowDown,
  Plus,
  Minus,
} from "lucide-react";

const actions = [
  {
    icon: ArrowUp,
    label: "Send",
    bg: "#091127",
    color: "#5976EF",
  },
  {
    icon: ArrowDown,
    label: "Receive",
    bg: "#02251B",
    color: "#00E58F",
  },
  {
    icon: Plus,
    label: "Buy",
    bg: "#2A1800",
    color: "#FFAA00",
  },
  {
    icon: Minus,
    label: "Sell",
    bg: "#2B0410",
    color: "#FF3F68",
  },
];

const QuickActions = () => {
  return (
    <div className="grid grid-cols-4 mt-8">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <div
            key={action.label}
            className="flex flex-col items-center"
          >
            <div
              className="w-[82px] h-[82px] rounded-full flex items-center justify-center border"
              style={{
                backgroundColor: action.bg,
              }}
            >
              <Icon
                size={36}
                color={action.color}
              />
            </div>

            <span className="text-[#A2ADD0] mt-4 text-xl font-medium">
              {action.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default QuickActions;