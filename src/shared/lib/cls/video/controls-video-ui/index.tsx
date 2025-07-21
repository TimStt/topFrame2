import React from 'react'

import { cls } from '@/shared/lib/cls'
import PlayIcon from '@/source/icons/play.svg'

const PauseIcon = () => {
  return (
    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 10L0.624999 19.7428L0.625 0.257214L17.5 10Z" fill="#FDFDFD" />
    </svg>
  )
}

export const PlayButtonUI = ({
  className,
  isPlaying,
  onClick,
  loader,
  isLoading,
}: {
  className?: string
  isPlaying?: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  loader?: React.ReactNode
  isLoading?: boolean
}) => {
  return (
    <button
      className={cls('controls-play-button', className)}
      type="button"
      onClick={onClick}
      title={isPlaying ? 'Остановить видео' : 'Воспроизвести видео'}
    >
      {isLoading ? loader : isPlaying ? <PauseIcon /> : <PlayIcon />}
    </button>
  )
}
