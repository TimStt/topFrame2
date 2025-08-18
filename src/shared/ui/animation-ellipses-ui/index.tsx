/**
 * @file: Animation.tsx
 * @description: Компонент Animation
 * @created: 2025-07-29
 */
import React from "react";
import { cls } from "@/shared/lib/cls";
import EllipseBg1 from "@/source/icons/ellipse-bg-1.svg";

export const AnimationEllipses = ({
  className,
  length = 3,
  noAnimation = false,
}: {
  className?: string;
  length?: number;
  noAnimation?: boolean;
}) => {
  return (
    <div
      className={cls("animation-ellipses", className, {
        disable: noAnimation,
      })}
    >
      {Array.from({ length }).map((_, index) => (
        <EllipseBg1
          key={index}
          width="748"
          height="748"
          viewBox="0 0 748 748"
        />
      ))}
    </div>
  );
};
