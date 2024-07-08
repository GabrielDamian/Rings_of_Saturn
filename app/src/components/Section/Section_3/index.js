import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_3.module.css";

export default function Section_3() {
  const rooms = [
    {
      name: "Krest 1",
      img: "images/section_2_img1.jpg",
      link: "/",
    },
    {
      name: "Krest 2",
      img: "images/section_2_img2.jpg",
      link: "/",
    },
    {
      name: "Krest 2",
      img: "images/section_2_img1.jpg",
      link: "/",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>KREST RELAXING HEIGHTS</h5>
        <h1>Camere și suite</h1>
      </div>
      <div className={styles.content}>
        {rooms.map((el, index) => {
          return (
            <FadeInSection className={styles.item} delay={0.3 * index}>
              <div
                className={styles.core}
                style={{
                  backgroundImage: `url(${el.img})`,
                }}
              >
                <div className={styles.core_deep}>
                  <div className={styles.core_deep_text}>
                    <h3>{el.name}</h3>
                    <a href={`/${el.link}`}>Detalii</a>
                  </div>
                </div>
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
}
