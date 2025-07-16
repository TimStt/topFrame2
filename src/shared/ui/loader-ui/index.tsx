import cls from "classnames";
import React from "react";

const LoaderUI = ({
  color,
  width,
  height,
  className,
  borderWidth,
  text,
}: {
  borderWidth?: string;
  width?: string;
  height?: string;
  color?: string;
  className?: string;
  text?: string;
} & React.HTMLAttributes<HTMLSpanElement>) => {
  const styleProps = {
    "--colorLoader": color,
    "--width": width,
    "--height": height,
    "--borderWidth": borderWidth,
  } as React.CSSProperties;
  return <span className={cls("loader", className)} style={styleProps}></span>;
};

export default LoaderUI;
