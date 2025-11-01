import { useRef, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Events from "./components/sections/Events";
import Gallery from "./components/sections/Gallery";
import Gift from "./components/sections/Gift";
import Hero from "./components/sections/Hero";
import Invitation from "./components/sections/Invitation";
import Story from "./components/sections/Story";
import Wishes from "./components/sections/Wishes";
import MusicPlayer from "./components/ui/MusicPlayer";
import FallingHearts from "./components/ui/FallingHearts";
import FireworksEffect from "./components/ui/Fireworks";
import FallingPetals from "./components/ui/FallingPetals";
import Overlay from "./components/ui/Overlay";
import music1 from "./assets/music/1.mp3";
import music2 from "./assets/music/2.mp3";
// import seamlessBg from "./assets/images/seamless-bg.png"; // Import ảnh nền

function App() {
  // Trong thực tế, bạn nên tạo một file config riêng để lưu các thông tin này
  const brideAndGroom = {
    groom: "Văn\u00A0Cường",
    bride: "Diễm\u00A0My",
  };

  const [showOverlay, setShowOverlay] = useState(true);
  const musicPlayerRef = useRef<{ togglePlay: () => void }>(null);

  const handleEnter = () => {
    setShowOverlay(false);
    musicPlayerRef.current?.togglePlay();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div
      className="font-sans text-gray-700"
      // style={{ backgroundImage: `url(${seamlessBg})` }}
    >
      <FallingHearts />
      <FallingPetals />
      <FireworksEffect />
      {showOverlay && <Overlay onEnter={handleEnter} />}
      <Header />
      <main>
        <Hero names={brideAndGroom} />
        <Invitation names={brideAndGroom} />
        <Story />
        <Events />
        <Gallery />
        <Wishes />
        <Gift />
      </main>
      <Footer />
      <MusicPlayer
        ref={musicPlayerRef}
        tracks={[music1, music2]}
      />
    </div>
  );
}

export default App;
