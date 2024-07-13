import React from "react";
import styles from "./Section_1.module.css";
import FadeInSection from "@/saturn/FadeInSection";
import Link from "next/link";

export default function Section_1() {
  return (
    <div className={styles.container}>
      <FadeInSection
        delay={0.3}
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
      <FadeInSection
        delay={0.6}
        style={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div className={styles.container_right_first}></div>
        <div className={styles.container_right_second}></div>
      </FadeInSection>
    </div>
  );
}
