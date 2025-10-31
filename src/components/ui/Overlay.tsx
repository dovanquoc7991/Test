import { Heart } from "lucide-react";
import heroImage from "../../assets/images/5.jpg";

interface OverlayProps {
  onEnter: () => void;
}

const Overlay = ({ onEnter }: OverlayProps) => {
  return (
    <div
      className="fixed inset-0 bg-cover bg-center z-[100] flex flex-col justify-center items-center text-center cursor-pointer"
      onClick={onEnter}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      <div className="relative text-white animate-fade-in-up">
        <p className="font-serif text-2xl mb-2">Trân trọng mời bạn đến dự</p>
        <h1 className="text-5xl font-serif font-bold mb-4">Lễ Cưới</h1>
        <h2 className="text-4xl font-serif mb-8">Văn Cường & Diễm My</h2>
        <p className="text-lg mb-4">Bấm vào để mở thiệp cưới</p>
        <Heart className="text-red-500 animate-pulse mx-auto" size={48} />
      </div>
    </div>
  );
};

export default Overlay;