import LoaderUI from "@/shared/ui/loader-ui";
import { useRef, useState } from "react";

export const useVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlay = async () => {
    setIsPlaying(true);
    if (!ref.current) return;

    try {
      ref.current.load();
      await ref.current?.play();
    } catch (error) {
      setIsPlaying(false);
      console.error(error);
    }
  };

  const handlePause = () => {
    if (!ref.current) return;
    setIsPlaying(false);
    ref.current?.pause();
    ref.current.currentTime = 0;
  };

  const Loader = () => {
    if (!isLoaded) return null;
    return <LoaderUI className="video-loader" />;
  };

  return {
    ref,
    isPlaying,
    isLoaded,
    handlePlay,
    handlePause,
    setIsLoaded,
    Loader,
  };
};
