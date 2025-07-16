import Gallery from "../components/gallery";

import { asset } from "../utils/asset";

const Aluminum: React.FC = () => {
  const imageList1 = Array.from({ length: 30 }, (_, i) => ({
    src: asset(`/images/category-2/${i + 1}.jpg`),
    alt: `תמונה ${i + 1} מתוך קטגוריה 1`,
  }));

  return <Gallery images={imageList1} />;
};

export default Aluminum;
