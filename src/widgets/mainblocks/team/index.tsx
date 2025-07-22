"use client";

/**
 * @file: Team section
 * @description: Section with team members
 * @dependencies: React, Next.js Image
 * @created: 2024-01-15
 */
import HoverVideoPlayer from "react-hover-video-player";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { teamData, ITeamMember } from "./team.data";
import { PlayButtonUI } from "@/shared/lib/cls/video/controls-video-ui";
import { cls } from "@/shared/lib/cls";
import { useVideo } from "@/shared/lib/cls/video/use-video";
import LoaderUI from "@/shared/ui/loader-ui";

export const Team: React.FC = () => {
  return (
    <section className="team container">
      <div className="team__header">
        <h2 className="team__title title-section">Наша команда</h2>
        <p className="team__subtitle subtitle">
          Профессионалы с многолетним опытом
        </p>
      </div>

      <div className="team__list">
        {teamData.map((member) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: ITeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
    refVideo.current?.pause();
  };

  const refVideo = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   if (refVideo.current?.paused) return;
  //   window.addEventListener("click", (e) => {
  //     e.stopPropagation();
  //     e.preventDefault();
  //     refVideo.current?.pause();
  //     console.log("click", refVideo.current?.paused);
  //   });

  //   return () => {
  //     window.removeEventListener("click", (e) => {
  //       e.stopPropagation();
  //       e.preventDefault();
  //       refVideo.current?.pause();
  //       console.log("click", refVideo.current?.paused);
  //     });
  //   };
  // }, []);

  return (
    <div className="team__card">
      <HoverVideoPlayer
        videoClassName="team__card-video"
        className="team__card-video-player"
        hoverOverlayWrapperClassName="team__card-hover-overlay"
        loadingOverlayWrapperClassName="team__card-loading-overlay"
        // disableRemotePlayback={!isPlaying}

        videoSrc={member.video}
        onPlay={() => {
          setIsPlaying(true);
        }}
        onPause={() => setIsPlaying(false)}
        videoRef={refVideo}
        pausedOverlay={
          <div
            className="team__card__content"
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <div className="team__card__content-inner">
              <PlayButtonUI className="team__card-button" onClick={() => {}} />

              <h3 className="team__card-title">{member.name}</h3>
              <span className="team__card-position">{member.position}</span>
            </div>
          </div>
        }
        loadingOverlay={
          <LoaderUI
            className="team__card-loader"
            width="24px"
            color="#fff"
            height="24px"
            borderWidth="3px"
          />
        }
      />

      {/* Постер как отдельный элемент */}

      {/* <video
        className={cls("team__card-video", !isLoading && "video-loaded")}
        ref={ref}
        loop
        muted
        controls={isPlaying}
        playsInline
        preload="metadata"
        crossOrigin="anonymous"
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
      </video> */}

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

      {}
    </div>
  );
};
