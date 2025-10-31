import { Heart } from 'lucide-react';

const FallingHearts = () => {
  const heartCount = 4; // Số lượng trái tim

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[99]">
      {Array.from({ length: heartCount }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 3 + 4}s`, // Thời gian rơi từ 4-7s
          animationDelay: `${Math.random() * 5}s`, // Bắt đầu rơi ngẫu nhiên trong 5s đầu
          transform: `scale(${Math.random() * 0.5 + 0.5})`, // Kích thước ngẫu nhiên
          opacity: Math.random() * 0.5 + 0.5, // Độ mờ ngẫu nhiên
        };
        return (
          <Heart
            key={i}
            className="absolute top-[-10%] animate-fall text-pink-400"
            style={style}
            fill="currentColor"
          />
        );
      })}
    </div>
  );
};

export default FallingHearts;