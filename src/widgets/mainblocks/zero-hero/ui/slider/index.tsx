import dynamic from "next/dynamic";
import { SkeletonSlider } from "./skeleton";

export const Slider = dynamic(() => import("./slider.ui"), {
  ssr: false,
  loading: () => <SkeletonSlider />,
});
