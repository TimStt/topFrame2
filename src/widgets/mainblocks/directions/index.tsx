"use client";

/**
 * @file: Directions section
 * @description: Section with HR directions and services
 * @dependencies: React
 * @created: 2024-01-15
 */
import React from "react";
import { directionsData, IDirection } from "./directions.data";

export const DirectionsSection: React.FC = () => {
  return (
    <section className="directions-section">
      <div className="directions-section__container">
        <div className="directions-section__header">
          <h2 className="directions-section__title">Наши направления</h2>
          <p className="directions-section__subtitle">
            Широкий спектр профессиональных услуг для эффективного бизнеса
          </p>
        </div>

        <div className="directions-section__grid">
          {directionsData.map((direction) => (
            <DirectionCard key={direction.id} direction={direction} />
          ))}
        </div>

        <div className="directions-section__center">
          <div className="directions-section__logo">
            <h3 className="directions-section__logo-title">
              HR пространство TopFrame
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DirectionCardProps {
  direction: IDirection;
}

const DirectionCard: React.FC<DirectionCardProps> = ({ direction }) => {
  return (
    <div className="direction-card">
      <div className="direction-card__icon">{direction.icon}</div>
      <h4 className="direction-card__title">{direction.title}</h4>
      <p className="direction-card__description">{direction.description}</p>
    </div>
  );
};

export default DirectionsSection;
