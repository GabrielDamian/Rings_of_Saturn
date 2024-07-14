import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import FadeInSection from "@/saturn/FadeInSection";
import Link from "next/link";

const HeroSection = ({ src }) => {
  return (
    <div className={styles.heroSection}>
      <FadeInSection className={styles.heroSectionText} delay={1.3}>
        <p>Bucurațivă de o experiență unică</p>
      </FadeInSection>
      <FadeInSection className={styles.heroSectionBtn} delay={1.6}>
        <Link href="/camere">CAMERE ȘI SUITE</Link>
      </FadeInSection>
    </div>
  );
};

export default HeroSection;
