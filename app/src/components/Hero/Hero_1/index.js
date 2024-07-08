import React from "react";
import styles from "./HeroSection.module.css";
import FadeInSection from "@/saturn/FadeInSection";

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <FadeInSection className={styles.heroSectionText} delay={1.3}>
        <p>Bucurațivă de o experiență unică</p>
      </FadeInSection>
      <FadeInSection className={styles.heroSectionBtn} delay={1.6}>
        <a href="/">CAMERE ȘI SUITE</a>
      </FadeInSection>
    </div>
  );
};

export default HeroSection;
