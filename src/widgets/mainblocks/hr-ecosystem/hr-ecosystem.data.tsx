import StarIcon from "@/source/icons/star.svg";
import ChatIcon from "@/source/icons/chat.svg";
import BriefcaseIcon from "@/source/icons/briefcase.svg";
import GlobeIcon from "@/source/icons/globe.svg";
import BookIcon from "@/source/icons/book.svg";
import SettingsIcon from "@/source/icons/settings.svg";
import BrainIcon from "@/source/icons/brain.svg";
import HeadphonesIcon from "@/source/icons/headphones.svg";

export interface IHRElement {
  id: number;
  title: string;
  icon?: React.ReactNode;
  position:
    | "top"
    | "top-right"
    | "right"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "left"
    | "top-left"
    | "center-left"
    | "center-right"
    | "special";
  highlighted?: boolean;
}

export const hrEcosystemData: IHRElement[] = [
  {
    id: 1,
    title: "Горячая линия",
    position: "top",
    icon: <HeadphonesIcon />,
  },
  {
    id: 2,
    title: "Блог Джен",
    position: "top-right",
    icon: <BrainIcon />,
  },
  {
    id: 3,
    title: "Клиенты",
    position: "left",
    icon: <StarIcon />,
  },
  {
    id: 4,
    title: "Бот обратной связи",
    position: "center-left",
    icon: <ChatIcon />,
  },
  {
    id: 5,
    title: "Институт",
    position: "center-right",
    icon: <BookIcon />,
  },
  {
    id: 6,
    title: "Бот LinkedIn",
    position: "bottom-left",
    icon: <GlobeIcon />,
  },
  {
    id: 7,
    title: "Корпоративная культура",
    position: "bottom",
    icon: <SettingsIcon />,
  },
  {
    id: 8,
    title: "Битрикс",
    position: "bottom-right",
    icon: <BriefcaseIcon />,
  },
  {
    id: 9,
    title: "Welcome book",
    position: "right",
    icon: <BookIcon />,
  },
  {
    id: 10,
    title: "Фриланс",
    position: "bottom-right",
    icon: <BriefcaseIcon />,
  },
  {
    id: 11,
    title: "TT COIN",
    position: "special",
    highlighted: true,
  },
];

export const centralElement = {
  title: "HR пространство TopFrame",
  subtitle: "Центр управления человеческими ресурсами",
};
