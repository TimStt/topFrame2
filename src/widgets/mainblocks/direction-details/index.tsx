/**
 * @file: DirectionDetails.tsx
 * @description: Компонент DirectionDetails
 * @created: 2025-08-07
 */
"use client";

import React from "react";
import { HeadPage } from "../head-page";
import Image from "next/image";
import { ButtonUI } from "@/shared/ui/button-ui";
import { useGetDirection } from "@/entity/user/api/get-direction";
import { useParams } from "next/navigation";
import { SkeletonDirectionDetails } from "./skeleton";
import { URL_FILE_API } from "@/shared/constants/other";

export const DirectionDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { directionInfo, isLoading } = useGetDirection(slug);

  console.log("directionInfo", directionInfo);

  return (
    <>
      {" "}
      <HeadPage
        className="container"
        title={directionInfo?.title}
        isLoading={isLoading}
      />
      {isLoading ? (
        <SkeletonDirectionDetails />
      ) : (
        <div className="admin-direction-page container">
          <div className="admin-direction-content">
            <div
              className="admin-direction-text"
              dangerouslySetInnerHTML={{ __html: directionInfo?.text || "" }}
            />

            <Image
              src={URL_FILE_API + directionInfo?.image}
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
