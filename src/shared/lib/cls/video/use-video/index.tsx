import LoaderUI, { ILoaderUI } from "@/shared/ui/loader-ui";
import { useRef, useState, useCallback } from "react";
import { cls } from "../..";

export const useVideo = () => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [isPaused, setIsPaused] = useState(false);

  const handlePlay = async () => {
    if (!ref.current) return;

    setHasError(false);

    try {
      // Проверяем готовность видео
      const video = ref.current;

      // Если видео не готово, загружаем его
      if (video.readyState < 2) {
        video.load();
        // Ждем готовности видео
        await new Promise<void>((resolve, reject) => {
          const onCanPlay = () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("error", onError);
            setIsPlaying(true);
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

  const handlePause = useCallback(() => {
    if (!ref.current) return;

    setIsPlaying(false);
    setIsLoading(false);

    ref.current.pause();
    ref.current.currentTime = 0;
  }, []);

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
    handlePlay,
    handlePause,
    setIsLoading,
    setHasError,
    Loader,
  };
};
