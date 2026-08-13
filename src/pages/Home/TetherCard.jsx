import tether from "../../assets/images/tether.png";

const TetherCard = () => {
  return (
    <div className="bg-[#131A2E] rounded-[28px] p-6 mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={tether} alt="cryptovault" className="mt-2 w-[40px] h-[40px]" />

          <div>
            <h3 className="text-white text-[18px] font-semibold">
              Tether
            </h3>

            <p className="text-[#8190B5] text-lg">
              350.00 USDT
            </p>
          </div>
        </div>

        <div className="text-right">
          <h3 className="text-white text-[22px] font-bold">
            $350.00
          </h3>

          <div className="mt-3 bg-[#113948] px-4 py-2 rounded-full inline-block">
            <span className="text-[#00E58F] font-semibold">
              ▲ 0.01%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TetherCard;