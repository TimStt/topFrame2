"use client";

/**
 * @file: Team section
 * @description: Section with team members
 * @dependencies: React, Next.js Image
 * @created: 2024-01-15
 */
"use client";
import React from "react";

import { cls } from "@/shared/lib/cls";
import { PlayButtonUI } from "@/shared/lib/cls/video/controls-video-ui";
import { useVideo } from "@/shared/lib/cls/video/use-video";
import LoaderUI from "@/shared/ui/loader-ui";
import Image from "next/image";
import HoverVideoPlayer from "react-hover-video-player";
import { useGetHome } from "@/entity/user/api/get-home";
import { SkeletonTeam } from "./skeleton";

import { ITeamMember, teamData } from "./team.data";
import { IApiSchemas } from "@/shared/api/schema";
import { URL_FILE_API } from "@/shared/constants/other";
import { useGetOurTeam } from "@/entity/user/api/get-our-team";
import { ButtonUI } from "@/shared/ui/button-ui";
import { ButtonSubmitUI } from "@/shared/ui/button-submit-ui";
import { IResponse } from "@/shared/api/types";

export const Team = () => {
  const { team, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useGetOurTeam();

  if (isLoading) {
    return <SkeletonTeam />;
  }

  return (
    <section className="team container" id="team">
      <div className="team__header">
        <h2 className="team__title title-section">Наша команда</h2>
        <p className="team__subtitle subtitle">
          Профессионалы с многолетним опытом
        </p>
      </div>

      <div className="team__list">
        {team?.map((member) => (
          <TeamMemberCard key={member?.id} member={member} />
        ))}
      </div>
      {hasNextPage && (
        <ButtonSubmitUI
          className="team__button-more"
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          type="button"
        >
          Показать еще
        </ButtonSubmitUI>
      )}
    </section>
  );
};

interface TeamMemberCardProps {
  member: IApiSchemas["TeamMemberDto"];
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
    isCurrentTime,
    setIsCurrentTime,
    containerRef,
    isNotVolume,
    Loader,
  } = useVideo({ videoId: member?.id });

  return (
    <div
      className={cls(
        "team__card",
        isPlaying && "active",
        isPlaying && "video-playing",
        isPaused && "video-paused"
      )}
      ref={containerRef}
    >
      {/* Постер как отдельный элемент */}
      <img
        className="team__card-poster"
        src={URL_FILE_API + member?.preview}
        alt={member?.title}
        loading="eager"
        width={280}
        height={200}
      />

      <video
        className={cls("team__card-video", !isLoading && "video-loaded")}
        ref={ref}
        onEnded={() => {
          handlePause();
        }}
        controls={isPlaying}
        playsInline
        onTimeUpdate={(e) => {
          setIsCurrentTime(e.currentTarget.currentTime);
        }}
        muted
        preload="metadata"
        crossOrigin="anonymous"
        onLoadStart={() => {
          setIsLoading(true);
          setHasError(false);
        }}
        onCanPlay={() => {
          setIsLoading(false);
          setIsPaused(false);
        }}
        onLoadedMetadata={() => {
          console.log("Видео метаданные загружены");
        }}
        onPlaying={() => {
          console.log("Видео начало воспроизведение");
          setIsPaused(false);
        }}
        onPause={() => {
          setIsPaused(true);
        }}
        src={URL_FILE_API + member?.video}
      />

      {!isPlaying && (
        <div className="team__card-content">
          <PlayButtonUI
            className="team__card-button"
            isPlaying={isPlaying}
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
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

          <h3 className="team__card-title">{member?.title}</h3>
          <span className="team__card-position">{member?.description}</span>
        </div>
      )}
    </div>
  );
};
