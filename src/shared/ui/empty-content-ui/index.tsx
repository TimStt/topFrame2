"use client";

import ReloadIcon from "@/source/icons/reload.svg";
import { useRouter } from "next/navigation";

import cls from "classnames";
import React from "react";

const EmptyContent = ({
  text,
  className,
  renderLoader,
  hasReloadButton,
}: {
  text?: string;
  className?: string;
  renderLoader?: React.ReactNode;
  hasReloadButton?: boolean;
}) => {
  const router = useRouter();
  return (
    <div className={cls(className, "empty-text-container")}>
      {!renderLoader && (
        <span className={cls("empty-text grid_container")}>{text}</span>
      )}
      {renderLoader}
      {hasReloadButton && (
        <button
          className="samples_load_more site_btn"
          onClick={() => router.refresh()}
        >
          <span>Попробовать снова</span>
          <ReloadIcon />
        </button>
      )}
    </div>
  );
};

export default EmptyContent;
