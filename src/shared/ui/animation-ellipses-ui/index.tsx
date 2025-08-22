/**
 * @file: Animation.tsx
 * @description: Компонент Animation
 * @created: 2025-07-29
 */
import React, { useEffect, useState } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Оптимизация: анимация только когда компонент видим
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Задержка анимации для улучшения производительности
          setTimeout(() => setShouldAnimate(true), 100);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(".animation-ellipses");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cls("animation-ellipses", className, {
        disable: noAnimation || !shouldAnimate,
        visible: isVisible,
      })}
      style={{
        // Оптимизация рендеринга
        contain: "layout style paint",
        willChange: shouldAnimate ? "transform, opacity" : "auto",
      }}
    >
      {Array.from({ length }).map((_, index) => (
        <EllipseBg1
          key={index}
          width="748"
          height="748"
          viewBox="0 0 748 748"
          style={{
            // Оптимизация анимации
            contain: "layout style paint",
            willChange: shouldAnimate ? "transform, opacity" : "auto",
          }}
        />
      ))}
    </div>
  );
};
