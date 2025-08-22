import dynamic from "next/dynamic";
import { WorldIconUISkeleton } from "./skeleton";

export const WorldIconUI = dynamic(() => import("./world-icon-ui.ui"), {
  loading: () => <WorldIconUISkeleton />,
});
