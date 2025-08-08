/**
 * @file: DocumentDetails.tsx
 * @description: Компонент DocumentDetails
 * @created: 2025-08-08
 */
"use client";
import React from "react";
import { HeadPage } from "../head-page";
import { useGetContactDetail } from "@/entity/user/api/get-contact-detail";
import { WrapperNotFoundUI } from "@/shared/ui/wrapper-not-found-ui";
import { useParams } from "next/navigation";
import DocumentDetailsSkeleton from "./skeleton";

export const DocumentDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { document, isLoading } = useGetContactDetail(slug);

  return (
    <WrapperNotFoundUI data={document} isLoading={isLoading}>
      <HeadPage
        className="container"
        title={document?.title}
        isLoading={isLoading}
      />
      {isLoading ? (
        <DocumentDetailsSkeleton />
      ) : (
        <div
          className="policy__content container"
          dangerouslySetInnerHTML={{ __html: document?.description || "" }}
        />
      )}
    </WrapperNotFoundUI>
  );
};
