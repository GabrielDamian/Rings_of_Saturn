import styles from "./Hero_2.module.css";

export default function Hero_2({ title, subTitle }) {
  return (
    <div className={styles.container}>
      <div className={styles.container_layer}>
        <div className={styles.container_core}>
          <h4>{title}</h4>
          <h1>{subTitle}</h1>
        </div>
      </div>
    </div>
  );
}
