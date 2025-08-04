import { TOKEN_NAME } from "@/shared/api";
import { rqClient } from "@/shared/api/api-client";
import { IApiSchemas } from "@/shared/api/schema";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { setByCookie } from "@/shared/utils/get-cookie-client";
import { invalidateUser } from "./use-get-user";
import { useModalToastStore } from "@/shared/ui/modal-toast-ui/modal-toast.store";
import { useRouter } from "next/navigation";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";

export const useLogin = () => {
  const { showModalToast } = useModalToastStore();

  const router = useRouter();

  const onSuccessLogin = (token: string) => {
    onToggleModal("auth", false);
    setByCookie(TOKEN_NAME, token);
    invalidateUser();
    showModalToast({
      isOpen: true,
      title: "Вы успешно вошли в систему",
      delay: 3000,
      onClose: () => {
        router.push(PAGES_PATHS.PROFILE);
      },
    });
  };

  const loginMutation = rqClient.useMutation("post", "/api/auth/login", {
    onSuccess: (r) => {
      onSuccessLogin(r.response.token);
    },
  });

  const handleLogin = (data: IApiSchemas["AuthDto"]) => {
    loginMutation.mutate({
      body: data,
    });
  };

  return {
    loginMutation,
    handleLogin,
  };
};
