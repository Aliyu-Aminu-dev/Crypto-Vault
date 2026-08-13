const TransactionItem = ({
  icon,
  title,
  subTitle,
  amount,
  positive = true,
}) => {
  return (
    <div className="flex items-center justify-between py-4 border-b border-[#151C2E]">
      <div className="flex items-center gap-4">
        {icon}

        <div>
          <h3 className="text-white text-[18px] font-medium">
            {title}
          </h3>

          <p className="text-[#8190B5]">
            {subTitle}
          </p>
        </div>
      </div>

      <span
        className={`text-[20px] font-bold ${
          positive
            ? "text-[#00E58F]"
            : "text-[#FF4D6D]"
        }`}
      >
        {amount}
      </span>
    </div>
  );
};

export default TransactionItem;