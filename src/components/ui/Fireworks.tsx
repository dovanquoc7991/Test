import { useEffect, useRef } from 'react';
import type { FireworksOptions } from 'fireworks-js';

const FireworksEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let fireworks: any;

    import('fireworks-js').then(({ Fireworks }) => {
      if (!container.isConnected) return;

      // 🌸 Cấu hình hiệu ứng mềm mại, hợp với thiệp cưới
      const options: FireworksOptions = {
        rocketsPoint: { min: 45, max: 55 }, // Bắn từ giữa màn hình
        hue: { min: 300, max: 360 }, // màu hồng - tím
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        delay: { min: 80, max: 150 }, // Tăng độ trễ để pháo hoa thưa hơn
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.2,
        traceSpeed: 5,
        explosion: 6,
        autoresize: true,
        intensity: 5, // Giảm cường độ, lượng pháo hoa sẽ ít hơn
      };

      fireworks = new Fireworks(container, options);
      fireworks.start();
    });

    return () => fireworks?.stop();
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[98]" />
  );
};

export default FireworksEffect;
