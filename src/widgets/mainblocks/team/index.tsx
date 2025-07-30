'use client'

/**
 * @file: Team section
 * @description: Section with team members
 * @dependencies: React, Next.js Image
 * @created: 2024-01-15
 */
import React, { useEffect, useRef, useState } from 'react'

import { cls } from '@/shared/lib/cls'
import { PlayButtonUI } from '@/shared/lib/cls/video/controls-video-ui'
import { useVideo } from '@/shared/lib/cls/video/use-video'
import LoaderUI from '@/shared/ui/loader-ui'
import Image from 'next/image'
import HoverVideoPlayer from 'react-hover-video-player'

import { ITeamMember, teamData } from './team.data'

export const Team: React.FC = () => {
  return (
    <section className="team container" id="team">
      <div className="team__header">
        <h2 className="team__title title-section">Наша команда</h2>
        <p className="team__subtitle subtitle">Профессионалы с многолетним опытом</p>
      </div>

      <div className="team__list">
        {teamData.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  )
}

interface TeamMemberCardProps {
  member: ITeamMember
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const {
    ref,
    isPlaying,
    isLoading,
    hasError,
    handlePlay,
    handlePause,
    setIsLoading,
    setHasError,
    setIsPaused,
    isPaused,
    containerRef,
    isNotVolume,
    Loader,
  } = useVideo({ videoId: member.id })

  return (
    <div
      className={cls(
        'team__card',
        isPlaying && 'active',
        isPlaying && 'video-playing',
        isPaused && 'video-paused',
      )}
      ref={containerRef}
      onMouseEnter={() => {
        console.log('mouse enter')
        handlePlay()
      }}
      onMouseLeave={() => {
        console.log('mouse leave')
        handlePause()
      }}
      // onClick={
      //   isPlaying
      //     ? () => {
      //         console.log("pause");
      //         ref.current?.pause();
      //       }
      //     : () => {
      //         console.log("play");
      //         handlePlay();
      //       }
      // }
    >
      {/* Постер как отдельный элемент */}
      <div className="team__card-poster" style={{ backgroundImage: `url(${member.image})` }} />

      <video
        className={cls('team__card-video', !isLoading && 'video-loaded')}
        ref={ref}
        loop
        onEnded={() => {
          handlePause()
        }}
        controls={isPlaying}
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
        onMouseDown={() => {
          console.log('click')
        }}
        onLoadStart={() => {
          setIsLoading(true)
          setHasError(false)
        }}
        onCanPlay={() => {
          setIsLoading(false)
          setIsPaused(false)
        }}
        onError={(e) => {
          console.error('Ошибка загрузки видео:', e)
          setIsLoading(false)
          setHasError(true)
        }}
        onLoadedMetadata={() => {
          console.log('Видео метаданные загружены')
        }}
        onPlaying={() => {
          console.log('Видео начало воспроизведение')
          setIsPaused(false)
        }}
        onPause={() => {
          setIsPaused(true)
        }}
      >
        <source src={member.video} type="video/mp4" />
      </video>

      {/* <PlayButtonUI
        className="team__card-button"
        isPlaying={isPlaying}
        onClick={() => {
          if (isPaused) {
            handlePlay();
          } else {
            console.log("pause");
            ref.current?.pause();
          }
        }}
        isLoading={isLoading}
      /> */}

      {!isPlaying && (
        <div className="team__card-content">
          <PlayButtonUI
            className="team__card-button"
            isPlaying={isPlaying}
            onClick={(e) => {
              e.stopPropagation()
              handlePlay()
            }}
            isLoading={isLoading}
            loader={
              <Loader
                className="team__card-loader"
                width="24px"
                color="#fff"
                height="24px"
                borderWidth="3px"
              />
            }
          />

          <h3 className="team__card-title">{member.name}</h3>
          <span className="team__card-position">{member.position}</span>
        </div>
      )}

      {/* {isNotVolume && (
        <span className="team__card-volume">
          Для включения звука нажмите на видео
        </span>
      )} */}
    </div>
  )
}
