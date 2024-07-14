import React from "react";
import styles from "./Section_1.module.css";
import FadeInSection from "@/saturn/FadeInSection";
import Link from "next/link";

export default function Section_1({ src }) {
  return (
    <div className={styles.container}>
      <FadeInSection delay={0.3} className={styles.container_left}>
        <div className={styles.container_left_header}>
          <h5>KREST RELAXING HEIGHTS</h5>
        </div>
        <div className={styles.container_left_title}>
          <h2>Bucurați-vă de o experiență unică</h2>
        </div>
        <div className={styles.container_left_text}>
          <p>
            În inima Bucovinei de munte, în Vatra Dornei, înconjurați de natură, însă foarte aproape
            de micile plăceri ale traiului urban, am creat Krest. Relaxing Heights.
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
