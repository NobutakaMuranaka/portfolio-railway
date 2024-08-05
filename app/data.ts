export type Work = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const data: Work[] = [
  {
    id: "1",
    title: "東海道線",
    description:
      "ここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入りますここに説明が入ります",
    imageSrc: "/IMG_6205.JPG",
  },
  {
    id: "2",
    title: "山口線",
    description: "ここに説明が入ります",
    imageSrc: "/IMG_4734_Original.jpg",
  },
];

export default data;
