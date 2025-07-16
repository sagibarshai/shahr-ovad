import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Glasses: React.FC = () => {
  const imageList1 = Array.from({ length: 6 }, (_, i) => ({
    src: asset(`/images/category-3/${i + 1}.jpg`),
    alt: `תמונה ${i + 1} מתוך קטגוריה 1`,
  }));
  return <Gallery images={imageList1} />;
};

export default Glasses;
