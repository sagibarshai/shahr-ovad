import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Aluminum: React.FC = () => {
  const imageList1 = [
    { src: "https://images.unsplash.com/photo-1600585154567-cb7490dd9f9e", alt: "מקלחון פינתי עם מסגרת אלומיניום" },
    { src: "https://images.unsplash.com/photo-1526717745935-87ea5fc04786", alt: "דלת קנטור זכוכית" },
    { src: "https://images.unsplash.com/photo-1582719478170-590c3f5c465b", alt: "מקלחון מודרני שחור" },
    { src: "https://images.unsplash.com/photo-1598300053694-cb1ab7e367d9", alt: "תריס אלומיניום חיצוני" },
    { src: "https://images.unsplash.com/photo-1615874959474-d2c27e62d633", alt: "טפט זכוכית בין חללים" },
    { src: "https://images.unsplash.com/photo-1624996752380-84b1589c96ec", alt: "חלון זכוכית רגיל" },
    { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6", alt: "פרופיל בלגי דק" },
    { src: "", alt: "תמונה חסרה עבור fallback" },
    { src: "https://images.unsplash.com/photo-1618005198919-d3d4db1e4e4e", alt: "חדר רחצה יווני זכוכית" },
    { src: "https://images.unsplash.com/photo-1603912957660-fb8d1efebd05", alt: "פתח לחיות עם זכוכית" },
    { src: "https://images.unsplash.com/photo-1631523216923-9f4f3eab8de1", alt: "מעקה זכוכית על מרפסת" },
    { src: "https://images.unsplash.com/photo-1581093588401-1d97d0f206db", alt: "מקלחון פינתי חכם" },
    { src: "https://images.unsplash.com/photo-1620121692029-202108d110b8", alt: "תקרה זכוכית שקופה" },
    { src: "https://images.unsplash.com/photo-1633957899545-5a850f0727a9", alt: "חלונות זכוכית כפולים" },
    { src: "https://images.unsplash.com/photo-1562259949-0b93528c311a", alt: "זכוכית מסך דקיק" },
  ];

  return <Gallery images={imageList1} />;
};

export default Aluminum;
