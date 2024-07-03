import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    { src: `${process.env.PUBLIC_URL}/image/img1.png`, alt: 'Image 1' },
    { src: `${process.env.PUBLIC_URL}/image/img2.png`, alt: 'Image 2' },
    { src: `${process.env.PUBLIC_URL}/image/img3.png`, alt: 'Image 3' },
    { src: `${process.env.PUBLIC_URL}/image/img1.png`, alt: 'Image 4' },
    { src: `${process.env.PUBLIC_URL}/image/img1.png`, alt: 'Image 1' },
    { src: `${process.env.PUBLIC_URL}/image/img2.png`, alt: 'Image 2' },
    { src: `${process.env.PUBLIC_URL}/image/img3.png`, alt: 'Image 3' },
    { src: `${process.env.PUBLIC_URL}/image/img1.png`, alt: 'Image 4' },
    { src: `${process.env.PUBLIC_URL}/image/img1.png`, alt: 'Image 1' },
    { src: `${process.env.PUBLIC_URL}/image/img2.png`, alt: 'Image 2' },
    { src: `${process.env.PUBLIC_URL}/image/img3.png`, alt: 'Image 3' },
    { src: `${process.env.PUBLIC_URL}/image/img1.png`, alt: 'Image 4' },
    // Add more images as needed
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img
            src={image.src}
            alt={image.alt}
            onClick={() => setSelectedImage(image.src)}
            className="gallery-image"
          />
        </div>
      ))}

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
}

export default Gallery;
