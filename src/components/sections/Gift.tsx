import { useState } from 'react';
import { Gift as GiftIcon, Copy, Check } from 'lucide-react';
import qrGroom from '../../assets/images/bankAccounts/bankAcount1.png';
import qrBride from '../../assets/images/bankAccounts/bankAcount1.png';

const AccountInfo = ({ name, number, bank, qrCode }: { name: string, number: string, bank: string, qrCode: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center flex flex-col items-center">
      <h3 className="text-2xl font-serif text-pink-500 mb-4">{name}</h3>
      <img src={qrCode} alt={`Mã QR ${name}`} className="mx-auto my-4 w-40 h-40 object-contain rounded-lg border p-1" />
      <div className="text-left text-gray-700 space-y-2">
        <p><span className="font-semibold">Chủ tài khoản:</span> {name}</p>
        <p><span className="font-semibold">Ngân hàng:</span> {bank}</p>
        <div className="flex items-center gap-2">
          <p><span className="font-semibold">Số tài khoản:</span> {number}</p>
          <button onClick={handleCopy} className="p-1 text-gray-500 hover:text-pink-500 transition-colors">
            {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

const Gift = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-rose-100 relative">
      <div className="container mx-auto text-center max-w-4xl relative">
        <div className="flex justify-center items-center gap-4 mb-6">
          <GiftIcon className="text-pink-500" size={32} />
          <h2 className="text-4xl font-serif text-gray-800">Mừng Cưới</h2>
        </div>
        <p className="mb-10 text-gray-600 max-w-2xl mx-auto">
          Sự hiện diện của bạn là món quà quý giá nhất. Nếu bạn có nguyện vọng gửi quà mừng,
          có thể gửi qua thông tin dưới đây.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AccountInfo
            name="Đỗ Văn Cường"
            number="9964391506"
            bank="Vietcombank"
            qrCode={qrGroom}
          />
          <AccountInfo
            name="Diễm My"
            number="9964391506"
            bank="Vietcombank"
            qrCode={qrBride}
          />
        </div>
      </div>
    </section>
  );
};

export default Gift;