import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Glasses: React.FC = () => {
  const imageList1 = [
    { src: "https://images.unsplash.com/photo-1615874968123-6be9c9e7e9a7", alt: "מקלחון מסגרת שחורה" },
    { src: "https://images.unsplash.com/photo-1526717745935-87ea5fc04786", alt: "דלת זכוכית קפה" },
    { src: "https://images.unsplash.com/photo-1584951346603-1994e7ff4f36", alt: "זכוכית מחוסמת למקלחון" },
    { src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", alt: "מקלחון פינתי דומה" },
    { src: "https://images.unsplash.com/photo-1621440310079-8e16f7c08c8e", alt: "דלת זכוכית לציבור" },
    { src: "https://images.unsplash.com/photo-1602524209780-b628b8f7d979", alt: "חלון זכוכית מודרני" },
    { src: "https://images.unsplash.com/photo-1633957899545-5a850f0727a9", alt: "זכוכית כפולה מודרנית" },
    { src: "", alt: "placeholder fallback" },
    { src: "https://images.unsplash.com/photo-1598300053694-cb1ab7e367d9", alt: "תריס חשמלי מעוצב" },
    { src: "https://images.unsplash.com/photo-1618005198919-d3d4db1e4e4e", alt: "חדר רחצה שקוף" },
    { src: "https://images.unsplash.com/photo-1581093588401-1d97d0f206db", alt: "מקלחון יוקרתי" },
    { src: "https://images.unsplash.com/photo-1620121692029-202108d110b8", alt: "תקרה מזכוכית" },
    { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6", alt: "פרופיל בלגי עבודת יד" },
    { src: "https://images.unsplash.com/photo-1603912957660-fb8d1efebd05", alt: "פתח לבעלי חיים" },
    { src: "https://images.unsplash.com/photo-1562259949-0b93528c311a", alt: "מסך זכוכית דק" },
  ];

  return <Gallery images={imageList1} />;
};

export default Glasses;
