import { useState } from "react";
import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_4.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Section_4({ src }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundImage: `${src ? `url("${src?.parallax_bg_img}")` : ""}`,
        }}
        className={styles.container_top}
      >
        <div className={styles.container_top_core}>
          <div className={styles.container_top_core_header}>
            <h2>Vezi disponibilitatea</h2>
          </div>
          <div className={styles.container_top_cor_form}>
            <div className={styles.container_top_cor_form_input}>
              <DatePicker
                wrapperClassName={styles.customDatePicker}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className={styles.container_top_cor_form_input}>
              <DatePicker
                wrapperClassName={styles.customDatePicker}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
              />
            </div>
            <FadeInSection delay={0.3} className={styles.container_top_cor_form_submit_wrap}>
              <button
                className={styles.container_top_cor_form_submit}
                onClick={() => {
                  let target_platform = src["hero_text"];
                  window.location.href = target_platform;
                }}
              >
                Verifică
              </button>
            </FadeInSection>
          </div>
        </div>
      </div>
      <div className={styles.container_bot}>
        <FadeInSection delay={0.5} className={styles.container_bot_core}>
          <div className={styles.container_bot_core_img}>
            <img src="/icons/phone.png" alt="phone" />
          </div>
          <div className={styles.container_bot_core_text}>
            <p>Rezervare</p>
            <span>{src ? `${src?.phone_number}` : "+40741092762"}</span>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}
