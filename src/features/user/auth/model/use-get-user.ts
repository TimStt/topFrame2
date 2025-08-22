import { TOKEN_NAME } from "@/shared/constants/other";
import { queryClient, rqClient } from "@/shared/api/api-client";
import { URL_FILE_API } from "@/shared/constants/other";
import { getCookie } from "@/shared/utils/get-cookie-client";

export const invalidateUser = async () => {
  await queryClient.invalidateQueries({
    queryKey: rqClient.queryOptions("get", "/api/account").queryKey,
  });
};

export const useGetUser = () => {
  const userQuery = rqClient.useQuery(
    "get",
    "/api/account",
    {},
    {
      enabled: !!getCookie(TOKEN_NAME),
    }
  );

  const info = userQuery.data?.response;
  const isLoading = userQuery.isLoading;

  return {
    isLoading,
    info: {
      ...info,
      user: {
        ...info?.user,
        photo: info?.user?.photo ? URL_FILE_API + info?.user?.photo : null,
      },
    },
    isAuth: !!info?.user?.id,
  };
};
