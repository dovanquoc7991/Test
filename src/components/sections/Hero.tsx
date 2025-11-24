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
      className="relative min-h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center text-center p-4 overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Lớp phủ gradient hiện đại */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 to-rose-900/30"></div>
      
      {/* Hiệu ứng ánh sáng lấp lánh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200/50"
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

      {/* Nội dung chính */}
      <div className="relative z-10 p-6 md:p-8 text-white max-w-4xl mx-auto">
        {/* Save The Date - Hiện đại */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300"></div>
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
              <Heart className="text-rose-300" size={32} fill="currentColor" />
            </motion.div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>

          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              textShadow: '2px 2px 8px rgba(0,0,0,0.6)'
            }}
          >
            SAVE THE DATE
          </motion.h1>
        </motion.div>

        {/* Tên cô dâu chú rể - Dễ thương */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-6 mb-4">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                textShadow: '2px 2px 6px rgba(0,0,0,0.5)'
              }}
            >
              {names.groom}
            </motion.span>

            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="text-rose-300 mx-2"
            >
              <Heart size={36} fill="currentColor" />
            </motion.div>

            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
              style={{ 
                fontFamily: "'Dancing Script', cursive",
                textShadow: '2px 2px 6px rgba(0,0,0,0.5)'
              }}
            >
              {names.bride}
            </motion.span>
          </div>
        </motion.div>

        {/* Ngày cưới - Nổi bật */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20 shadow-2xl">
            <motion.p
              className="text-3xl md:text-4xl font-bold tracking-widest text-rose-100"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
            >
              27.12.2025
            </motion.p>
          </div>
        </motion.div>

        {/* Countdown - Hiện đại */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mb-8"
        >
          <WeddingCountdown />
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex justify-center items-center gap-6 mt-8"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-300"></div>
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
            <Sparkles className="text-amber-200" size={20} />
          </motion.div>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-300"></div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/80 text-sm flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <div className="w-px h-8 bg-white/60 rounded-full"></div>
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