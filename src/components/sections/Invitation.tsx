import { Leaf, Heart, Sparkles, Flower2 } from "lucide-react";
import { motion } from "framer-motion";

interface InvitationProps {
  names: {
    groom: string;
    bride: string;
  };
}

const Invitation = ({ names }: InvitationProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart size={24} fill="currentColor" />
          </motion.div>
        ))}
        
        {/* Floating flowers */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-200/50"
            style={{
              right: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 15, 0],
              rotate: [0, -180, -360],
              scale: [0.7, 1.1, 0.7],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Flower2 size={28} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            bg-white/80 backdrop-blur-sm rounded-3xl 
            border-2 border-rose-200/50 
            p-8 md:p-12 relative overflow-hidden
            shadow-2xl shadow-rose-100/50
            hover:shadow-3xl hover:shadow-rose-200/30 transition-shadow duration-300
          "
        >
          {/* Corner decorations - improved */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute top-6 left-6 text-rose-300"
          >
            <Leaf size={36} strokeWidth={1.5} />
            <Sparkles size={16} className="absolute -top-1 -right-1 text-amber-400" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-6 right-6 text-rose-300 -scale-x-100"
          >
            <Leaf size={36} strokeWidth={1.5} />
            <Sparkles size={16} className="absolute -top-1 -left-1 text-amber-400" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-6 text-rose-300 -scale-y-100"
          >
            <Leaf size={36} strokeWidth={1.5} />
            <Sparkles size={16} className="absolute -bottom-1 -right-1 text-amber-400" />
          </motion.div>

          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-6 right-6 text-rose-300 -scale-x-100 -scale-y-100"
          >
            <Leaf size={36} strokeWidth={1.5} />
            <Sparkles size={16} className="absolute -bottom-1 -left-1 text-amber-400" />
          </motion.div>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Title with decoration */}
            <div className="mb-8">
              <motion.h2
                initial={{ y: -20 }}
                whileInView={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="text-4xl md:text-5xl font-serif text-rose-800 mb-4 font-bold"
              >
                Trân trọng kính mời
              </motion.h2>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
                <Heart size={20} className="text-rose-400 fill-rose-400/30" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
              </div>
            </div>

            {/* Invitation message */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700 mb-8 font-light italic"
            >
              Đến dự buổi tiệc chung vui cùng gia đình chúng mình 
              trong ngày trọng đại của hai con:
            </motion.p>

            {/* Couple names - improved design */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                my-12 font-bold
                flex flex-col items-center justify-center
                text-[clamp(2.5rem,8vw,4rem)] leading-tight
                relative
              "
            >
              {/* Background decoration for names */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-50 to-transparent rounded-full blur-xl opacity-60" />
              
              <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                {/* Groom name */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="
                    block font-[Dancing Script] 
                    bg-gradient-to-br from-blue-600 to-blue-800 
                    bg-clip-text text-transparent
                    drop-shadow-sm
                  "
                >
                  {names.groom}
                </motion.span>

                {/* Heart separator */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="my-4 sm:my-0"
                >
                  <Heart 
                    size={48} 
                    className="text-rose-500 fill-rose-200/40 drop-shadow-lg" 
                  />
                </motion.div>

                {/* Bride name */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="
                    block font-[Dancing Script] 
                    bg-gradient-to-br from-pink-600 to-rose-800 
                    bg-clip-text text-transparent
                    drop-shadow-sm
                  "
                >
                  {names.bride}
                </motion.span>
              </div>
            </motion.div>

            {/* Closing message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-8 bg-gradient-to-r from-transparent to-amber-300" />
                <Flower2 size={24} className="text-amber-500" />
                <div className="h-px w-8 bg-gradient-to-l from-transparent to-amber-300" />
              </div>

              <p className="max-w-xl mx-auto text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                Sự hiện diện của bạn là niềm vinh hạnh cho gia đình chúng mình!
              </p>

              {/* Cute decorative element */}
              <motion.div
                animate={{ 
                  y: [0, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="mt-8 inline-block"
              >
                <div className="flex gap-2">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 1.5,
                        delay: i * 0.2
                      }}
                    >
                      <Heart 
                        size={20} 
                        className="text-rose-400 fill-rose-400/20" 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Invitation;