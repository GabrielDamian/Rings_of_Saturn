import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const imgLink =
    "https://plus.unsplash.com/premium_photo-1717529138029-5b049119cfb1?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className={styles.heroSection}>
      <img src={imgLink} alt="test" />
    </div>
  );
};

export default HeroSection;
