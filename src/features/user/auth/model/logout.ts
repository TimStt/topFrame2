import { TOKEN_NAME } from "@/shared/constants/other";
import { deleteCookie } from "@/shared/utils/get-cookie-client";
import { invalidateUser } from "./use-get-user";

export const logout = async () => {
  deleteCookie(TOKEN_NAME);
  await invalidateUser();
  window.location.reload();
};
