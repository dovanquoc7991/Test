import { Heart } from "lucide-react";
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
      transition={{ duration: 1.2 }}
      onClick={onEnter}
      className="fixed inset-0 z-[100] flex flex-col justify-center items-center text-center bg-cover bg-center cursor-pointer"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Lớp phủ mờ + gradient sang trọng */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70 backdrop-blur-[1.5px]" />

      {/* Nội dung chính */}
      <motion.div
        className="relative text-white space-y-6 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <p className="text-lg md:text-2xl text-white/90 tracking-wide font-light">
          Trân trọng mời bạn đến dự
        </p>

        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-wide drop-shadow-xl">
          Lễ Cưới
        </h1>

        {/* Tên cô dâu chú rể */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-4">
          <motion.span
            className="font-[Dancing Script] text-4xl md:text-5xl drop-shadow-md"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Văn Cường
          </motion.span>

          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart size={36} className="text-pink-400" />
          </motion.div>

          <motion.span
            className="font-[Dancing Script] text-4xl md:text-5xl drop-shadow-md"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          >
            Diễm My
          </motion.span>
        </div>

        {/* Dòng hướng dẫn */}
        <motion.p
          className="text-base md:text-lg text-white/80 italic tracking-wide"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Bấm để mở thiệp cưới
        </motion.p>

        {/* Trái tim trung tâm đập nhịp */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mx-auto mt-4"
        >
          <Heart size={52} className="text-rose-400 drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Hiệu ứng fade-out khi click */}
      <motion.div
        initial={{ opacity: 0 }}
        whileTap={{ opacity: 1, scale: 0.98 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-black/20"
      />
    </motion.div>
  );
};

export default Overlay;
