import React, { useState } from "react";
import styled from "styled-components";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface ImageItem {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface Props {
  images: ImageItem[];
}

const GalleryWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
`;

const Grid = styled.div`
  display: grid;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); /* במובייל - 3 בעמודה */
    gap: 12px;
  }

  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* במסך גדול */
  }
`;

const ImageBox = styled.div`
  width: 100%;
  padding-top: 150%; /* ⬅️ גובה יחסי גדול יותר */
  position: relative;
  background-color: #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

const StyledImg = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Gallery: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = useState<number | null>(null);

  const fallbackImage = "/images/fallback.png"; // ⬅️ Fallback image path
  const validSlides = images.filter((img) => !!img.src);
  const openSlideIndex = index !== null && images[index].src ? validSlides.findIndex((v) => v.src === images[index].src) : null;

  return (
    <GalleryWrapper>
      <Grid>
        {images.map((img, i) => (
          <ImageBox key={i} onClick={() => setIndex(i)}>
            <StyledImg src={img.src || fallbackImage} alt={img.alt} width={img.width} height={img.height} loading="lazy" />
          </ImageBox>
        ))}
      </Grid>

      {index !== null && images[index].src && (
        <Lightbox
          open
          index={openSlideIndex ?? 0}
          close={() => setIndex(null)}
          slides={validSlides.map((img) => ({ src: img.src, description: img.alt }))}
          plugins={[Thumbnails, Zoom]}
          zoom={{
            maxZoomPixelRatio: 5,
            zoomInMultiplier: 2,
            doubleTapDelay: 300,
            doubleClickDelay: 300,
            doubleClickMaxStops: 2,
            keyboardMoveDistance: 50,
            wheelZoomDistanceFactor: 100,
            pinchZoomDistanceFactor: 100,
            scrollToZoom: true,
          }}
        />
      )}
    </GalleryWrapper>
  );
};

export default Gallery;
