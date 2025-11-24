import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Flower2 } from "lucide-react";
import coupleCartoon from "../../assets/images/couple-cartoon.png";

interface StoryEvent {
  year: string;
  description: string;
  icon: string;
  color: string;
}

const storyEvents: StoryEvent[] = [
  {
    year: "6/2024",
    description: "Lần đầu gặp gỡ, một ngày nắng đẹp tại công viên thành phố",
    icon: "💕",
    color: "from-pink-400 to-rose-400"
  },
  {
    year: "12/2024",
    description: "Chính thức hẹn hò, bắt đầu hành trình yêu thương ngọt ngào",
    icon: "💑",
    color: "from-purple-400 to-pink-400"
  },
  {
    year: "3/2025",
    description: "Lời cầu hôn ngọt ngào dưới ánh hoàng hôn trên bãi biển",
    icon: "💍",
    color: "from-amber-400 to-orange-400"
  },
  {
    year: "6/2025",
    description: "Ra mắt bố mẹ hai bên trong bữa cơm ấm cúng",
    icon: "👨‍👩‍👧‍👦",
    color: "from-green-400 to-emerald-400"
  },
  {
    year: "10/2025",
    description: "Lễ đính hôn ấm áp, tràn ngập yêu thương từ gia đình",
    icon: "💒",
    color: "from-blue-400 to-cyan-400"
  },
  {
    year: "12/2025",
    description: "Về chung một nhà, viết tiếp câu chuyện tình yêu bất tận",
    icon: "🏡",
    color: "from-rose-500 to-red-400"
  },
];

const Story: React.FC = () => {
  return (
    <section 
      id="story"
      className="relative py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50 overflow-hidden"
      style={{ 
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif" 
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-200/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart size={20} fill="currentColor" />
          </motion.div>
        ))}

        {/* Sparkles */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-200/30"
            style={{
              right: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [0, -180, -360],
              scale: [0.7, 1.1, 0.7],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Sparkles size={16} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut"
            }}
            className="mb-8"
          >
            <img
              src={coupleCartoon}
              alt="Câu chuyện tình yêu"
              className="mx-auto h-32 w-auto drop-shadow-2xl"
            />
          </motion.div>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
            <Flower2 className="text-rose-500" size={32} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
          </div>

          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
          >
            Hành Trình Yêu
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light italic">
            &quot;Mỗi khoảnh khắc bên nhau là một chương đẹp trong cuốn sách tình yêu của chúng mình...&quot;
          </p>
        </motion.div>

        {/* Timeline - SIMPLE FIXED VERSION */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-rose-200 via-pink-300 to-rose-200 -translate-x-1/2 hidden md:block"></div>

          {storyEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-12 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Empty space for layout */}
              <div className="hidden md:block md:w-2/5"></div>

              {/* Center Circle with Year */}
              <div className="relative z-10 flex-shrink-0 mb-4 md:mb-0">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`
                    relative bg-gradient-to-br ${event.color} 
                    h-20 w-20 rounded-full flex flex-col items-center justify-center 
                    shadow-2xl shadow-black/20 border-2 border-white
                    text-white
                  `}
                >
                  <span className="text-2xl mb-1">{event.icon}</span>
                  <span className="text-xs font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {event.year}
                  </span>
                  
                  {/* Pulsing effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-current opacity-30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-2/5 mt-4 md:mt-0">
                <motion.div
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                  }}
                  className={`
                    bg-white/80 backdrop-blur-sm rounded-2xl p-6 
                    border-2 border-white shadow-xl shadow-black/5
                    hover:shadow-2xl hover:shadow-black/10 transition-all duration-500
                    relative overflow-hidden group
                    mx-4
                  `}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />

                  <p className="text-gray-700 leading-relaxed text-center relative z-10">
                    {event.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-3 right-3 text-rose-200/40 group-hover:text-rose-300/60 transition-colors text-xl">
                    {event.icon}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for layout */}
              <div className="hidden md:block md:w-2/5"></div>
            </motion.div>
          ))}
        </div>

        {/* Closing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-rose-100 shadow-lg max-w-2xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              className="text-4xl mb-4"
            >
              💖
            </motion.div>

            <h3 
              className="text-2xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
            >
              Và Hành Trình Vẫn Tiếp Tục...
            </h3>

            <p className="text-gray-600 italic text-lg leading-relaxed">
              &quot;Cùng nhau viết nên những chương mới ngập tràn hạnh phúc,
              yêu thương và những kỷ niệm đẹp mãi về sau.&quot;
            </p>

            <div className="flex items-center justify-center gap-2 mt-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ delay: i * 0.2, repeat: Infinity, duration: 2 }}
                >
                  <Heart size={20} className="text-rose-400 fill-rose-400" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Decorative Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300" />
          <Heart size={24} className="text-rose-400 fill-rose-400/30" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300" />
        </motion.div>
      </div>

      {/* Thêm Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
          
          /* Đảm bảo font tiếng Việt hiển thị đúng */
          body {
            font-feature-settings: "kern" 1, "liga" 1, "calt" 1;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
        `}
      </style>
    </section>
  );
};

export default Story;