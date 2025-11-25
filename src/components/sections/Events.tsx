import { useState } from "react";
import { MapPin, X, Clock, Calendar, Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Events = () => {
  const brideCeremonyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15513.293854873184!2d109.18256625177891!3d13.577039021840289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f74c5495312c5%3A0xd3b27bedd3749acb!2sQu%C3%A1n%20Trung%20Trinh!5e0!3m2!1svi!2s!4v1764006211204!5m2!1svi!2s";
  const groomCeremonyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124298.32919189973!2d109.13911436956008!3d13.205039877951199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f9547a2e62f4b%3A0x86927cbbf8f9045c!2zTmjDoCBow6BuZyBUaeG7h2MgY8aw4bubaSBIb8OgaSBEdXnDqm4gMg!5e0!3m2!1svi!2s!4v1761933697294!5m2!1svi!2s";
  const weddingPartyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8121914611256!2d106.73124677440467!3d10.825680089326049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527881e378ad7%3A0xe56516934de312b0!2sWhite%20Garden%20GH!5e0!3m2!1svi!2s!4v1764003767403!5m2!1svi!2s";

  const [showMap, setShowMap] = useState(false);
  const [currentMapUrl, setCurrentMapUrl] = useState('');

  const events = [
    {
      id: 1,
      title: "Lễ Vu Quy",
      subtitle: "Nhà Gái",
      time: "08:00",
      date: "11.12.2025",
      location: "Tư gia nhà gái",
      address: "Dân Phố Trung Trinh, P.Sông Cầu, T. Đắk LắK",
      mapUrl: brideCeremonyMapUrl,
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      icon: "💖",
      animationDelay: 0.1
    },
    {
      id: 2,
      title: "Lễ Tân Hôn",
      subtitle: "Nhà Trai",
      time: "8:00",
      date: "13.12.2025",
      location: "Tư gia nhà trai",
      address: "Thôn Mỹ Phú Nam, Xã Mỹ Lợi, Huyện Phù Mỹ, Tỉnh Bình Định",
      mapUrl: groomCeremonyMapUrl,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      icon: "💙",
      animationDelay: 0.3
    },
    {
      id: 3,
      title: "Tiệc Cưới",
      subtitle: "Tiệc Chung Vui",
      time: "17:30",
      date: "27.12.2025",
      location: "Nhà hàng White Garden GH",
      address: "319/15 Bình Quới, Phường 28, Bình Thạnh, Thành phố Hồ Chí Minh",
      mapUrl: weddingPartyMapUrl,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      icon: "🎉",
      animationDelay: 0.5
    }
  ];

  const openMap = (mapUrl: string) => {
    setCurrentMapUrl(mapUrl);
    setShowMap(true);
  };

  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart size={28} fill="currentColor" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
            <Sparkles className="text-rose-500" size={32} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
            Thông Tin Hôn Lễ
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Cùng chung vui với chúng mình trong những khoảnh khắc trọng đại
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, _index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: event.animationDelay }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className={`
                ${event.bgColor} rounded-3xl p-8 h-full
                border-2 border-white shadow-2xl shadow-black/5
                hover:shadow-3xl hover:shadow-black/10 transition-all duration-500
                relative overflow-hidden
              `}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Corner Accents */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${event.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br ${event.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />

                {/* Event Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-4xl mb-4 relative z-10"
                >
                  {event.icon}
                </motion.div>

                {/* Event Title */}
                <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2 relative z-10">
                  {event.title}
                </h3>
                
                <p className={`text-lg font-semibold bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-6 relative z-10`}>
                  {event.subtitle}
                </p>

                {/* Date & Time */}
                <div className="space-y-3 mb-6 relative z-10">
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <Calendar size={18} className="text-rose-400" />
                    <span className="font-semibold">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 text-gray-700">
                    <Clock size={18} className="text-rose-400" />
                    <span className="font-semibold">{event.time}</span>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-6 relative z-10">
                  <p className="font-semibold text-gray-800 mb-2">{event.location}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{event.address}</p>
                </div>

                {/* Map Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openMap(event.mapUrl)}
                  className={`
                    relative z-10 w-full
                    bg-white border-2 border-rose-200
                    text-rose-600 font-semibold py-3 px-6 rounded-2xl
                    flex items-center justify-center gap-3
                    hover:bg-rose-50 hover:border-rose-300
                    hover:shadow-lg transition-all duration-300
                    group/btn
                  `}
                >
                  <MapPin size={18} />
                  <span>Xem bản đồ</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                  >
                    →
                  </motion.div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

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

      {/* Map Dialog */}
      <AnimatePresence>
        {showMap && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={() => setShowMap(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl aspect-video relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowMap(false)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-xl text-gray-600 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300 z-10"
              >
                <X size={24} />
              </button>
              
              <div className="rounded-3xl overflow-hidden h-full">
                <iframe
                  src={currentMapUrl}
                  width="100%"
                  height="100%"
                  className="rounded-3xl"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
