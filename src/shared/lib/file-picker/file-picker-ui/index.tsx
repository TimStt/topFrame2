import IconPlus from "@/sources/plus.svg";

import cls from "classnames";
import React, { HTMLAttributes, useId } from "react";

import { usePickerFiles } from "@/shared/lib/file-picker/use-picker-files";

import LoaderUI from "@/shared/ui/loader-ui";
import { IUIPickerFiles } from "./types";

export const FilePickerUI = (props: IUIPickerFiles) => {
  const {
    typePicker,
    rootRef,
    className,
    setFiles,
    setURL,
    setURLS,
    allTypes,
    setFile,
    withIcon = false,
    classNameLabel,
    isLoading,
    children,
    multiple,
    ...otherProps
  } = props;

  const { handleUpload, accept } = usePickerFiles({
    ...props,
    multiple,
    setFile,
  });

  const id = useId();
  return (
    <label
      className={cls(className, "profile_img_add", {
        is_loading: isLoading,
      })}
      htmlFor={id}
    >
      {isLoading ? (
        <LoaderUI width="30px" height="30px" />
      ) : (
        <>
          {children}
          <input
            type="file"
            id={id}
            disabled={isLoading}
            accept={accept}
            onChange={handleUpload}
            multiple={multiple}
            hidden
          />
        </>
      )}
    </label>
  );
};
