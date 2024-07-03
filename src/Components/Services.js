import React, { useEffect } from 'react';
import './Services.css';

function Services() {
  useEffect(() => {
    const scrollImages = document.querySelectorAll('.scroll-image');
    let index = 0;

    function scroll() {
      scrollImages[index].classList.remove('visible');
      index = (index + 1) % scrollImages.length;
      scrollImages[index].classList.add('visible');
    }

    const interval = setInterval(scroll, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <p>Details about the services offered...</p>
      <div className="scroll-container">
        <img src={`${process.env.PUBLIC_URL}/image/img1.png`} alt="Service 1" className="scroll-image visible" />
        <img src={`${process.env.PUBLIC_URL}/image/img3.png`} alt="Service 2" className="scroll-image" />
        <img src={`${process.env.PUBLIC_URL}/image/img2.png`} alt="Service 3" className="scroll-image" />
        {/* Add more images as needed */}
      </div>
    </div>
  );
}

export default Services;
