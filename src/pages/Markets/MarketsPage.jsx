import MobileLayout from "../../components/layout/MobileLayout";
import BottomNavigation from "../../components/layout/BottomNavigation";

const MarketsPage = () => {
  return (
    <MobileLayout>
      <div className="p-5">
        <h1 className="text-3xl font-bold">Markets</h1>
      </div>

      <BottomNavigation />
    </MobileLayout>
  );
};

export default MarketsPage;