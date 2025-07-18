import { createURLFile } from "../create-URL-file";

export const multiplyHandlerFiles = async (
  e: React.ChangeEvent<HTMLInputElement>,
  setFiles?: (arg: File[]) => void,
  setURLS?: (arg: string[]) => void
) => {
  const files = e.target.files;

  if (!files) return;
  const listFiles = Array.from(files);
  setFiles?.(listFiles);

  const listSrc = await Promise.all(
    listFiles.map((file) => createURLFile(file))
  );
  setURLS?.(listSrc);
};
