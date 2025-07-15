export interface ITeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description?: string;
}

export const teamData: ITeamMember[] = [
  {
    id: 1,
    name: "Алена Милова",
    position: "Руководитель отдела",
    image: "/images/team/alena-milova.jpg",
    description: "Эксперт в области управления персоналом",
  },
  {
    id: 2,
    name: "Никита Федоров",
    position: "HR-специалист",
    image: "/images/team/nikita-fedorov.jpg",
    description: "Специалист по подбору персонала",
  },
  {
    id: 3,
    name: "Сергей Николаев",
    position: "Бизнес-аналитик",
    image: "/images/team/sergey-nikolaev.jpg",
    description: "Эксперт по анализу бизнес-процессов",
  },
  {
    id: 4,
    name: "Алексей Игнатов",
    position: "Консультант",
    image: "/images/team/alexey-ignatov.jpg",
    description: "Консультант по развитию персонала",
  },
  {
    id: 5,
    name: "Мария Авдеева",
    position: "HR-менеджер",
    image: "/images/team/maria-avdeeva.jpg",
    description: "Менеджер по работе с персоналом",
  },
  {
    id: 6,
    name: "Дмитрий Волков",
    position: "Специалист по обучению",
    image: "/images/team/dmitry-volkov.jpg",
    description: "Специалист по корпоративному обучению",
  },
  {
    id: 7,
    name: "Евгений Романов",
    position: "Аналитик",
    image: "/images/team/evgeny-romanov.jpg",
    description: "Аналитик HR-процессов",
  },
  {
    id: 8,
    name: "Андрей Соколов",
    position: "Консультант",
    image: "/images/team/andrey-sokolov.jpg",
    description: "Консультант по организационному развитию",
  },
  {
    id: 9,
    name: "Анна Кузнецова",
    position: "Психолог",
    image: "/images/team/anna-kuznetsova.jpg",
    description: "Корпоративный психолог",
  },
  {
    id: 10,
    name: "Игорь Петров",
    position: "Директор",
    image: "/images/team/igor-petrov.jpg",
    description: "Исполнительный директор",
  },
];
