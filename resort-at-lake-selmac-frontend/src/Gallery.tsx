// ImageGallery.tsx
import React, { useState } from 'react';
import './styles/gallery.css';
import { useNavigate } from 'react-router-dom';

// Import images
import image1 from '../src/assets/IMG_3860.jpg';
import image2 from '../src/assets/IMG_4043.jpg';
import image3 from '../src/assets/IMG_4114.jpg';
import image4 from '../src/assets/IMG_4148.jpg';
import image5 from '../src/assets/IMG_4268.jpg';
import image6 from '../src/assets/IMG_4339.jpg';
import image7 from '../src/assets/IMG_4516.jpg';
import image8 from '../src/assets/IMG_4620.jpg';
import image9 from '../src/assets/IMG_4627.jpg';
import image10 from '../src/assets/IMG_4644.jpg';
import image11 from '../src/assets/IMG_4682.jpg';
import image12 from '../src/assets/IMG_4688.jpg';
import image13 from '../src/assets/IMG_4795.jpg';
import image14 from '../src/assets/IMG_4915.jpg';
import image15 from '../src/assets/IMG_4917.jpg';
import image16 from '../src/assets/IMG_4929.jpg';
import image17 from '../src/assets/IMG_4932.jpg';
import image18 from '../src/assets/IMG_5549.jpg';
import image19 from '../src/assets/IMG_5605.jpg';
import image20 from '../src/assets/IMG_5630.jpg';
import image21 from '../src/assets/IMG_5710.jpg';
import image22 from '../src/assets/IMG_5812.jpg';

// Define image type
interface ImageObject {
  original: string;
  thumbnail: string;
}

// Define images array
const images: ImageObject[] = [
  { original: image1, thumbnail: image1 },
  { original: image2, thumbnail: image2 },
  { original: image3, thumbnail: image3 },
  { original: image4, thumbnail: image4 },
  { original: image5, thumbnail: image5 },
  { original: image6, thumbnail: image6 },
  { original: image7, thumbnail: image7 },
  { original: image8, thumbnail: image8 },
  { original: image9, thumbnail: image9 },
  { original: image10, thumbnail: image10 },
  { original: image11, thumbnail: image11 },
  { original: image12, thumbnail: image12 },
  { original: image13, thumbnail: image13 },
  { original: image14, thumbnail: image14 },
  { original: image15, thumbnail: image15 },
  { original: image16, thumbnail: image16 },
  { original: image17, thumbnail: image17 },
  { original: image18, thumbnail: image18 },
  { original: image19, thumbnail: image19 },
  { original: image20, thumbnail: image20 },
  { original: image21, thumbnail: image21 },
  { original: image22, thumbnail: image22 },
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigate = useNavigate();
  const nextImage = (): void => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (): void => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="galleryContainer">
    <div className="gallery-container">
      <button className="nav-button prev" onClick={prevImage}>
        ‹
      </button>
      <img 
        src={images[currentIndex].original} 
        alt={`Slide ${currentIndex + 1}`} 
        className="gallery-image"
      />
      <button className="nav-button next" onClick={nextImage}>
        ›
      </button>
      <div className="indicators">
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    <button className="back-button" onClick={() => navigate('/')}>
    Back to Home
  </button>
  </div>
  );
};

export default Gallery;