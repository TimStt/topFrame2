import { rqClient } from "@/shared/api/api-client";
import { IApiSchemas } from "@/shared/api/schema";
import { useInitialModal } from "@/shared/lib/zustands/use-initial-modal";
import { useModalToastStore } from "@/shared/ui/modal-toast-ui/modal-toast.store";
import { SchemaAddResponse } from "@/widgets/vacancy/modal-add-response";

export const useAddResponse = (idResponse: number) => {
  const { isOpenModal, handleCloseModal, handleOpenModal, toggle } =
    useInitialModal("addResponse");
  const { showModalToast } = useModalToastStore();

  const onSuccess = () => {
    handleCloseModal();
    showModalToast({
      isOpen: true,
      title: "Ваш отклик успешно отправлен!",
      delay: 3000,
    });
  };

  const mutationAddResponse = rqClient.useMutation(
    "post",
    "/api/vacancy/response",
    {
      onSuccess,
    }
  );

  const handleSubmit = (
    data: Omit<IApiSchemas["CreateResponseDto"], "vacancyId">
  ) => {
    mutationAddResponse.mutate({
      body: {
        ...data,
        vacancyId: idResponse,
      },
    });
  };

  return {
    isOpenModal,
    handleOpenModal,
    mutationAddResponse,
    handleSubmit,
    toggle,
    handleCloseModal,
  };
};
