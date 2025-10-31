import { useState, type FormEvent } from 'react';
import { MessageCircle, Smile, X, Send, Pencil } from 'lucide-react';
import EmojiPicker, { type EmojiClickData } from 'emoji-picker-react';


// Định nghĩa kiểu dữ liệu cho một lời chúc
interface Wish {
  name: string;
  message: string;
}

// Một vài lời chúc mẫu để hiển thị ban đầu
const initialWishes: Wish[] = [
  { name: "Người bạn thân", message: "Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long nhé! Mãi yêu." },
  { name: "Đồng nghiệp", message: "Happy wedding! Chúc mừng hạnh phúc hai bạn. Sớm có tin vui nha!" },
  { name: "Cô Chú", message: "Chúc hai cháu có một cuộc sống hôn nhân thật hạnh phúc và viên mãn. Luôn yêu thương và nhường nhịn nhau nhé." },
  { name: "Anh Chị Em", message: "Vậy là đã có người rước em/anh đi rồi. Chúc hai đứa mãi hạnh phúc, sớm có cháu cho anh chị bế." },
  { name: "Bạn Đại Học", message: "Cung hỷ cung hỷ! Cuối cùng cũng chịu cưới rồi. Chúc mừng hạnh phúc nhé, bạn của tôi!" },
  { name: "Gia Đình", message: "Chúc mừng ngày trọng đại của hai con. Cả nhà luôn mong những điều tốt đẹp nhất sẽ đến với gia đình nhỏ của hai con." },
];

const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [showWishForm, setShowWishForm] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || message.trim() === '') {
      alert('Vui lòng nhập tên và lời chúc của bạn!');
      return;
    }

    if (editingIndex !== null) {
      // Chế độ chỉnh sửa
      const updatedWishes = [...wishes];
      updatedWishes[editingIndex] = { name, message };
      setWishes(updatedWishes);
    } else {
      // Chế độ thêm mới
      const newWish: Wish = { name, message };
      setWishes([newWish, ...wishes]); // Thêm lời chúc mới vào đầu danh sách
    }

    // Reset form
    setName('');
    setMessage('');
    setShowPicker(false);
    setShowWishForm(false); // Ẩn form sau khi gửi
    setEditingIndex(null); // Reset trạng thái chỉnh sửa
  };

  const onEmojiClick = (emojiData: EmojiClickData) => {
    setMessage(prevMessage => prevMessage + emojiData.emoji);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-serif text-gray-800 mb-6">Gửi Lời Chúc</h2>
        <p className="text-gray-600 mb-8">Cảm ơn bạn đã đến chung vui. Hãy để lại vài dòng kỷ niệm nhé!</p>
        <button
          onClick={() => {
            // Mở form ở chế độ thêm mới
            setEditingIndex(null);
            setName('');
            setMessage('');
            setShowWishForm(true);
          }}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 mb-12"
        >
          Gửi lời chúc của bạn
        </button>

        {/* Dialog gửi lời chúc */}
        {showWishForm && (
          <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-lg relative">
              <button
                onClick={() => {
                  setShowWishForm(false);
                  setShowPicker(false);
                  setEditingIndex(null); // Reset khi đóng dialog
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-pink-500 transition-colors">
                <X size={24} />
              </button>
              <h3 className="text-2xl font-serif mb-6 text-center text-pink-500">
                {editingIndex !== null ? 'Chỉnh Sửa Lời Chúc' : 'Lời Chúc Của Bạn'}
              </h3>
              <form onSubmit={handleSubmit} className="text-left">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Tên của bạn</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Nhập tên của bạn"
                  />
                </div>
                <div className="mb-6 relative">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Lời chúc</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (showPicker) setShowPicker(false);
                    }}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Gửi lời chúc yêu thương đến cặp đôi..."
                  />
                  <Smile
                    className="absolute bottom-3 right-3 text-gray-500 hover:text-gray-700 cursor-pointer"
                    onClick={() => setShowPicker(val => !val)}
                  />
                  <EmojiPicker
                    open={showPicker}
                    onEmojiClick={onEmojiClick}
                    style={{ position: 'absolute', bottom: '50px', right: '0', zIndex: 20 }}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline flex items-center gap-2">
                    <Send size={18} />
                    {editingIndex !== null ? 'Lưu thay đổi' : 'Gửi đi'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Danh sách lời chúc */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left flex flex-col h-full relative group">
              <div className="flex-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-full mr-4">
                    <MessageCircle className="text-pink-500" />
                  </div>
                  <p className="font-bold text-gray-800 text-lg">{wish.name}</p>
                </div>
                <p className="text-gray-600">{wish.message}</p>
              </div>
              <button
                onClick={() => {
                  setEditingIndex(index);
                  setName(wish.name);
                  setMessage(wish.message);
                  setShowWishForm(true);
                }}
                className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Pencil size={14} className="text-gray-600" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishes;