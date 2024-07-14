import React, { useEffect } from "react";
import styles from "./HeroSection.module.css";
import FadeInSection from "@/saturn/FadeInSection";
import Link from "next/link";

const HeroSection = ({ src }) => {
  useEffect(() => {
    console.log("HERO SECTION:", src);
  }, [src]);

  return (
    <div
      className={styles.heroSection}
      style={{
        backgroundImage: `${src ? `url("${src?.hero_img}")` : ""}`,
      }}
    >
      <FadeInSection className={styles.heroSectionText} delay={1.3}>
        <p>{src ? `${src?.hero_text}` : "Bucurațivă de o experiență unică"}</p>
      </FadeInSection>
      <FadeInSection className={styles.heroSectionBtn} delay={1.6}>
        <Link href="/camere">CAMERE ȘI SUITE</Link>
      </FadeInSection>
    </div>
  );
};

export default HeroSection;
