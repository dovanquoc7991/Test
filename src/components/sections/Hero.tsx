import WeddingCountdown from "../ui/Countdown";
import heroImage from "../../assets/images/background.jpg"; // Import ảnh nền

interface HeroProps {
  names: {
    groom: string;
    bride: string;
  };
}
// Thay thế '/images/hero-background.jpg' bằng đường dẫn ảnh của bạn
const Hero = ({ names }: HeroProps) => {
  return (
    <section
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center p-4"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-white/30 backdrop-blur-sm p-8 rounded-lg shadow-xl text-gray-800">
        <h2 className="text-2xl font-serif mb-4">Trân trọng báo hỷ</h2>

        <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
          <span className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold">
            {names.groom}
          </span>
          <span className="text-3xl sm:text-4xl md:text-6xl font-serif text-pink-600 font-bold">
            &
          </span>
          <span className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold">
            {names.bride}
          </span>
        </div>

        <p className="text-xl mb-8">13.12.2025</p>
        <WeddingCountdown />
      </div>
    </section>
  );
};

export default Hero;
