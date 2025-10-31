import type Fireworks from 'fireworks-js';
import { useEffect, useRef } from 'react';

const FireworksEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      let fireworks: Fireworks;
      // Sử dụng dynamic import để đảm bảo chỉ chạy ở client
      import('fireworks-js').then(({ Fireworks }) => {
        if (!container.isConnected) return;
        fireworks = new Fireworks(container, {
          rocketsPoint: {
            min: 5,
            max: 10,
          },
          hue: {
            min: 0,
            max: 360,
          },
          delay: {
            min: 60,
            max: 120,
          },
          traceSpeed: 2,
          explosion: 5,
        });
        fireworks.start();
      });

      return () => fireworks?.stop();
    }
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[98]" />;
};

export default FireworksEffect;