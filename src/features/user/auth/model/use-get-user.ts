import { queryClient, rqClient } from "@/shared/api/api-client";

export const invalidateUser = () => {
  queryClient.invalidateQueries({
    queryKey: rqClient.queryOptions("get", "/api/account").queryKey,
  });
};

export const useGetUser = () => {
  const userQuery = rqClient.useQuery("get", "/api/account");

  const info = userQuery.data?.response;
  const isLoading = userQuery.isLoading;

  return {
    isLoading,
    info,
  };
};
