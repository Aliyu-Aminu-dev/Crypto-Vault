const ActivityCard = ({ transaction }) => {
    return (
        <div className="bg-[#131A2E] rounded-[24px] p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div>
                        <h3 className="text-white font-semibold">
                            <img
                                src={transaction.icon}
                                alt={transaction.coin}
                                className="w-10 h-10" />
                        </h3>

                        <p className="text-[#8190B5] text-sm">
                            {transaction.date}
                        </p>
                    </div>
                </div>

                <div className="text-right">
                    <h3 className="text-white font-semibold">
                        {transaction.amount}
                    </h3>

                    <p className="text-[#8190B5] text-sm">
                        {transaction.value}
                    </p>
                </div>
            </div>

            <div className="flex justify-between mt-4">
                <span className="text-[#8190B5] text-sm">
                    {transaction.type}
                </span>

                <span
                    className={`text-sm font-medium ${transaction.status === "Completed"
                            ? "text-[#00E58F]"
                            : "text-[#FFB020]"
                        }`}
                >
                    {transaction.status}
                </span>
            </div>
        </div>
    );
};

export default ActivityCard;