import { rqClient } from "@/shared/api/api-client";
import { IApiSchemas } from "@/shared/api/schema";
import { components } from "@/shared/api/schema/components";
import { onToggleModal } from "@/shared/lib/zustands/use-store-modals";
import { useModalToastStore } from "@/shared/ui/modal-toast-ui/modal-toast.store";

export const useRegister = (params?: { onError?: (error: string) => void }) => {
  const { showModalToast } = useModalToastStore();

  const onSuccessRegister = () => {
    showModalToast({
      isOpen: true,
      title:
        "Спасибо! Скоро с вами свяжется наш менеджер для подтверждения регистрации",

      delay: 5000,
    });

    onToggleModal("auth", false);
  };

  const registerMutation = rqClient.useMutation("post", "/api/auth/register", {
    onSuccess: onSuccessRegister,
    onError: (error) => {
      params?.onError?.(
        error.errorMessage ||
          "Что-то пошло не так при регистрации. Попробуйте позже"
      );
    },
  });

  const handleRegister = (data: IApiSchemas["AuthRegisterDto"]) => {
    if (!data.comment?.length) {
      delete data.comment;
    }
    registerMutation.mutate({
      body: data,
    });
  };

  return {
    registerMutation,
    handleRegister,
  };
};
