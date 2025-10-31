import { useState } from "react";
import { MapPin, X } from "lucide-react";

const Events = () => {
  // Thay thế các URL bên dưới bằng link bạn đã lấy từ Google Maps brideCeremonyMapUrl
  const brideCeremonyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.583561800568!2d109.12295047555774!3d14.277491586171472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3168cb09206e1813%3A0x9bcbb128f3ee594d!2zTmjDoCBWxINuIEjDs2EgVGjDtG4gTeG7uSBQaMO6IE5hbQ!5e0!3m2!1svi!2s!4v1761929067263!5m2!1svi!2s";
  const groomCeremonyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124298.32919189973!2d109.13911436956008!3d13.205039877951199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f9547a2e62f4b%3A0x86927cbbf8f9045c!2zTmjDoCBow6BuZyBUaeG7h2MgY8aw4bubaSBIb8OgaSBEdXnDqm4gMg!5e0!3m2!1svi!2s!4v1761933697294!5m2!1svi!2s";
  const weddingPartyMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.8626008502533!2d106.69378030000001!3d10.8218252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528edfe9be909%3A0xf26d8955dfb14ac6!2zTmjDoCBow6BuZyBWxrDhu51uIENhdQ!5e0!3m2!1svi!2s!4v1761933764189!5m2!1svi!2s";

  const [showMap, setShowMap] = useState(false);
  const [currentMapUrl, setCurrentMapUrl] = useState('');

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-12">Thông Tin Hôn Lễ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Lễ Vu Quy (Nhà Gái) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-serif mb-4">Lễ Vu Quy (Nhà Gái)</h3>
              <p className="text-lg font-bold mb-2">08:00 - 10.12.2025</p>
              <div className="text-gray-600 mb-4 flex flex-col items-center">
                <span>Tại tư gia nhà gái</span>
                <span className="text-sm italic">Thôn Mỹ Phú Bác, Xã Bình Dương, Tỉnh Phú Yên</span>
              </div>
              <button
                onClick={() => {
                  setCurrentMapUrl(brideCeremonyMapUrl);
                  setShowMap(true);
                }}
                className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-pink-200 transition-colors text-sm"
              >
                <MapPin size={16} />
                Xem bản đồ
              </button>
            </div>
          </div>

          {/* Lễ Tân Hôn (Nhà Trai) */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-serif mb-4">Lễ Tân Hôn (Nhà Trai)</h3>
              <p className="text-lg font-bold mb-2">10:00 - 13.12.2025</p>
              <div className="text-gray-600 mb-4 flex flex-col items-center">
                <span>Tại tư gia nhà trai</span>
                <span className="text-sm italic">Thôn Mỹ Phú Nam, Xã Mỹ Lợi, Huyện Phù Mỹ, Tỉnh Bình Định</span>
              </div>
              <button
                onClick={() => {
                  setCurrentMapUrl(groomCeremonyMapUrl);
                  setShowMap(true);
                }}
                className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-pink-200 transition-colors text-sm"
              >
                <MapPin size={16} />
                Xem bản đồ
              </button>
            </div>
          </div>

          {/* Tiệc Cưới */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden md:col-span-2 lg:col-span-1">
            <div className="p-6 text-center">
              <h3 className="text-2xl font-serif mb-4">Tiệc Cưới</h3>
              <p className="text-lg font-bold mb-2">18:00 - 28.12.2025</p>
              <div className="text-gray-600 mb-4 flex flex-col items-center">
                <span>Trung tâm tiệc cưới Vườn Cau</span>
                <span className="text-sm italic">360 Đ. Phan Văn Trị, Phường 11, Bình Thạnh, Thành phố Hồ Chí Minh</span>
              </div>
              <button
                onClick={() => {
                  setCurrentMapUrl(weddingPartyMapUrl);
                  setShowMap(true);
                }}
                className="bg-pink-100 text-pink-600 px-4 py-2 rounded-full flex items-center justify-center gap-2 mx-auto hover:bg-pink-200 transition-colors text-sm"
              >
                <MapPin size={16} />
                Xem bản đồ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dialog hiển thị bản đồ */}
      {showMap && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl aspect-video relative">
            <button
              onClick={() => setShowMap(false)}
              className="absolute -top-3 -right-3 bg-white rounded-full p-1 shadow-lg text-gray-700 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>
            <iframe
              src={currentMapUrl}
              width="100%"
              height="100%"
              className="rounded-lg"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;