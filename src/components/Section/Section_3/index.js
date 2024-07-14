import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_3.module.css";
import Link from "next/link";

export default function Section_3({ src }) {
  const generateRooms = (srcParam) => {
    const rooms = [
      {
        name: src ? `${src?.room_1_name}` : "Krest 1",
        img: src ? `${src?.room_1_img}` : "images/section_2_img1.jpg",
        link: "/",
      },
      {
        name: src ? `${src?.room_2_name}` : "Krest 2",
        img: src ? `${src?.room_2_img}` : "images/section_2_img2.jpg",
        link: "/",
      },
      {
        name: src ? `${src?.room_3_name}` : "Krest 3",
        img: src ? `${src?.room_3_img}` : "images/section_2_img3.jpg",
        link: "/",
      },
    ];
    return rooms;
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>KREST RELAXING HEIGHTS</h5>
        <h3>Camere și suite</h3>
      </div>
      <div className={styles.content}>
        {generateRooms(src).map((el, index) => {
          return (
            <FadeInSection className={styles.item} delay={0.3 * index} key={index}>
              <div
                className={styles.core}
                style={{
                  backgroundImage: `url(${el.img})`,
                }}
              >
                <div className={styles.core_deep}>
                  <div className={styles.core_deep_text}>
                    <h3>{el.name}</h3>
                    <Link href={`/${el.link}`}>Detalii</Link>
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
