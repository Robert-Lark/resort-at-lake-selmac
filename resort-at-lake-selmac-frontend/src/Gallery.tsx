import React from 'react';
import '../src/styles/gallery.css';
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import image1 from '../src/assets/IMG_3860.jpg'
import image2 from '../src/assets/IMG_4043.jpg'
import image3 from '../src/assets/IMG_4114.jpg'
import image4 from '../src/assets/IMG_4148.jpg'
import image5 from '../src/assets/IMG_4268.jpg'
import image6 from '../src/assets/IMG_4339.jpg'
import image7 from '../src/assets/IMG_4516.jpg'
import image8 from '../src/assets/IMG_4620.jpg'
import image9 from '../src/assets/IMG_4627.jpg'
import image10 from '../src/assets/IMG_4644.jpg'
import image11 from '../src/assets/IMG_4682.jpg'
import image12 from '../src/assets/IMG_4688.jpg'
import image13 from '../src/assets/IMG_4795.jpg'
import image14 from '../src/assets/IMG_4915.jpg'
import image15 from '../src/assets/IMG_4917.jpg'
import image16 from '../src/assets/IMG_4929.jpg'
import image17 from '../src/assets/IMG_4932.jpg'
import image18 from '../src/assets/IMG_5549.jpg'
import image19 from '../src/assets/IMG_5605.jpg'
import image20 from '../src/assets/IMG_5630.jpg'
import image21 from '../src/assets/IMG_5710.jpg'
import image22 from '../src/assets/IMG_5812.jpg'

const images = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },
    {
      original: image8,
      thumbnail: image8,
    },
    {
      original: image9,
      thumbnail: image9,
    },
    {
      original: image10,
      thumbnail: image10,
    },
    {
      original: image11,
      thumbnail: image11,
    },
    {
      original: image12,
      thumbnail: image12,
    },
    {
      original: image13,
      thumbnail: image13,
    },
    {
      original: image14,
      thumbnail: image14,
    },
    {
      original: image15,
      thumbnail: image15,
    },
    {
      original: image16,
      thumbnail: image16,
    },
    {
      original: image17,
      thumbnail: image17,
    },
    {
      original: image18,
      thumbnail: image18,
    },
    {
      original: image19,
      thumbnail: image19,
    },
    {
      original: image19,
      thumbnail: image19,
    },
    {
      original: image20,
      thumbnail: image20,
    },
    {
      original: image21,
      thumbnail: image21,
    },
    {
      original: image22,
      thumbnail: image22,
    },
  ];

function Gallery() {
    return (
        <div className="gallery" id='gallery'>
            <ImageGallery items={images} />
        </div>
    );
}

export default Gallery;