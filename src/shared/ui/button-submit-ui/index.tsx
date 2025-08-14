import React, { useEffect, useRef, useState } from "react";
import { ButtonUI, IButton } from "../button-ui";
import LoaderUI from "../loader-ui";

export const ButtonSubmitUI = ({
  isLoading,
  children,
  colorLoader,
  hasArrow,
  text,
  dirty,
  ...props
}: Omit<IButton<"button">, "loading"> & {
  isLoading?: boolean;
  colorLoader?: string;
  dirty?: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    console.log("minWidth", minWidth);
    if (ref.current && !minWidth) {
      setMinWidth(ref.current.clientWidth);
    }
  }, [ref, isLoading, minWidth]);
  return (
    <ButtonUI
      type="submit"
      rootRef={ref}
      disabled={dirty === false || isLoading}
      style={{ minWidth }}
      text={minWidth && isLoading ? "" : text}
      hasArrow={isLoading ? false : hasArrow}
      {...props}
    >
      {minWidth && isLoading ? (
        <LoaderUI
          className="position-center-loader"
          width={"20px"}
          height={"20px"}
          color={colorLoader}
        />
      ) : (
        <>{!isLoading && children}</>
      )}
    </ButtonUI>
  );
};
