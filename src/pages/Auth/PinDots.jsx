const PinDots = ({ pin, length = 4 }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      {Array.from({ length }).map((_, index) => {
        const isFilled = index < pin.length;

        return (
          <div
            key={index}
            className={`w-4 h-4 rounded-full border transition-all duration-200 ${
              isFilled
                ? "bg-[#00E58F] border-[#00E58F] scale-110"
                : "bg-transparent border-[#66739C]"
            }`}
          />
        );
      })}
    </div>
  );
};

export default PinDots;