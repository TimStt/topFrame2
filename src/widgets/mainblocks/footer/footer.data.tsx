export interface IFooterLink {
  id: number;
  title: string;
  href: string;
}

export interface IFooterSection {
  id: number;
  title?: string;
  links: IFooterLink[];
}

export interface IFooterContact {
  id: number;
  type: "phone" | "email" | "address";
  value: string;
  display: string;
}

export const footerNavigation: IFooterSection[] = [
  {
    id: 1,
    links: [
      { id: 1, title: "HR пространство TopFrame", href: "/" },
      { id: 2, title: "Наши направления", href: "/directions" },
      { id: 3, title: "Вакансии", href: "/vacancies" },
      { id: 4, title: "Наша команда", href: "/team" },
    ],
  },
];

export const footerContacts: IFooterContact[] = [
  {
    id: 1,
    type: "phone",
    value: "+79636843639",
    display: "+7 963 684 36 39",
  },
  {
    id: 2,
    type: "phone",
    value: "+79636843641",
    display: "+7 963 684 36 41",
  },
];

export const companyInfo = {
  name: "TOPFRAME",
  description:
    "Российская компания,<br/> помогающая строить полюс в <br/> новом многополярном мире",
  buttonText: "Работать с нами",
  additionalInfo: "Вся информация носит справочный характер",

  location: "Санкт-Петербург",
};
