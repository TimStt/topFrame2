import React, { ElementType, Fragment, HTMLAttributes } from "react";

import cls from "classnames";

export const WrapperUI = ({
  className,
  children,
  isVisible,
  rootRef,
  ...props
}: {
  className?: string;
  rootRef?: React.RefObject<HTMLDivElement>;
  children?: React.ReactNode;
  isVisible: boolean;
} & HTMLAttributes<HTMLDivElement>) => {
  return isVisible ? (
    <div className={className} ref={rootRef} {...props}>
      {children}
    </div>
  ) : (
    <Fragment> {children}</Fragment>
  );
};
