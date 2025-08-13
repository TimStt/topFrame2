import { ButtonUI } from "@/shared/ui/button-ui";
import { ChipUI } from "@/shared/ui/chip-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { HrTopFrameBlock } from "@/widgets/mainblocks/hr-top-frame-block";
import Image from "next/image";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "HR TopFrame",
  description: "HR TopFrame",
};

export default function Page() {
  return (
    <main>
      <HrTopFrameBlock />
    </main>
  );
}
