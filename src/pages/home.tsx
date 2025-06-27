import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Home: React.FC = () => {
  const imageList1 = [
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", alt: "מקלחון מודרני זכוכית" },
    { src: "https://images.unsplash.com/photo-1582719478170-590c3f5c465b", alt: "דלת זכוכית שקופה" },
    { src: "", alt: "תמונה ריקה (fallback)" },
    { src: "https://images.unsplash.com/photo-1598300053694-cb1ab7e367d9", alt: "תריס חשמלי לבית" },
    { src: "https://images.unsplash.com/photo-1631523216923-9f4f3eab8de1", alt: "מקלחון פינתי שחור" },
    { src: "https://images.unsplash.com/photo-1603912957660-fb8d1efebd05", alt: "פתח לחיות מחמד" },
    { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", alt: "פרופיל בלגי איכותי" },
    { src: "https://images.unsplash.com/photo-1615874959474-d2c27e62d633", alt: "עבודת זכוכית מותאמת אישית" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", alt: "מקלחון מודרני חוזר" },
    { src: "https://images.unsplash.com/photo-1598300053694-cb1ab7e367d9", alt: "שוב תריס חשמלי" },
    { src: "https://images.unsplash.com/photo-1582719478170-590c3f5c465b", alt: "דלת כניסה מזכוכית" },
    { src: "https://images.unsplash.com/photo-1603912957660-fb8d1efebd05", alt: "כניסת חיות בית" },
    { src: "https://images.unsplash.com/photo-1631523216923-9f4f3eab8de1", alt: "זכוכית מחוסמת למקלחת" },
    { src: "https://images.unsplash.com/photo-1615874959474-d2c27e62d633", alt: "שיקוף עיצוב זכוכית" },
    { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be", alt: "מוצר אלומיניום בלגי" },
  ];

  return <Gallery images={imageList1} />;
};

export default Home;
