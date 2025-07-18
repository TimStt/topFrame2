import { createBase64ByFile } from "../create-base64-by-file";

export const oneHandlerFile = async (
  e: React.ChangeEvent<HTMLInputElement>,
  setFiles?: (arg: File) => void,
  setURLS?: (arg: string) => void
) => {
  const file = e.target.files?.[0];

  if (!file) return;
  setFiles?.(file);

  const src = await createBase64ByFile(file);
  setURLS?.(src);
};
