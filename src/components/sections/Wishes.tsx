import { useState, useEffect, type FormEvent } from "react";
import { MessageCircle, Smile, X, Send, Pencil } from "lucide-react";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  query,
  orderBy,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

// Định nghĩa kiểu dữ liệu cho một lời chúc
interface Wish {
  name: string;
  message: string;
}
interface WishWithId extends Wish {
  id: string;
  createdAt: Timestamp;
}

const Wishes = () => {
  const [wishes, setWishes] = useState<WishWithId[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const [showWishForm, setShowWishForm] = useState(false);
  const [editingWish, setEditingWish] = useState<WishWithId | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchWishes = async () => {
    setIsLoading(true);
    const wishesCollection = collection(db, "wishes");
    const q = query(wishesCollection, orderBy("createdAt", "desc"));
    const wishesSnapshot = await getDocs(q);
    const wishesList = wishesSnapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as WishWithId)
    );
    setWishes(wishesList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() === "" || message.trim() === "") {
      alert("Vui lòng nhập tên và lời chúc của bạn!");
      return;
    }

    if (editingWish) {
      // Chế độ chỉnh sửa
      const wishDoc = doc(db, "wishes", editingWish.id);
      await updateDoc(wishDoc, { name, message });
    } else {
      // Chế độ thêm mới
      await addDoc(collection(db, "wishes"), {
        name,
        message,
        createdAt: serverTimestamp(),
      });
    }
    fetchWishes();

    // Reset form
    setName("");
    setMessage("");
    setShowPicker(false);
    setShowWishForm(false);
    setEditingWish(null);
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
    setShowPicker(false); // Thêm dòng này để đóng picker sau khi chọn
  };

  return (
    <section className="py-20 px-4 bg-rose-50/80 relative overflow-hidden">
      {/* Hoa rơi nhẹ */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="animate-pulse text-pink-300 absolute top-10 left-10 text-2xl">
          ❀
        </div>
        <div className="animate-pulse text-pink-200 absolute bottom-10 right-10 text-3xl">
          ❁
        </div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl text-gray-800 mb-4">Gửi Lời Chúc</h2>
        <p className="text-gray-600 mb-8">
          Cảm ơn bạn đã đến chung vui. Hãy để lại vài dòng kỷ niệm nhé!
        </p>

        {/* Nút mở form */}
        <button
          onClick={() => {
            setEditingWish(null);
            setName("");
            setMessage("");
            setShowWishForm(true);
          }}
          className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-rose-500 hover:to-pink-500 
                     text-white font-semibold py-3 px-8 rounded-full shadow-lg 
                     focus:outline-none transition-all duration-300 transform hover:scale-105 hover:shadow-xl mb-12"
        >
          💌 Gửi lời chúc của bạn
        </button>

        {/* Popup gửi lời chúc */}
        {showWishForm && (
          <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white relative p-10 rounded-2xl shadow-2xl border border-pink-100 max-w-lg w-11/12">
              <div className="absolute -top-4 -left-4 text-pink-200 text-3xl">
                ❀
              </div>
              <div className="absolute -bottom-4 -right-4 text-pink-200 text-3xl">
                ❁
              </div>

              <button
                onClick={() => {
                  setShowWishForm(false);
                  setShowPicker(false);
                  setEditingWish(null);
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 transition-colors"
              >
                <X size={22} />
              </button>

              <h3 className="text-2xl text-center text-pink-500 mb-6">
                {editingWish ? "Chỉnh sửa lời chúc 💬" : "Gửi lời chúc yêu thương 💞"}
              </h3>

              <form onSubmit={handleSubmit} className="text-left">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Tên của bạn
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border border-pink-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div className="mb-6 relative">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Lời chúc
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (showPicker) setShowPicker(false);
                    }}
                    className="shadow appearance-none border border-pink-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="Gửi lời chúc yêu thương đến cặp đôi..."
                  />
                  <Smile
                    className="absolute bottom-3 right-3 text-gray-400 hover:text-pink-600 cursor-pointer"
                    onClick={() => setShowPicker((val) => !val)}
                  />
                  <EmojiPicker
                    open={showPicker}
                    onEmojiClick={onEmojiClick}
                    style={{
                      position: "absolute",
                      bottom: "50px",
                      right: "0",
                      zIndex: 20,
                    }}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-400 to-rose-500 hover:from-rose-500 hover:to-pink-500 
                               text-white font-bold py-3 px-6 rounded-full focus:outline-none 
                               focus:shadow-outline flex items-center gap-2 transition-all hover:scale-105"
                  >
                    <Send size={18} />
                    {editingWish ? "Lưu thay đổi" : "Gửi đi"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Danh sách lời chúc */}
        {isLoading && <p>Đang tải lời chúc...</p>}
        {!isLoading && wishes.length === 0 && (
          <p>Hãy là người đầu tiên gửi lời chúc!</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="animate-fadeIn bg-gradient-to-b from-white to-pink-50 border border-pink-100 
                         p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 
                         text-left flex flex-col h-full relative group hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-pink-100 p-3 rounded-full mr-3">
                  <MessageCircle className="text-pink-500" />
                </div>
                <p className="font-semibold text-gray-800 text-lg">
                  {wish.name}
                </p>
              </div>
              <p className="text-gray-700 italic">{wish.message}</p>
              <button
                onClick={() => {
                  setEditingWish(wish);
                  setName(wish.name);
                  setMessage(wish.message);
                  setShowWishForm(true);
                }}
                className="absolute top-2 right-2 bg-white/70 p-1.5 rounded-full 
                           opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
              >
                <Pencil size={14} className="text-gray-500" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Animation cho fadeIn */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Wishes;
