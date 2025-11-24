import Countdown from "react-countdown";

// Ép kiểu component Countdown thành 'any' để tránh lỗi tương thích với React 19
const CountdownComponent = Countdown as any;

// Ngày cưới của bạn (Năm, Tháng - 1, Ngày)
const weddingDate = new Date(2025, 11, 27);

const CountdownRenderer = ({ days, hours, minutes, seconds }: { days: number, hours: number, minutes: number, seconds: number }) => {
  return (
    <div className="flex justify-center gap-4 md:gap-8 text-center text-white">
      <div className="bg-black/30 p-4 rounded-lg min-w-[80px]">
        <div className="text-4xl font-bold">{days}</div>
        <span className="text-sm">Ngày</span>
      </div>
      <div className="bg-black/30 p-4 rounded-lg min-w-[80px]">
        <div className="text-4xl font-bold">{hours}</div>
        <span className="text-sm">Giờ</span>
      </div>
      <div className="bg-black/30 p-4 rounded-lg min-w-[80px]">
        <div className="text-4xl font-bold">{minutes}</div>
        <span className="text-sm">Phút</span>
      </div>
      <div className="bg-black/30 p-4 rounded-lg min-w-[80px]">
        <div className="text-4xl font-bold">{seconds}</div>
        <span className="text-sm">Giây</span>
      </div>
    </div>
  );
};

const WeddingCountdown = () => {
  return <CountdownComponent date={weddingDate} renderer={CountdownRenderer} />;
};

export default WeddingCountdown;