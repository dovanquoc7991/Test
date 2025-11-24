import WeddingCountdown from "../ui/Countdown";
import heroImage from "../../assets/images/background.jpg";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  names: {
    groom: string;
    bride: string;
  };
}

const Hero = ({ names }: HeroProps) => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${heroImage})`,
        // Remove bg-fixed và thêm fallback
        backgroundColor: '#000',
      }}
    >
      {/* Lớp phủ gradient hiện đại - làm tối hơn để chữ nổi bật */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-purple-900/30 to-rose-900/40"></div>
      
      {/* Hiệu ứng ánh sáng lấp lánh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        ))}
      </div>

      {/* Nội dung chính - Sửa lỗi căn giữa trên mobile */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
        {/* Save The Date */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 w-full flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent to-rose-200"></div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            >
              <Heart className="text-rose-200 w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" />
            </motion.div>
            <div className="h-px w-8 sm:w-12 bg-gradient-to-l from-transparent to-rose-200"></div>
          </div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-normal sm:tracking-tight mb-4 sm:mb-6 leading-tight text-center w-full"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 12px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)',
              letterSpacing: '0.02em',
              color: '#fef7ff'
            }}
          >
            SAVE THE DATE
          </motion.h1>
        </motion.div>

        {/* Tên cô dâu chú rể */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8 sm:mb-12 w-full flex flex-col items-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-4 w-full">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide whitespace-nowrap text-center"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 15px rgba(255,255,255,0.2)',
                color: '#fce7f3'
              }}
            >
              {names.groom}
            </motion.span>

            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="text-rose-200 mx-1 sm:mx-2 my-2 sm:my-0 flex-shrink-0"
            >
              <Heart className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9" fill="currentColor" />
            </motion.div>

            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide whitespace-nowrap text-center"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 15px rgba(255,255,255,0.2)',
                color: '#fce7f3'
              }}
            >
              {names.bride}
            </motion.span>
          </div>
        </motion.div>

        {/* Ngày cưới */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8 sm:mb-12 w-full flex justify-center"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-6 sm:px-8 py-3 sm:py-4 border border-white/30 shadow-2xl mx-auto">
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider sm:tracking-widest text-center"
              style={{ 
                textShadow: '1px 1px 6px rgba(0,0,0,0.6), 0 0 10px rgba(255,255,255,0.3)',
                color: '#fdf2f8'
              }}
            >
              27.12.2025
            </motion.p>
          </div>
        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8 sm:mb-12 w-full flex justify-center"
        >
          <div className="w-full max-w-2xl flex justify-center">
            <WeddingCountdown />
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center items-center gap-4 sm:gap-6 mt-8 w-full"
        >
          <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-rose-200"></div>
          <motion.div
            animate={{ 
              y: [0, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="text-amber-200 w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
          <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-rose-200"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/90 text-xs sm:text-sm flex flex-col items-center gap-1 sm:gap-2"
        >
          <span className="text-xs" style={{ color: '#fef7ff' }}>Scroll</span>
          <div className="w-px h-6 sm:h-8 bg-white/80 rounded-full"></div>
        </motion.div>
      </motion.div>

      {/* Thêm Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap');
        `}
      </style>
    </section>
  );
};

export default Hero;