/**
 * @file: Video Store
 * @description: Zustand стор для управления активным видео
 * @created: 2025-01-28
 */
import { createSelectors } from '@/shared/lib/zustands/create-selectors'
import { create } from 'zustand'

interface VideoState {
  // ID текущего активного видео
  activeVideoId: number | null
  isCurrentLoading: boolean
  // Состояние воспроизведения
}

interface VideoActions {
  // Установить активное видео
  setActiveVideo: (videoId: number | null) => void
  setIsLoading: (isLoading: boolean) => void
}

type VideoStore = VideoState & VideoActions

const initialState: VideoState = {
  activeVideoId: null,
  isCurrentLoading: false,
}

export const useVideoStoreBase = create<VideoStore>((set, get) => ({
  ...initialState,

  setActiveVideo: (videoId) => {
    set({ activeVideoId: videoId })
  },
  setIsLoading: (isLoading) => {
    set({ isCurrentLoading: isLoading })
  },
}))

// Селекторы для удобства
export const useVideoStore = createSelectors(useVideoStoreBase)
