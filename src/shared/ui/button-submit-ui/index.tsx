import React, { useEffect, useRef, useState } from "react";
import { ButtonUI, IButton } from "../button-ui";
import LoaderUI from "../loader-ui";

export const ButtonSubmitUI = ({
  isLoading,
  children,
  colorLoader,
  text,
  ...props
}: Omit<IButton<"button">, "loading"> & {
  isLoading?: boolean;
  colorLoader?: string;
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
      loading={isLoading}
      rootRef={ref}
      style={{ minWidth }}
      text={minWidth && isLoading ? "" : text}
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
        children
      )}
    </ButtonUI>
  );
};
