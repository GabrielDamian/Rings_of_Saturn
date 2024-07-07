import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionText}>
        <p>Bucurațivă de o experiență unică</p>
      </div>
      <div className={styles.heroSectionBtn}>
        <a href="/">CAMERE ȘI SUITE</a>
      </div>
    </div>
  );
};

export default HeroSection;
