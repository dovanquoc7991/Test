import { useState } from 'react';
import { Gift as GiftIcon, Heart, Camera, Users, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Gift = () => {
  const [activeTab, setActiveTab] = useState('presence');

  const sections = {
    presence: {
      icon: <Users className="text-green-500" size={24} />,
      title: "Sự Hiện Diện",
      content: "Sự có mặt của bạn trong ngày trọng đại này là món quà ý nghĩa nhất với chúng mình!"
    },
    memories: {
      icon: <Camera className="text-pink-500" size={24} />,
      title: "Khoảnh Khắc",
      content: "Cùng nhau lưu giữ những kỷ niệm đẹp trong ngày cưới qua những bức ảnh"
    },
    support: {
      icon: <Heart className="text-red-500" size={24} />,
      title: "Ủng Hộ", 
      content: "Những cách bạn có thể hỗ trợ và chia sẻ niềm vui cùng chúng mình"
    }
  };

  const memoryIdeas = [
    "Chụp ảnh selfie với cô dâu chú rể",
    "Ghi lại khoảnh khắc trang trí tiệc cưới", 
    "Chụp ảnh các món ăn đặc biệt",
    "Ghi hình những điệu nhảy vui nhộn",
    "Chụp ảnh cùng các vị khách khác"
  ];

  const supportWays = [
    {
      title: "Chia sẻ trên MXH",
      description: "Tag chúng mình trong bài đăng về đám cưới",
      icon: "📱"
    },
    {
      title: "Giúp đỡ trang trí",
      description: "Cùng chuẩn bị không gian tiệc cưới",
      icon: "🎀"
    },
    {
      title: "Đón tiếp khách",
      description: "Hỗ trợ đón tiếp và hướng dẫn khách mời",
      icon: "👋"
    },
    {
      title: "Chụp ảnh cùng",
      description: "Tạo dáng vui vẻ trong bức ảnh tập thể",
      icon: "📸"
    }
  ];

  return (
    <section 
      id="gift"
      className="py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-100 relative"
      style={{ fontFamily: "'Inter', 'Segoe UI', 'Roboto', 'Arial', sans-serif" }}
    >
      <div className="container mx-auto text-center max-w-4xl relative">
        {/* Header */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <GiftIcon className="text-pink-500" size={32} />
          <h2 className="text-4xl font-serif text-gray-800" style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}>
            Mừng Cưới
          </h2>
        </div>
        
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Sự hiện diện của bạn là món quà quý giá nhất. Hãy cùng chúng mình tạo nên những kỷ niệm đáng nhớ!
        </p>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(sections).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300
                ${activeTab === key 
                  ? 'bg-white text-pink-600 shadow-lg border-2 border-pink-200' 
                  : 'bg-pink-50 text-gray-600 hover:bg-pink-100 hover:text-pink-500 border-2 border-transparent'
                }
              `}
              style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
            >
              {section.icon}
              {section.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-pink-100"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            {sections[activeTab as keyof typeof sections].icon}
            <h3 
              className="text-2xl font-bold text-gray-800"
              style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
            >
              {sections[activeTab as keyof typeof sections].title}
            </h3>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6 max-w-2xl mx-auto">
            {sections[activeTab as keyof typeof sections].content}
          </p>

          {/* Tab-specific content */}
          {activeTab === 'presence' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-100">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="text-green-500" size={20} />
                  <h4 
                    className="text-xl font-semibold text-green-700"
                    style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
                  >
                    Lời Nhắn Từ Trái Tim
                  </h4>
                  <Sparkles className="text-green-500" size={20} />
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  &quot;Sự hiện diện của bạn không chỉ làm ấm áp không khí lễ cưới mà còn là 
                  lời chúc phúc ý nghĩa nhất cho hành trình mới của chúng mình. 
                  Cảm ơn bạn đã đến và chia sẻ niềm vui này!&quot;
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ delay: i * 0.1, repeat: Infinity, duration: 2 }}
                    >
                      <Heart size={18} className="text-green-500 fill-green-500" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'memories' && (
            <div className="space-y-6">
              <div className="bg-pink-50 rounded-xl p-6 border-2 border-pink-100">
                <h4 
                  className="text-xl font-semibold text-pink-700 mb-4"
                  style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
                >
                  🎉 Ý Tưởng Chụp Ảnh Cùng Nhau
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  {memoryIdeas.map((idea, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center gap-3 bg-white/80 p-3 rounded-lg border border-pink-200"
                    >
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Camera size={16} className="text-pink-500" />
                      </div>
                      <span className="text-gray-700 text-sm">{idea}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-white/60 rounded-lg border border-pink-200">
                  <p className="text-gray-600 text-sm mb-3">
                    <strong>📱 Chia sẻ ảnh với chúng mình qua:</strong>
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Facebook</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Zalo</span>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">Instagram</span>
                    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Messenger</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-6">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-100">
                <h4 
                  className="text-xl font-semibold text-red-700 mb-4"
                  style={{ fontFamily: "'Playfair Display', 'Times New Roman', serif" }}
                >
                  💝 Cùng Nhau Tạo Nên Ngày Đặc Biệt
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {supportWays.map((way, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="bg-white/80 p-4 rounded-lg border border-red-200 text-center"
                    >
                      <div className="text-2xl mb-2">{way.icon}</div>
                      <h5 className="font-semibold text-red-600 mb-2">{way.title}</h5>
                      <p className="text-gray-600 text-sm">{way.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 bg-white/60 p-4 rounded-lg border border-red-200">
                  <p className="text-gray-700 text-sm">
                    <strong>🤝 Mọi sự giúp đỡ và chia sẻ của bạn đều quý giá!</strong><br/>
                    Dù lớn hay nhỏ, sự hỗ trợ của bạn sẽ góp phần tạo nên một đám cưới thật trọn vẹn.
                  </p>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Footer Message */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-pink-300" />
            <Heart size={20} className="text-pink-400 fill-pink-400/30" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-pink-300" />
          </div>
          <p className="text-gray-600 italic">
            Trân trọng cảm ơn sự hiện diện và tình cảm của bạn!
          </p>
        </div>
      </div>

      {/* Thêm font support trong head của HTML */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
        `}
      </style>
    </section>
  );
};

export default Gift;