/**
 * @file: DirectionDetails.tsx
 * @description: Компонент DirectionDetails
 * @created: 2025-08-07
 */
"use client";

import React, { useRef, useState } from "react";
import { HeadPage } from "../head-page";
import Image from "next/image";
import { ButtonUI } from "@/shared/ui/button-ui";
import { useGetDirection } from "@/entity/user/api/get-direction";
import { useParams } from "next/navigation";
import { SkeletonDirectionDetails } from "./skeleton";
import { URL_FILE_API } from "@/shared/constants/other";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";
import { PlayButtonUI } from "@/shared/lib/cls/video/controls-video-ui";

export const DirectionDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { directionInfo, isLoading } = useGetDirection(slug);

  console.log("directionInfo", directionInfo);

  const refVideo = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = async () => {
    if (refVideo.current) {
      try {
        await refVideo.current.play();
      } catch (error) {}
    }
  };

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

            <div className="admin-direction-img-container">
              <Image
                src={URL_FILE_API + directionInfo?.image}
                alt=""
                width={480}
                height={320}
                className="admin-direction-img"
              />
              {!!directionInfo?.video && (
                <div className="admin-direction-video-container">
                  <video
                    src={URL_FILE_API + directionInfo?.video}
                    poster={
                      URL_FILE_API +
                      (directionInfo?.preview || directionInfo?.image)
                    }
                    ref={refVideo}
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  />
                  {!isPlaying && (
                    <PlayButtonUI
                      className="admin-direction-video-play-button"
                      onClick={handlePlayVideo}
                      isPlaying={isPlaying}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
          <ButtonUI
            variant="primary"
            hasArrow
            text="Присоединиться к команде"
            as="a"
            href={
              PAGES_PATHS.VACANCIES +
              `?${directionInfo?.filterSlug}=${directionInfo?.filterValue}`
            }
          />
        </div>
      )}
    </>
  );
};
