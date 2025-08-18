/**
 * @file: HrT.tsx
 * @description: Компонент HrT
 * @created: 2025-08-07
 */
"use client";

import React from "react";

import { useGetSpace } from "@/entity/user/api/get-space";
import { useGetSpaceDetail } from "@/entity/user/api/get-space-detail";
import { QUERY_KEYS } from "@/shared/constants/queries";
import { useQueryParamAction } from "@/shared/hooks/use-query-param-action";
import { cls } from "@/shared/lib/cls";
import { ButtonUI } from "@/shared/ui/button-ui";
import { ChipUI } from "@/shared/ui/chip-ui";
import Image from "next/image";

import { HeadPage } from "../head-page";
import { SkeletonHrTopFrameBlock } from "./skeleton";
import { SkeletonHrTopFrameTabs } from "./skeleton-tabs";
import { URL_FILE_API } from "@/shared/constants/other";

/**
 * @file: HrT.tsx
 * @description: Компонент HrT
 * @created: 2025-08-07
 */

export const HrTopFrameBlock: React.FC = () => {
  const { spaceList, isLoading: isLoadingTabs } = useGetSpace();

  const queryActions = useQueryParamAction();

  const currentTab =
    queryActions.get<string>(QUERY_KEYS.SPACE_TAB) || spaceList?.[0]?.slug;

  // const { spaceDetail, isLoading: isLoadingSpaceDetail } =
  //   useGetSpaceDetail(currentTab);

  const currentSpace = spaceList?.find((space) => space.slug === currentTab);

  const handleTabClick = (tab: string) => {
    queryActions.set(QUERY_KEYS.SPACE_TAB, tab, false, false);
  };

  return (
    <>
      <HeadPage
        className="container"
        title="HR пространство TopFrame"
        isLoading={isLoadingTabs}
      />

      <div className="container hr-topframe-page">
        <div className="hr-topframe-tabs">
          {isLoadingTabs ? (
            <SkeletonHrTopFrameTabs />
          ) : (
            spaceList?.map((tab, idx) => (
              <ChipUI
                key={tab?.slug}
                text={tab?.name}
                className={cls({
                  "chip-active": currentTab === tab.slug,
                })}
                onClick={() => handleTabClick(tab.slug)}
              />
            ))
          )}
        </div>
        {isLoadingTabs ? (
          <SkeletonHrTopFrameBlock />
        ) : (
          <div className="hr-topframe-content">
            <div className="hr-topframe-info">
              <h2 className="hr-h2">{currentSpace?.name}</h2>
              <div className="hr-main-text">
                <p
                  dangerouslySetInnerHTML={{ __html: currentSpace?.text || "" }}
                />
              </div>
            </div>

            <div className="hr-topframe-img-wrap">
              <Image
                src={URL_FILE_API + currentSpace?.image}
                alt="HR пространство TopFrame"
                width={480}
                height={320}
                className="hr-topframe-img"
              />
              <ButtonUI
                variant="primary"
                hasArrow
                text={currentSpace?.link?.label}
                as="a"
                href={currentSpace?.link?.value}
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
