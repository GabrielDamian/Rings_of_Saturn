import React from "react";
import styles from "./Section_1.module.css";
import FadeInSection from "@/saturn/FadeInSection";
import Link from "next/link";

export default function Section_1({ src }) {
  return (
    <div className={styles.container}>
      <FadeInSection delay={0.3} className={styles.container_left}>
        <div className={styles.container_left_header}>
          <h5>{src ? `${src?.website_name}` : "Casuța Mea"}</h5>
        </div>
        <div className={styles.container_left_title}>
          <h2>Bucurați-vă de o experiență unică</h2>
        </div>
        <div className={styles.container_left_text}>
          <p>
            Înconjurată de peisaje montane impresionante, pensiunea noastră este locul ideal pentru
            a te retrage departe de agitația cotidiană. Aici, natura este la ea acasă, iar tu poți
            să te bucuri de liniștea oferită de munți și de aerul proaspăt.
          </p>
        </div>
        <div className={styles.container_left_action}>
          <div className={styles.container_left_action_left}>
            <div className={styles.container_left_action_left_img}>
              <img src="/icons/phone.png" alt="phone" />
            </div>
            <div className={styles.container_left_action_left_text}>
              <p>Rezervare</p>
              <span>+40741092762</span>
            </div>
          </div>
          <div className={styles.container_left_action_right}>
            <Link href="/camere">Vezi mai mult {">>"}</Link>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection delay={0.6} className={styles.container_right}>
        <div
          style={{
            backgroundImage: `${src ? `url("${src?.section_2_img_1}")` : ""}`,
          }}
          className={styles.container_right_first}
        ></div>
        <div
          style={{
            backgroundImage: `${src ? `url("${src?.section_2_img_2}")` : ""}`,
          }}
          className={styles.container_right_second}
        ></div>
      </FadeInSection>
    </div>
  );
}
