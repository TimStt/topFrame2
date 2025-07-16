"use client";

/**
 * @file: Team section
 * @description: Section with team members
 * @dependencies: React, Next.js Image
 * @created: 2024-01-15
 */
import React, { useRef, useState } from "react";
import Image from "next/image";
import { teamData, ITeamMember } from "./team.data";
import { PlayButtonUI } from "@/shared/lib/cls/video/controls-video-ui";
import { cls } from "@/shared/lib/cls";
import { useVideo } from "@/shared/lib/cls/video/use-video";

export const Team: React.FC = () => {
  return (
    <section className="team container">
      <div className="team__header">
        <h2 className="team__title title-section">Наша команда</h2>
        <p className="team__subtitle">Профессионалы с многолетним опытом</p>
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
  const {
    ref,
    isPlaying,
    isLoaded,
    handlePlay,
    handlePause,
    setIsLoaded,
    Loader,
  } = useVideo();

  return (
    <div
      className={cls("team__card", isPlaying && "active")}
      onMouseLeave={handlePause}
      onMouseEnter={handlePlay}
    >
      <Loader />
      <video
        className="team__card-video"
        poster={member.image}
        ref={ref}
        muted
        loop
        src={member.video}
        onLoadedMetadata={() => setIsLoaded(false)}
        onLoadedData={() => setIsLoaded(true)}
      />
      {!isPlaying && (
        <div className="team__card-content">
          <PlayButtonUI
            className="team__card-button"
            isPlaying={isPlaying}
            onClick={handlePlay}
          />
          <h3 className="team__card-title">{member.name}</h3>
          <span className="team__card-position">{member.position}</span>
        </div>
      )}
    </div>
  );
};
