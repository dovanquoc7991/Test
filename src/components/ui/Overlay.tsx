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
      className="fixed inset-0 bg-cover bg-center z-[100] flex flex-col justify-center items-center text-center cursor-pointer"
      style={{ backgroundImage: `url(${heroImage})` }}
      onClick={onEnter}
    >
      {/* lớp phủ mờ và gradient nhẹ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 backdrop-blur-[2px]" />

      <div className="relative text-white animate-fade-in-up">
        <p className="text-2xl mb-4 text-white/90 tracking-wide">
          Trân trọng mời bạn đến dự
        </p>

        <h1 className="text-6xl font-serif font-bold mb-6 tracking-wide drop-shadow-lg">
          Lễ Cưới
        </h1>

        {/* tên cô dâu chú rể */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className="font-[Dancing Script] text-5xl">Văn Cường</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Heart size={32} className="text-pink-400" />
          </motion.div>
          <span className="font-[Dancing Script] text-5xl">Diễm My</span>
        </div>

        <motion.p
          className="text-lg text-white/80 tracking-wide mb-6"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Bấm vào để mở thiệp cưới
        </motion.p>

        {/* trái tim nhịp đập chính giữa */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
          className="mx-auto"
        >
          <Heart size={48} className="text-rose-400 drop-shadow-md" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Overlay;
