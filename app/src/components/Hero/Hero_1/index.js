// components/HeroSection.js

import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css"; // Importul fișierului CSS folosind module CSS

const images = [
  "https://plus.unsplash.com/premium_photo-1717529138029-5b049119cfb1?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719937075949-83b1f1ee3e42?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1719825718360-7de63c92135f?q=80&w=1321&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]; // Lista cu adresele imaginilor de fundal

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Indexul imaginii curente

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Interval de 5 secunde între schimbarea slide-urilor

    return () => {
      clearInterval(interval); // Oprim intervalul când componenta este demontată
    };
  }, []); // Efectul se activează doar o singură dată la încărcarea componentei

  return (
    <div className={styles.heroSection}>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className={`${styles.heroSlide} ${index === currentImageIndex ? styles.active : ""}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      ))}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentImageIndex ? styles.dotActive : styles.dot}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
