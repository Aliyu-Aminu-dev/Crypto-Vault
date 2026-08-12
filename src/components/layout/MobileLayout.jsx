const MobileLayout = ({ children }) => {
  return (
    <div className="mx-auto max-w-[430px] min-h-screen bg-black text-white relative overflow-hidden">
      {children}
    </div>
  );
};

export default MobileLayout;