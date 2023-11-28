export const ProjectsData = [
  {
    id: 1,
    title: "Citron Lemon",
    description: "Citron Bio",
    image: "https://saboratierra.net/wp-content/uploads/2020/11/citrons-bio.png",
    price: 15,
  },
  {
    id: 2,
    title: "Aubergines",
    description: "Aubergines BIO",
    image: "http://miam-images.m.i.pic.centerblog.net/f13ebd94.png",
    price: 10,
  },
  {
    id: 3,
    title: "Tomates",
    description: "Tomates BIO",
    image: "https://top-fruits.fr/templates/yootheme/cache/tomate-47f5d2b6.png",
    price: 8,
  },
  {
    id: 4,
    title: "Pommes de terre",
    description: "Tableau decoratif design massinart",
    image: "http://miam-images.m.i.pic.centerblog.net/724dde3b.png",
    price: 10,
  },
  {
    id: 4,
    title: "Pommes de terre",
    description: "Tableau decoratif design massinart",
    image: "http://miam-images.m.i.pic.centerblog.net/724dde3b.png",
    price: 15,
  },
  {
    id: 4,
    title: "Pommes de terre",
    description: "Tableau decoratif design massinart",
    image: "http://miam-images.m.i.pic.centerblog.net/724dde3b.png",
    price: 10,
  },
  {
    id: 4,
    title: "Pommes de terre",
    description: "Tableau decoratif design massinart",
    image: "http://miam-images.m.i.pic.centerblog.net/724dde3b.png",
    price: 10,
  },
];

// Répéter les 4 objets pour atteindre un total de 50 objets
const repeatedProjectsData = Array.from({ length: 12 }, (_, index) => ({
  ...ProjectsData[index % 4],
  id: index + 5, // Commencer à partir de 5 pour éviter les doublons avec les 4 premiers
}));

export const ExtendedProjectsData = [...ProjectsData, ...repeatedProjectsData];
