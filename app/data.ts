export type Work = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const data: Work[] = [
  {
    id: "1",
    title: "Work 01",
    description:
      "ここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入ります",
    imageSrc: "/01.png",
  },
  {
    id: "2",
    title: "Work 02",
    description: "ここに説明が入ります",
    imageSrc: "/02.png",
  },
];

export default data;
