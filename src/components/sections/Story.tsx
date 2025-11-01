import React from "react";
import coupleCartoon from "../../assets/images/couple-cartoon.png"; // Đảm bảo đường dẫn đúng

interface StoryEvent {
  year: string;
  description: string;
}

const storyEvents: StoryEvent[] = [
  { year: "6/2024", description: "Lần đầu gặp gỡ, một ngày nắng đẹp..." },
  { year: "12/2024", description: "Chính thức hẹn hò, bắt đầu hành trình yêu." },
  { year: "3/2025", description: "Lời cầu hôn ngọt ngào dưới ánh hoàng hôn." },
  { year: "6/2025", description: "Ra mắt bố mẹ hai bên." },
  { year: "10/2025", description: "Lễ đính hôn ấm áp, tràn ngập yêu thương." },
  { year: "12/2025", description: "Về chung một nhà, viết tiếp câu chuyện tình yêu." },
];

const Story: React.FC = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {/* 💕 Hiệu ứng trái tim bay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-70 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${16 + Math.random() * 16}px`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        <img
          src={coupleCartoon}
          alt="Câu chuyện tình yêu"
          className="mx-auto h-28 w-auto mb-8 animate-bounce"
        />

        <h2 className="text-3xl font-bold text-rose-600 mb-10">
          Câu Chuyện Tình Yêu 💞
        </h2>

        <p className="text-gray-600 mb-16 italic max-w-xl mx-auto">
          “Mỗi khoảnh khắc bên nhau là một dấu mốc đáng nhớ trong hành trình yêu thương của chúng mình...”
        </p>

        {/* 🌸 Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-rose-200 via-pink-300 to-rose-100 -translate-x-1/2"></div>

          {storyEvents.map((event, index) => (
            <div
              key={index}
              className={`mb-10 flex flex-col md:flex-row items-center w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              } animate-fade-in-up`}
            >
              <div className="hidden md:block md:w-5/12"></div>

              <div className="z-10 bg-rose-400 rounded-full h-5 w-5 flex items-center justify-center shadow-md"></div>

              <div
                className={`w-full md:w-5/12 mt-6 md:mt-0 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
              >
                <div className="bg-white border border-rose-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1">
                  <h3 className="font-bold text-xl mb-2 text-rose-600 flex items-center gap-2 justify-center md:justify-start">
                    📅 {event.year}
                  </h3>
                  <p className="text-gray-700 italic">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-20 text-gray-700 italic text-lg">
          “Và hành trình ấy vẫn tiếp tục — cùng nhau viết nên chương hạnh phúc mãi mãi.” 💍
        </p>
      </div>

      {/* 🧡 CSS animation */}
      <style>{`
        @keyframes float-heart {
          0% {
            transform: translateY(100%) scale(0.8);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120%) scale(1.2);
            opacity: 0;
          }
        }
        .animate-float-heart {
          animation: float-heart 10s infinite ease-in-out;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease both;
        }
      `}</style>
    </section>
  );
};

export default Story;
