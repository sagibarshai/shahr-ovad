import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Showers: React.FC = () => {
  const imageList1 = [
    { src: "https://images.unsplash.com/photo-1600585154567-cb7490dd9f9e", alt: "מטבח עם זכוכית חלבית" },
    { src: "https://images.unsplash.com/photo-1624996752380-84b1589c96ec", alt: "חלון זכוכית לסלון" },
    { src: "https://images.unsplash.com/photo-1615874968123-6be9c9e7e9a7", alt: "דלת זכוכית שקופה" },
    { src: "https://images.unsplash.com/photo-1526717745935-87ea5fc04786", alt: "מקלחון מסגרת דקה" },
    { src: "https://images.unsplash.com/photo-1582719478170-590c3f5c465b", alt: "שחור מבריק" },
    { src: "https://images.unsplash.com/photo-1598300053694-cb1ab7e367d9", alt: "תריס חיצוני" },
    { src: "", alt: "fallback example" },
    { src: "https://images.unsplash.com/photo-1615874959474-d2c27e62d633", alt: "חדר זכוכית מודרני" },
    { src: "https://images.unsplash.com/photo-1584951346603-1994e7ff4f36", alt: "מקלחון יוקרתי פעמיים" },
    { src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", alt: "פינות זכוכית חלקות" },
    { src: "https://images.unsplash.com/photo-1602524209780-b628b8f7d979", alt: "חלון לבית מודרני" },
    { src: "https://images.unsplash.com/photo-1631523216923-9f4f3eab8de1", alt: "מקלחוני זכוכית מודרניים" },
    { src: "https://images.unsplash.com/photo-1618005198919-d3d4db1e4e4e", alt: "חדר רחצה זכוכי פתוח" },
    { src: "https://images.unsplash.com/photo-1620121692029-202108d110b8", alt: "חלון מזכוכית כפולה פתוח" },
    { src: "https://images.unsplash.com/photo-1562259949-0b93528c311a", alt: "מסך זכוכית מינימליסטי" },
  ];

  return <Gallery images={imageList1} />;
};

export default Showers;
