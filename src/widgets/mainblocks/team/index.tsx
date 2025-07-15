"use client";

/**
 * @file: Team section
 * @description: Section with team members
 * @dependencies: React, Next.js Image
 * @created: 2024-01-15
 */
import React from "react";
import Image from "next/image";
import { teamData, ITeamMember } from "./team.data";

export const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-section__container">
        <div className="team-section__header">
          <div className="team-section__badge">1440 × 825</div>
          <h2 className="team-section__title">Наша команда</h2>
          <p className="team-section__subtitle">
            Профессионалы с многолетним опытом
          </p>
        </div>

        <div className="team-section__grid">
          {teamData.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamMemberCardProps {
  member: ITeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="team-member-card">
      <div className="team-member-card__image-wrapper">
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="team-member-card__image"
        />
        <div className="team-member-card__overlay">
          <h4 className="team-member-card__name">{member.name}</h4>
          <p className="team-member-card__position">{member.position}</p>
        </div>
      </div>
      {member.description && (
        <p className="team-member-card__description">{member.description}</p>
      )}
    </div>
  );
};

export default TeamSection;
