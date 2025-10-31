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
        <h1 className="text-5xl md:text-7xl font-serif mb-2 font-bold">
          {names.bride} &amp; {names.groom}
        </h1>
        <p className="text-xl mb-8">13.12.2025</p>
        <WeddingCountdown />
      </div>
    </section>
  );
};

export default Hero;
