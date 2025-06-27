import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Nets: React.FC = () => {
  const imageList1 = [
    { src: "https://images.unsplash.com/photo-1615874968123-6be9c9e7e9a7", alt: "מקלחון שקוף עם מסגרת שחורה" },
    { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f927", alt: "עבודת זכוכית לחלון חוץ" },
    { src: "https://images.unsplash.com/photo-1581093588401-1d97d0f206db", alt: "מקלחון יוקרתי מודרני" },
    { src: "https://images.unsplash.com/photo-1584951346603-1994e7ff4f36", alt: "זכוכית מחוסמת בחדר רחצה" },
    { src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6", alt: "פרופיל בלגי לחלון פנורמי" },
    { src: "https://images.unsplash.com/photo-1624996752380-84b1589c96ec", alt: "מקלחון עם זכוכית מט" },
    { src: "https://images.unsplash.com/photo-1621440310079-8e16f7c08c8e", alt: "דלת זכוכית חלבית חלקית" },
    { src: "", alt: "תמונה חסרה (fallback)" },
    { src: "https://images.unsplash.com/photo-1532298488760-970ff6decf61", alt: "עיצוב זכוכית לחדר עבודה" },
    { src: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2", alt: "מקלחון פינת זכוכית" },
    { src: "https://images.unsplash.com/photo-1620121692029-202108d110b8", alt: "תקרת זכוכית מודרנית" },
    { src: "https://images.unsplash.com/photo-1633957899545-5a850f0727a9", alt: "זכוכית בטיחותית לחלון" },
    { src: "https://images.unsplash.com/photo-1562259949-0b93528c311a", alt: "מסגרת מתכת שחורה לזכוכית" },
    { src: "https://images.unsplash.com/photo-1602524209780-b628b8f7d979", alt: "חלון זכוכית שקופה" },
    { src: "https://images.unsplash.com/photo-1618005198919-d3d4db1e4e4e", alt: "חדר רחצה עם זכוכית" },
  ];

  return <Gallery images={imageList1} />;
};

export default Nets;
