import { useEffect, useState } from "react";

class ManagerActiveVideo {
  private static instance: ManagerActiveVideo;
  private activeVideos: Set<HTMLVideoElement> = new Set();

  static getInstance(): ManagerActiveVideo {
    if (!ManagerActiveVideo.instance) {
      ManagerActiveVideo.instance = new ManagerActiveVideo();
    }
    return ManagerActiveVideo.instance;
  }

  // Регистрируем аудио элемент
  registerVideo(video: HTMLVideoElement): void {
    if (this.activeVideos.has(video)) {
      return;
    }

    this.activeVideos.add(video);
  }

  // Удаляем аудио элемент
  unregisterVideo(video: HTMLVideoElement): void {
    this.activeVideos.delete(video);
  }

  // Останавливаем все аудио кроме указанного
  stopAllExcept(exceptVideo?: HTMLVideoElement): void {
    this.activeVideos.forEach((video) => {
      if (video !== exceptVideo && !video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });

    // Дополнительно останавливаем все аудио на странице
    document.querySelectorAll("video").forEach((video) => {
      if (video !== exceptVideo && !video.paused) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }

  // Полная остановка всех аудио
  stopAll(): void {
    this.stopAllExcept();
  }

  // Получить количество активных видео
  getActiveCount(): number {
    return Array.from(this.activeVideos).filter((isActive) => isActive).length;
  }
}

export const managerActiveVideo = ManagerActiveVideo.getInstance();

export const useManagerActiveVideo = (video: HTMLVideoElement | null) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (video) {
      managerActiveVideo.registerVideo(video);
    }
  }, []);

  return { isActive, setIsActive };
};
