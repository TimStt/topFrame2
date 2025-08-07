import { rqClient } from "@/shared/api/api-client";
import { useMutation } from "@tanstack/react-query";
import { invalidateUser } from "./use-get-user";

export const useChangeAvatar = () => {
  const mutationChangeAvatar = rqClient.useMutation(
    "patch",
    "/api/account/update",
    {
      onSuccess: () => {
        invalidateUser();
      },
    }
  );

  const handleChangeAvatar = (avatar: File) => {
    console.log("handleChangeAvatar");
    const formData = new FormData();
    formData.append("photo", avatar);
    mutationChangeAvatar.mutate({
      body: formData,
    });
  };

  return { mutationChangeAvatar, handleChangeAvatar };
};
