import React, { useEffect, useRef, useState } from "react";
import { ButtonUI, IButton } from "../button-ui";
import LoaderUI from "../loader-ui";

export const ButtonSubmitUI = ({
  isLoading,
  children,
  ...props
}: Omit<IButton<"button">, "loading"> & {
  isLoading?: boolean;
}) => {
  const ref = useRef<HTMLButtonElement>(null);

  const [minWidth, setMinWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (ref.current && !minWidth && children) {
      setMinWidth(ref.current.clientWidth);
    }
  }, [ref, isLoading, minWidth, children]);
  return (
    <ButtonUI
      type="submit"
      loading={isLoading}
      rootRef={ref}
      style={{ minWidth }}
      {...props}
    >
      {isLoading ? <LoaderUI width={"20px"} height={"20px"} /> : children}
    </ButtonUI>
  );
};
