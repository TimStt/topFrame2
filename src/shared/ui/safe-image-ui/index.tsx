import cls from "classnames";
import React, { useEffect, useState } from "react";

interface ISafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  className?: string;
  showFallbackIcon?: boolean;
  fallbackIcon?: React.ReactNode;
  onError?: () => void;
  classNameFallback?: string;
}

const DefaultFallbackIcon: React.FC<{ className?: string }> = ({
  className,
}) => (
  <svg
    className={cls("image-fallback-icon", className)}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
  </svg>
);

export const SafeImageUI: React.FC<ISafeImageProps> = ({
  src,
  alt,
  className,
  showFallbackIcon = true,
  fallbackIcon,
  onError,
  classNameFallback,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    setHasError(true);

    onError?.();
  };

  // Показываем fallback если нет src или произошла ошибка
  if (!src || hasError) {
    if (!showFallbackIcon) {
      return null;
    }

    return (
      <div className={cls("image-fallback", classNameFallback)}>
        {fallbackIcon || <DefaultFallbackIcon />}
      </div>
    );
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={cls(className)}
      onError={handleError}
    />
  );
};
