import dynamic from "next/dynamic";
import { ButtonAuthSkeleton } from "./skeleton";

export const ButtonAuth = dynamic(() => import("./button-auth.ui"), {
  ssr: false,
  loading: () => <ButtonAuthSkeleton />,
});
