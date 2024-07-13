import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_8.module.css";

export default function Section_8() {
  const items = [
    {
      title: "Vederea panoramica",
      desc: "Cabana are vedere panoramica catre lacul din apropiere, oferind o priveliste impresionanta si relaxanta. Aceasta priveliste poate fi admirata din cadrul cabanei, sau de pe terasa acesteia.",
      img: "/images/Section_8_bg1.jpg",
    },
    {
      title: "Vederea panoramica",
      desc: "Cabana are vedere panoramica catre lacul din apropiere, oferind o priveliste impresionanta si relaxanta. Aceasta priveliste poate fi admirata din cadrul cabanei, sau de pe terasa acesteia.",
      img: "/images/Section_8_bg1.jpg",
    },
    {
      title: "Vederea panoramica",
      desc: "Cabana are vedere panoramica catre lacul din apropiere, oferind o priveliste impresionanta si relaxanta. Aceasta priveliste poate fi admirata din cadrul cabanei, sau de pe terasa acesteia.",
      img: "/images/Section_8_bg1.jpg",
    },
    {
      title: "Vederea panoramica",
      desc: "Cabana are vedere panoramica catre lacul din apropiere, oferind o priveliste impresionanta si relaxanta. Aceasta priveliste poate fi admirata din cadrul cabanei, sau de pe terasa acesteia.",
      img: "/images/Section_8_bg1.jpg",
    },
  ];

  const switchLeftRight = (index, el) => {
    if (index % 2 === 0) {
      return (
        <>
          <div className={styles.item_core_left}>
            <div className={styles.item_core_left_core} style={{ transform: "translateX(80px)" }}>
              <h2>{el.title}</h2>
              <p>{el.desc}</p>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${el.img})`,
            }}
            className={styles.item_core_right}
          ></div>
        </>
      );
    } else {
      return (
        <>
          <div
            style={{ backgroundImage: `url(${el.img})` }}
            className={styles.item_core_right}
          ></div>
          <div className={styles.item_core_left}>
            <div className={styles.item_core_left_core} style={{ transform: "translateX(-80px)" }}>
              <h2 style={{ textAlign: "right" }}>{el.title}</h2>
              <p>{el.desc}</p>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      {items.map((el, index) => {
        return (
          <FadeInSection
            className={styles.item}
            style={{
              marginBottom: `${index === items.length - 1} ? '0px' : '50px'`,
            }}
          >
            <div className={styles.item_core}>{switchLeftRight(index, el)}</div>
          </FadeInSection>
        );
      })}
    </div>
  );
}
