import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/background.jpg";

interface OverlayProps {
  onEnter: () => void;
}

const Overlay = ({ onEnter }: OverlayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      onClick={onEnter}
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center text-center bg-cover bg-center cursor-pointer overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Lớp phủ gradient sang trọng cho thiệp cưới */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-purple-900/15 to-amber-900/25 backdrop-blur-[2px]" />
      
      {/* Hiệu ứng ánh sáng lấp lánh */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
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

      {/* Viền trang trí */}
      <div className="absolute inset-4 border-2 border-rose-300/30 rounded-lg pointer-events-none" />
      <div className="absolute inset-8 border border-amber-200/20 rounded-lg pointer-events-none" />

      {/* Nội dung chính */}
      <motion.div
        className="relative text-white space-y-8 px-6 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        {/* Dòng giới thiệu */}
        <motion.p
          className="text-xl md:text-2xl text-amber-100 tracking-widest font-light italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Hôn lễ của chúng mình
        </motion.p>

        {/* Tiêu đề chính */}
        <motion.h1
          className="text-6xl md:text-8xl font-serif font-bold tracking-wider text-rose-50 drop-shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
        >
          Save The Date
        </motion.h1>

        {/* Tên cô dâu chú rể */}
        <motion.div
          className="flex flex-col items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mb-4" />
          
          <div className="flex items-center justify-center gap-6 md:gap-8">
            <motion.span
              className="font-[Dancing Script] text-5xl md:text-6xl text-amber-50 drop-shadow-lg font-semibold"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              Văn Cường
            </motion.span>

            <motion.div
              className="relative"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            >
              <Heart 
                size={44} 
                className="text-rose-400 drop-shadow-xl fill-rose-400/20" 
              />
            </motion.div>

            <motion.span
              className="font-[Dancing Script] text-5xl md:text-6xl text-amber-50 drop-shadow-lg font-semibold"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.3 }}
            >
              Diễm My
            </motion.span>
          </div>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-4" />
        </motion.div>

        {/* Ngày tổ chức */}
        <motion.div
          className="text-amber-100/90 text-lg md:text-xl tracking-wide font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          27.12.2024
        </motion.div>

        {/* Hướng dẫn tương tác */}
        <motion.div
          className="mt-8 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.p
            className="text-base md:text-lg text-rose-100/80 italic tracking-wide font-light"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Chạm để mở thiệp
          </motion.p>
          
          {/* Trái tim nhấp nháy */}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              y: [0, -5, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="mx-auto"
          >
            <Heart 
              size={48} 
              className="text-rose-300 drop-shadow-xl fill-rose-300/30" 
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hiệu ứng khi click */}
      <motion.div
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-gradient-to-br from-rose-400/10 to-purple-400/10 backdrop-blur-[1px]"
      />

      {/* Hiệu ứng cánh hoa bay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200/30"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, window.innerHeight + 100],
              x: [0, Math.random() * 100 - 50],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            ❦
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Overlay;