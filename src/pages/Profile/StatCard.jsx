const StatCard = ({ title, value }) => {
  return (
    <div className="bg-[#131A2E] rounded-[20px] p-4 text-center">
      <p className="text-[#8190B5] text-sm">
        {title}
      </p>

      <h3 className="text-white font-bold mt-2">
        {value}
      </h3>
    </div>
  );
};

export default StatCard;