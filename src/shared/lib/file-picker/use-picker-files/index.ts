import {
  ALL_TYPES_IMAGE_UPLOAD,
  TYPE_DOCUMENT_UPLOAD,
  TYPE_IMAGE_UPLOAD,
} from "@/shared/constants/other";
import { TUseFilePicker } from "../file-picker-ui/types";
import { multiplyHandlerFiles } from "../multiply-handler-files";
import { oneHandlerFile } from "../one-handler-file";

export const usePickerFiles = ({
  setURLS,
  setFiles,
  setURL,
  setFile,
  typePicker,
  allTypes,
  multiple = false,
}: TUseFilePicker) => {
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      await multiplyHandlerFiles(e, setFiles, setURLS);
    } else {
      await oneHandlerFile(e, setFile, setURL);
    }
  };

  const accept = {
    image: allTypes ? ALL_TYPES_IMAGE_UPLOAD : TYPE_IMAGE_UPLOAD,
    document: TYPE_DOCUMENT_UPLOAD,
  }[typePicker];

  return {
    handleUpload,
    accept,
  };
};
