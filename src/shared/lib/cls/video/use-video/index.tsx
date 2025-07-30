import { useCallback, useEffect, useRef, useState } from "react";

import LoaderUI, { ILoaderUI } from "@/shared/ui/loader-ui";

import { cls } from "../..";
import {
  managerActiveVideo,
  useManagerActiveVideo,
} from "@/shared/lib/video/manager-active-video";

export const useVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const [isNotVolume, setIsNotVolume] = useState(true);

  useEffect(() => {
    const handleClick = () => {
      if (ref.current && ref.current.muted) {
        ref.current.muted = false;
        ref.current.volume = 1;
        setIsNotVolume(false);
      }
    };
    if (ref.current && isNotVolume) {
      ref.current.muted = true;
    }
    /// отследить любой клик по документу
    document.addEventListener("click", handleClick);
    ref.current?.addEventListener("click", handleClick);
    ref.current?.addEventListener("pointerup", (e) => {
      console.log("pointerup");
    });

    return () => {
      if (ref.current) {
        managerActiveVideo.unregisterVideo(ref.current);
      }
      ref.current?.removeEventListener("pointerup", (e) => {
        console.log("pointerup");
      });
      document.removeEventListener("click", handleClick);
      ref.current?.removeEventListener("click", handleClick);
    };
  }, []);

  useManagerActiveVideo(ref.current);

  const handlePlay = async () => {
    if (!ref.current) return;

    managerActiveVideo.stopAllExcept(ref.current);
    setHasError(false);

    try {
      // Проверяем готовность видео
      const video = ref.current;

      video.load();

      // Если видео не готово, загружаем его
      if (video.readyState < 2) {
        // Ждем готовности видео
        await new Promise<void>((resolve, reject) => {
          const onCanPlay = () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("error", onError);
            setIsPlaying(true);
            console.log("onCanPlay");
            resolve();
          };
          const onError = () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("error", onError);
            reject(new Error("Ошибка загрузки видео"));
          };

          video.addEventListener("canplay", onCanPlay);
          video.addEventListener("error", onError);
        });
      }
      setIsPlaying(true);
      // Запускаем воспроизведение
      await video.play();
    } catch (error) {
      console.error("Ошибка воспроизведения видео:", error);
      setIsPlaying(false);
      setHasError(true);

      // Если ошибка связана с autoplay policy, показываем сообщение
      if (error instanceof Error && error.name === "NotAllowedError") {
        console.warn("Автоматическое воспроизведение заблокировано браузером");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handlePause = () => {
    if (!ref.current) return;
    console.log("handlePause");
    setIsPlaying(false);
    setIsLoading(false);

    ref.current.pause();
    ref.current.currentTime = 0;
  };

  const Loader = ({
    className,
    ...props
  }: { className?: string } & ILoaderUI) => {
    // Показываем лоадер когда видео НЕ загружено и воспроизводится
    if (!isLoading) return undefined;
    return (
      <LoaderUI
        className={cls("position-center-loader", className)}
        {...props}
      />
    );
  };

  return {
    ref,
    isPaused,
    setIsPaused,
    isPlaying,
    isLoading,
    hasError,
    isNotVolume,
    handlePlay,
    handlePause,
    setIsLoading,
    setHasError,
    Loader,
  };
};
