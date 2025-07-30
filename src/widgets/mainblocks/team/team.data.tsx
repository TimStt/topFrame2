export interface ITeamMember {
  id: number;
  name: string;
  position: string;
  video: string;
  image: string;
  description?: string;
}

export const teamData: ITeamMember[] = [
  {
    id: 1,
    name: "Алена Милова",
    position: "Руководитель отдела",
    video: "/video/1.webm",
    description: "Эксперт в области управления персоналом",
    image: "/images/team-1.jpg",
  },
  {
    id: 2,
    name: "Никита Федоров",
    position: "HR-специалист",
    video: "/video/1.webm",
    image: "/images/team-2.jpg",
    description: "Специалист по подбору персонала",
  },
  {
    id: 3,
    name: "Сергей Николаев",
    position: "Бизнес-аналитик",
    video: "/video/1.webm",
    image: "/images/team-1.jpg",
    description: "Эксперт по анализу бизнес-процессов",
  },
  {
    id: 4,
    name: "Алексей Игнатов",
    position: "Консультант",
    video: "/video/1.webm",
    image: "/images/team-1.jpg",
    description: "Консультант по развитию персонала",
  },
  {
    id: 5,
    name: "Мария Авдеева",
    position: "HR-менеджер",
    video: "/video/1.webm",
    image: "/images/team-2.jpg",
    description: "Менеджер по работе с персоналом",
  },
  {
    id: 6,
    name: "Дмитрий Волков",
    position: "Специалист по обучению",
    video: "/video/1.webm",
    image: "/images/team-1.jpg",
    description: "Специалист по корпоративному обучению",
  },
  {
    id: 7,
    name: "Евгений Романов",
    position: "Аналитик",
    video: "/video/1.webm",
    image: "/images/team-2.jpg",
    description: "Аналитик HR-процессов",
  },
  {
    id: 8,
    name: "Андрей Соколов",
    position: "Консультант",
    video: "/video/1.webm",
    image: "/images/team-2.jpg",
    description: "Консультант по организационному развитию",
  },
  {
    id: 9,
    name: "Анна Кузнецова",
    position: "Психолог",
    video: "/video/1.webm",
    image: "/images/team-1.jpg",
    description: "Корпоративный психолог",
  },
  {
    id: 10,
    name: "Игорь Петров",
    position: "Директор",
    video: "/video/1.webm",
    image: "/images/team-2.jpg",
    description: "Исполнительный директор",
  },
];
