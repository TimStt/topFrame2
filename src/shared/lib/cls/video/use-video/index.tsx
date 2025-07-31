import { useCallback, useEffect, useRef, useState } from 'react'

import { managerActiveVideo, useManagerActiveVideo } from '@/shared/lib/video/manager-active-video'
import LoaderUI, { ILoaderUI } from '@/shared/ui/loader-ui'
import { useVideoStore } from '@/widgets/mainblocks/team/video-store'

import { cls } from '../..'

export const useVideo = ({ videoId }: { videoId: number }) => {
  const ref = useRef<HTMLVideoElement>(null)

  const [hasError, setHasError] = useState(false)

  const [isPaused, setIsPaused] = useState(false)

  const [isNotVolume, setIsNotVolume] = useState(true)
  const { activeVideoId, setActiveVideo, setIsLoading, isCurrentLoading } = useVideoStore()

  const isPlaying = activeVideoId === videoId

  const isLoading = isCurrentLoading && isPlaying

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = ref.current
    const container = containerRef.current
    const handleClick = () => {
      if (ref.current && ref.current.muted) {
        ref.current.muted = false
        ref.current.volume = 1
        setIsNotVolume(false)
      }
    }
    if (video && isNotVolume) {
      video.muted = true
    }

    container?.addEventListener('mouseout', handlePause)

    container?.addEventListener('mouseleave', handlePause)

    container?.addEventListener('mouseenter', handlePlay)

    /// отследить любой клик по документу
    document.addEventListener('click', handleClick)
    video?.addEventListener('click', handleClick)

    return () => {
      if (video) {
        managerActiveVideo.unregisterVideo(video)
      }
      container?.removeEventListener('mouseout', handlePause)

      container?.removeEventListener('mouseenter', handlePlay)

      container?.removeEventListener('mouseleave', handlePause)

      document.removeEventListener('click', handleClick)
      video?.removeEventListener('click', handleClick)
    }
  }, [isNotVolume])

  useManagerActiveVideo(ref.current)

  const handlePlay = async () => {
    if (!ref.current) return
    if (isLoading || isPlaying || !ref.current.paused) return
    managerActiveVideo.stopAllExcept(ref.current)
    setHasError(false)
    setIsLoading(true)
    setActiveVideo(videoId)
    try {
      // Проверяем готовность видео
      const video = ref.current

      video.load()

      // Если видео не готово, загружаем его
      if (video.readyState < 2) {
        // Ждем готовности видео
        await new Promise<void>((resolve, reject) => {
          const onCanPlay = () => {
            video.removeEventListener('canplay', onCanPlay)
            video.removeEventListener('error', onError)

            setActiveVideo(videoId)
            console.log('onCanPlay')
            resolve()
          }
          const onError = () => {
            video.removeEventListener('canplay', onCanPlay)
            video.removeEventListener('error', onError)
            reject(new Error('Ошибка загрузки видео'))
          }

          video.addEventListener('canplay', onCanPlay)
          video.addEventListener('error', onError)
        })
      }
      setActiveVideo(videoId)
      // Запускаем воспроизведение
      await video.play()
    } catch (error) {
      console.error('Ошибка воспроизведения видео:', error)
      setHasError(true)
      setActiveVideo(null)

      // Если ошибка связана с autoplay policy, показываем сообщение
      if (error instanceof Error && error.name === 'NotAllowedError') {
        console.warn('Автоматическое воспроизведение заблокировано браузером')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handlePause = () => {
    if (!ref.current) return
    console.log('handlePause')
    setActiveVideo(null)
    setIsLoading(false)
    if (!ref.current.paused) {
      ref.current.pause()
      ref.current.currentTime = 0
    }
  }

  const Loader = ({ className, ...props }: { className?: string } & ILoaderUI) => {
    // Показываем лоадер когда видео НЕ загружено и воспроизводится
    if (!isLoading) return undefined
    return <LoaderUI className={cls('position-center-loader', className)} {...props} />
  }

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
    Loader,
  }
}
