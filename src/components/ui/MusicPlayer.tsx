import {
  useState,
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Music, Music2 } from "lucide-react";

interface MusicPlayerProps {
  tracks: string[];
}

const MusicPlayer = forwardRef(({ tracks }: MusicPlayerProps, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTrackEnd = () => {
      // Chuyển sang bài tiếp theo, quay lại bài đầu nếu hết danh sách
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    };

    audio.addEventListener("ended", handleTrackEnd);

    // Tự động phát bài mới khi currentTrackIndex thay đổi và nhạc đang bật
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false)); // Tắt nếu không tự động phát được
    }

    return () => {
      audio.removeEventListener("ended", handleTrackEnd);
    };
  }, [currentTrackIndex, isPlaying, tracks.length]);

  const togglePlay = () => {
    if (audioRef.current) {
      const newIsPlaying = !isPlaying;
      if (newIsPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(newIsPlaying);
    }
  };

  useImperativeHandle(ref, () => ({
    togglePlay,
  }));

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src={tracks[currentTrackIndex]} />
      <button onClick={togglePlay} className="bg-white/80 rounded-full p-3 shadow-lg">
        {isPlaying ? <Music className="animate-pulse" /> : <Music2 />}
      </button>
    </div>
  );
});

export default MusicPlayer;