/**
 * @file: HrEcosystemArticle.tsx
 * @description: Компонент HrEcosystemArticle
 * @dependencies: HeadPage, useGetSpaceDetail, ButtonUI, next/image
 * @created: 2025-08-08
 */
"use client";

import React, { Fragment } from "react";
import { HeadPage } from "../head-page";
import { useGetSpaceDetail } from "@/entity/user/api/get-space-detail";
import { useParams } from "next/navigation";
import { ButtonUI } from "@/shared/ui/button-ui";
import Image from "next/image";
import { cls } from "@/shared/lib/cls";
import HrEcosystemArticleSkeleton from "./skeleton";
import { WrapperNotFoundUI } from "@/shared/ui/wrapper-not-found-ui";
import { URL_FILE_API } from "@/shared/constants/other";

export const HrEcosystemArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { spaceDetail, isLoading: isLoadingSpaceDetail } =
    useGetSpaceDetail(slug);

  return (
    <WrapperNotFoundUI isLoading={isLoadingSpaceDetail} data={spaceDetail}>
      <main>
        <HeadPage
          className="container"
          title={spaceDetail?.space?.name}
          isLoading={isLoadingSpaceDetail}
        />
        <div className="container freelance-page">
          {isLoadingSpaceDetail ? (
            <HrEcosystemArticleSkeleton />
          ) : (
            <div className="freelance-page__content">
              <div className="freelance-page__info">
                {spaceDetail?.blocks.map((block, index) => {
                  if (block.descriptionType === "text") {
                    return (
                      <Fragment
                        key={block.descriptionType + block.title + index}
                      >
                        <span
                          className={cls("freelance-page__facts", {
                            blue: block.titleIsBlue,
                          })}
                        >
                          {block.title}
                        </span>
                        <div
                          className="freelance-page__main-text"
                          dangerouslySetInnerHTML={{
                            __html: block.description,
                          }}
                        />
                      </Fragment>
                    );
                  }
                  if (block.descriptionType === "step") {
                    return (
                      <div className="freelance-page__how" key={index}>
                        <h2
                          className={cls("freelance-page__title", {
                            blue: block.titleIsBlue,
                          })}
                        >
                          {block.title}
                        </h2>
                        <ol className="freelance-page__how__list">
                          {block.description.map((item, index) => (
                            <li key={index}>
                              <span className="freelance-page__how__item-text">
                                {item.name}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>
                    );
                  }

                  if (block.descriptionType === "block") {
                    return (
                      <div className="freelance-page__benefits" key={index}>
                        <h2 className="freelance-page__title">{block.title}</h2>
                        <div className="freelance-page__benefits__list">
                          {block.description.map((item, index) => (
                            <div
                              className="freelance-page__benefits__item"
                              key={index}
                            >
                              <h3
                                className={cls(
                                  "freelance-page__benefits__item-title",
                                  {
                                    blue: true,
                                  }
                                )}
                              >
                                {item.title}
                              </h3>
                              <div
                                className={
                                  "freelance-page__benefits__item-desc"
                                }
                              >
                                {item.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                })}

                <ButtonUI
                  variant="primary"
                  hasArrow
                  text={spaceDetail?.space?.link?.label}
                  className="freelance-page__button"
                  as="a"
                  href={spaceDetail?.space?.link?.value}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              </div>

              <Image
                src={URL_FILE_API + spaceDetail?.space?.image}
                alt="Фриланс"
                width={480}
                height={320}
                className="freelance-page__img"
              />
            </div>
          )}
        </div>
      </main>
    </WrapperNotFoundUI>
  );
};
