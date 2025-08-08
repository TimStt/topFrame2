import { ButtonUI } from "@/shared/ui/button-ui";
import { ChipUI } from "@/shared/ui/chip-ui";
import { HeadPage } from "@/widgets/mainblocks/head-page";
import { HrTopFrameBlock } from "@/widgets/mainblocks/hr-top-frame-block";
import Image from "next/image";

const tabs = [
  "TF COIN",
  "Корпоративная культура",
  "Блог Linkedin",
  "Клиенты",
  "Бот обратной связи",
  "Горячая линия",
  "Блог Дзен",
  "Welcome book",
  "Институт",
  "Битрикс",
];

export default function Page() {
  return (
    <main>
      <HrTopFrameBlock />
    </main>
  );
}
