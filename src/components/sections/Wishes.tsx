import { useState, useEffect, type FormEvent } from "react";
import { MessageCircle, Heart, X, Send, Pencil, Sparkles, Flower2 } from "lucide-react";
import EmojiPicker, { type EmojiClickData } from "emoji-picker-react";
import { motion, AnimatePresence } from "framer-motion";
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
    try {
      const wishesCollection = collection(db, "wishes");
      const q = query(wishesCollection, orderBy("createdAt", "desc"));
      const wishesSnapshot = await getDocs(q);
      const wishesList = wishesSnapshot.docs.map(
        (doc) => ({ ...doc.data(), id: doc.id } as WishWithId)
      );
      setWishes(wishesList);
    } catch (error) {
      console.error("Error fetching wishes:", error);
    } finally {
      setIsLoading(false);
    }
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

    try {
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
      await fetchWishes();

      // Reset form
      setName("");
      setMessage("");
      setShowPicker(false);
      setShowWishForm(false);
      setEditingWish(null);
    } catch (error) {
      console.error("Error submitting wish:", error);
      alert("Có lỗi xảy ra khi gửi lời chúc. Vui lòng thử lại!");
    }
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage((prevMessage) => prevMessage + emojiData.emoji);
    setShowPicker(false);
  };

  return (
    <section id="wishes" className="py-20 px-4 bg-gradient-to-br from-rose-50/80 via-white to-amber-50/80 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
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
            <Heart size={24} fill="currentColor" />
          </motion.div>
        ))}
        
        {[...Array(6)].map((_, i) => (
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
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Flower2 size={20} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-rose-300" />
            <MessageCircle className="text-rose-500" size={32} />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-rose-300" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-4">
            Lời Chúc Yêu Thương
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Gửi những lời chúc tốt đẹp nhất đến cặp đôi trong ngày trọng đại
          </p>
        </motion.div>

        {/* Wish Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setEditingWish(null);
            setName("");
            setMessage("");
            setShowWishForm(true);
          }}
          className="
            bg-gradient-to-r from-pink-500 to-rose-600 
            hover:from-rose-600 hover:to-pink-600 
            text-white font-bold py-4 px-12 rounded-2xl 
            shadow-2xl shadow-rose-400/30 
            focus:outline-none transition-all duration-300 
            mb-16 flex items-center gap-3
            hover:shadow-3xl hover:shadow-rose-500/40
            relative overflow-hidden group
          "
        >
          <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Sparkles size={20} className="relative z-10" />
          <span className="relative z-10">💌 Gửi lời chúc của bạn</span>
        </motion.button>

        {/* Wish Form Modal */}
        <AnimatePresence>
          {showWishForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              onClick={() => {
                setShowWishForm(false);
                setShowPicker(false);
                setEditingWish(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-3xl shadow-2xl border border-rose-100 max-w-md w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 text-rose-200 text-2xl">
                  ❀
                </div>
                <div className="absolute -bottom-3 -right-3 text-amber-200 text-2xl">
                  ❁
                </div>

                <button
                  onClick={() => {
                    setShowWishForm(false);
                    setShowPicker(false);
                    setEditingWish(null);
                  }}
                  className="absolute top-4 right-4 bg-rose-50 text-rose-400 hover:text-rose-600 hover:bg-rose-100 p-2 rounded-full transition-all duration-300 z-10"
                >
                  <X size={20} />
                </button>

                <div className="p-8">
                  <motion.h3
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl text-center font-serif font-bold text-gray-800 mb-2"
                  >
                    {editingWish ? "Chỉnh sửa lời chúc" : "Gửi lời chúc"}
                  </motion.h3>
                  
                  <p className="text-rose-500 text-center mb-6 flex items-center justify-center gap-2">
                    <Heart size={16} className="fill-rose-500" />
                    {editingWish ? "Cập nhật lời chúc của bạn" : "Chia sẻ yêu thương đến cặp đôi"}
                    <Heart size={16} className="fill-rose-500" />
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-gray-700 font-semibold mb-3 text-left">
                        Tên của bạn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 bg-white"
                        placeholder="Nhập tên của bạn..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <label htmlFor="message" className="block text-gray-700 font-semibold mb-3 text-left">
                        Lời chúc *
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (showPicker) setShowPicker(false);
                        }}
                        className="w-full px-4 py-3 rounded-xl border-2 border-rose-100 focus:border-rose-300 focus:ring-2 focus:ring-rose-200 outline-none transition-all duration-300 bg-white resize-none"
                        placeholder="Viết lời chúc từ trái tim..."
                      />
                      
                      <button
                        type="button"
                        onClick={() => setShowPicker((val) => !val)}
                        className="absolute bottom-3 right-3 bg-rose-50 text-rose-400 p-2 rounded-lg hover:bg-rose-100 transition-colors"
                      >
                        <Sparkles size={18} />
                      </button>

                      <AnimatePresence>
                        {showPicker && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute bottom-16 right-0 z-20"
                          >
                            <EmojiPicker onEmojiClick={onEmojiClick} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                    >
                      <Send size={18} />
                      {editingWish ? "Cập nhật lời chúc" : "Gửi lời chúc"}
                      <Heart size={16} className="fill-white" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wishes Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-500"></div>
          </div>
        ) : wishes.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="bg-white/80 rounded-3xl p-8 max-w-md mx-auto border-2 border-dashed border-rose-200">
              <MessageCircle className="text-rose-300 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Chưa có lời chúc nào</h3>
              <p className="text-gray-600">Hãy là người đầu tiên gửi lời chúc đến cặp đôi!</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="
                  bg-white/80 backdrop-blur-sm rounded-2xl p-6
                  border-2 border-white shadow-xl shadow-black/5
                  hover:shadow-2xl hover:shadow-black/10 transition-all duration-500
                  relative overflow-hidden group cursor-pointer
                  flex flex-col h-full
                "
                onClick={() => {
                  setEditingWish(wish);
                  setName(wish.name);
                  setMessage(wish.message);
                  setShowWishForm(true);
                }}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Edit button */}
                <button className="absolute top-4 right-4 bg-white/80 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rose-50 hover:scale-110 z-10">
                  <Pencil size={14} className="text-rose-400" />
                </button>

                {/* Wish content */}
                <div className="relative z-10 flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-3 rounded-2xl flex-shrink-0">
                      <MessageCircle className="text-rose-500" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 text-lg truncate">
                        {wish.name}
                      </h4>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ delay: i * 0.2, repeat: Infinity, duration: 2 }}
                          >
                            <Heart size={12} className="text-rose-400 fill-rose-400" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed text-left">
                    {wish.message}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-2 right-2 text-rose-200/40 group-hover:text-rose-300/60 transition-colors">
                  ❤
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Decorative footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-6"
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-rose-300" />
          <Heart size={24} className="text-rose-400 fill-rose-400/30" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-rose-300" />
        </motion.div>
      </div>
    </section>
  );
};

export default Wishes;