/**
 * @file: DirectionDetails.tsx
 * @description: Компонент DirectionDetails
 * @created: 2025-08-07
 */
import React from "react";
import { HeadPage } from "../head-page";
import Image from "next/image";
import { ButtonUI } from "@/shared/ui/button-ui";
import { useGetDirection } from "@/entity/user/api/get-direction";
import { useParams } from "next/navigation";
import { SkeletonDirectionDetails } from "./skeleton";

export const DirectionDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { directionInfo, isLoading } = useGetDirection(slug);

  return (
    <>
      {" "}
      <HeadPage
        className="container"
        title="Административное направление"
        isLoading={isLoading}
      />
      {isLoading ? (
        <SkeletonDirectionDetails />
      ) : (
        <div className="admin-direction-page container">
          <div className="admin-direction-content">
            <div className="admin-direction-text">
              <p>
                Мы активно расширяем и укрепляем наш профессиональный коллектив,
                набирая сильных и талантливых специалистов, готовых вместе с
                нами достигать новых высот.
              </p>
              <p>
                Это направление — сердце эффективных бизнес-процессов, где
                каждый сотрудник играет важную роль в обеспечении стабильности и
                роста компании. Мы постоянно совершенствуем внутренние процессы,
                создаем комфортные условия для работы и развиваем команду
                экспертов, которые стремятся к постоянному развитию и
                профессиональному росту.
              </p>
              <p>
                Если вы хотите стать частью сильной, амбициозной команды,
                работать в инновационной среде и развивать свои навыки в области
                бизнес-процессов, — именно у нас у вас есть шанс реализовать
                свой потенциал. Присоединяйтесь к нам и помогите формировать
                будущее компании!
              </p>
            </div>
            <Image
              src="/images/admin-direction.png"
              alt="Административное направление"
              width={480}
              height={320}
              className="admin-direction-img"
            />
          </div>
          <ButtonUI
            variant="primary"
            hasArrow
            text="Присоединиться к команде"
          />
        </div>
      )}
    </>
  );
};
