import { useCallback, useEffect, useRef, useState } from "react";

import {
  managerActiveVideo,
  useManagerActiveVideo,
} from "@/shared/lib/video/manager-active-video";
import LoaderUI, { ILoaderUI } from "@/shared/ui/loader-ui";
import { useVideoStore } from "@/widgets/mainblocks/team/video-store";

import { cls } from "../..";

export const useVideo = ({ videoId }: { videoId: number }) => {
  const ref = useRef<HTMLVideoElement>(null);

  const [hasError, setHasError] = useState(false);
  const [isCurrentTime, setIsCurrentTime] = useState(0);

  const [isPaused, setIsPaused] = useState(false);

  const [isNotVolume, setIsNotVolume] = useState(true);
  const { activeVideoId, setActiveVideo, setIsLoading, isCurrentLoading } =
    useVideoStore();

  const isPlaying = activeVideoId === videoId;

  const isLoading = isCurrentLoading && isPlaying;

  const containerRef = useRef<HTMLDivElement>(null);

  const [isCanPause, setIsCanPause] = useState(false);

  // Track play attempts to be able to cancel outdated ones on quick leave
  const playAttemptIdRef = useRef(0);
  const pendingPlayRef = useRef<Promise<void> | null>(null);

  // Stable unmute-on-click handler
  const handleClickToUnmute = useCallback(() => {
    if (ref.current && ref.current.muted) {
      ref.current.muted = false;
      ref.current.volume = 1;
      setIsNotVolume(false);
    }
  }, []);

  const handlePlay = useCallback(async () => {
    const video = ref.current;
    if (!video) return;

    // Start a new attempt and cancel any pending play
    playAttemptIdRef.current += 1;
    const attemptId = playAttemptIdRef.current;

    // If already playing for this video, no-op
    if (!video.paused) return;

    managerActiveVideo.stopAllExcept(video);
    setHasError(false);
    setIsLoading(true);
    setActiveVideo(videoId);

    try {
      // Wait until we can play (if not ready yet)
      if (video.readyState < 2) {
        await new Promise<void>((resolve, reject) => {
          const onCanPlay = () => {
            video.removeEventListener("canplay", onCanPlay);
            video.removeEventListener("error", onError);
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

      // If another attempt started while waiting, abort
      if (playAttemptIdRef.current !== attemptId) return;

      video.currentTime = isCurrentTime;

      const playPromise = video.play();
      pendingPlayRef.current = playPromise.then(() => {}).catch(() => {}); // Swallow interruption errors
      await pendingPlayRef.current;

      // If aborted during play, stop immediately
      if (playAttemptIdRef.current !== attemptId) {
        try {
          video.pause();
        } catch {}
        return;
      }

      setIsCanPause(true);
      setIsPaused(false);
    } catch (error) {
      // Mark error and reset active
      setHasError(true);
      setActiveVideo(null);
    } finally {
      // Only clear loading if this is the latest attempt
      if (playAttemptIdRef.current === attemptId) {
        setIsLoading(false);
      }
    }
  }, [videoId, isCurrentTime, setActiveVideo, setIsLoading]);

  const handlePause = useCallback(() => {
    const video = ref.current;
    if (!video) return;
    // Cancel current attempt and pause immediately
    playAttemptIdRef.current += 1;

    try {
      video.pause();
    } catch {}

    try {
      video.currentTime = 0;
    } catch {}

    setIsLoading(false);
    setIsCanPause(false);
    setIsPaused(true);

    if (activeVideoId === videoId) {
      setActiveVideo(null);
    }
  }, [activeVideoId, videoId, setActiveVideo, setIsLoading]);

  useEffect(() => {
    const video = ref.current;
    const container = containerRef.current;
    if (!container) return;

    const isHoverCapable =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: hover)").matches;

    const onPointerEnter = (e: PointerEvent) => {
      if (!isHoverCapable || e.pointerType !== "mouse") return;
      handlePlay();
    };

    const onPointerLeave = (e: PointerEvent) => {
      if (!isHoverCapable || e.pointerType !== "mouse") return;
      handlePause();
    };

    const onContainerClick = () => {
      if (isHoverCapable) return;
      handleClickToUnmute();
      if (!isPlaying) {
        handlePlay();
      }
    };

    const onDocumentPointerDown = (e: PointerEvent) => {
      if (!container.contains(e.target as Node)) {
        handlePause();
      }
    };

    container.addEventListener("pointerenter", onPointerEnter as any, {
      passive: true,
    });
    container.addEventListener("pointerleave", onPointerLeave as any, {
      passive: true,
    });
    container.addEventListener("click", onContainerClick, {
      passive: true,
    });
    document.addEventListener("pointerdown", onDocumentPointerDown, true);

    return () => {
      if (video) {
        managerActiveVideo.unregisterVideo(video);
      }
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
      container.removeEventListener("click", onContainerClick);
      document.removeEventListener("pointerdown", onDocumentPointerDown, true);
    };
  }, [handlePlay, handlePause, handleClickToUnmute, isPlaying]);

  useManagerActiveVideo(ref.current);

  return {
    ref,
    isPaused,
    setIsPaused,
    containerRef,
    isPlaying,
    isLoading,
    hasError,
    isNotVolume,
    handlePlay,
    handlePause,
    setIsLoading,
    setHasError,
    Loader: ({ className, ...props }: { className?: string } & ILoaderUI) => {
      if (!isLoading) return undefined;
      return (
        <LoaderUI
          className={cls("position-center-loader", className)}
          {...props}
        />
      );
    },
    isCurrentTime,
    setIsCurrentTime,
  };
};
