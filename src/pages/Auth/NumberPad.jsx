import { Delete } from "lucide-react";

const NumberPad = ({ onNumberClick, onDelete }) => {
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "delete"];

  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {numbers.map((item, index) => {
        if (item === "") {
          return <div key={index} />;
        }

        if (item === "delete") {
          return (
            <button
              key={index}
              type="button"
              onClick={onDelete}
              className="h-16 rounded-2xl bg-[#111A35] text-white flex items-center justify-center active:scale-95 transition"
            >
              <Delete size={26} />
            </button>
          );
        }

        return (
          <button
            key={index}
            type="button"
            onClick={() => onNumberClick(item)}
            className="h-16 rounded-2xl bg-[#111A35] text-white text-2xl font-semibold active:scale-95 transition"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default NumberPad;