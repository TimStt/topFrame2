import { TOKEN_NAME } from "@/shared/constants/other";
import { rqClient } from "@/shared/api/api-client";
import { IApiSchemas } from "@/shared/api/schema";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { setByCookie } from "@/shared/utils/get-cookie-client";
import { invalidateUser } from "./use-get-user";
import { useModalToastStore } from "@/shared/ui/modal-toast-ui/modal-toast.store";
import { useRouter } from "next/navigation";
import { PAGES_PATHS } from "@/shared/constants/pages-paths";

export const useLogin = (params?: {
  onError?: (error: string) => void;
  onSuccess?: (token: string) => void;
}) => {
  const { showModalToast } = useModalToastStore();

  const router = useRouter();

  const onSuccessLogin = (token: string) => {
    onToggleModal("auth", false);
    setByCookie(TOKEN_NAME, token, 365);
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
      params?.onSuccess?.(r.response.token);
    },
    onError: (error) => {
      console.log(error);

      params?.onError?.(
        error.errorMessage ||
          "Что-то пошло не так при входе в систему. Попробуйте позже"
      );
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
