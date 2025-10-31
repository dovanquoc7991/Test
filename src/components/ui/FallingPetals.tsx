import { Flower } from 'lucide-react';

const FallingPetals = () => {
  const petalCount = 4; // Số lượng cánh hoa

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[97]">
      {Array.from({ length: petalCount }).map((_, i) => {
        const style = {
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 5 + 6}s`, // Thời gian rơi từ 6-11s
          animationDelay: `${Math.random() * 8}s`,
          transform: `scale(${Math.random() * 0.6 + 0.7})`,
          opacity: Math.random() * 0.4 + 0.6,
        };
        return (
          <Flower
            key={i}
            className="absolute top-[-10%] animate-sway-fall text-pink-300"
            style={style}
          />
        );
      })}
    </div>
  );
};

export default FallingPetals;