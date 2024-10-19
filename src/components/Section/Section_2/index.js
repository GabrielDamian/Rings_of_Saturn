import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_2.module.css";

export default function Section_2() {
  const facilities = [
    {
      icon: "/icons/car.png",
      title: "Parcare gratuită",
    },
    {
      icon: "/icons/smoke.png",
      title: "Zonă pentru fumători",
    },
    {
      icon: "/icons/pawprint.png",
      title: "Permis animale",
    },
    {
      icon: "/icons/sauna.png",
      title: "Saună",
    },
    {
      icon: "/icons/spa.png",
      title: "Spa",
    },
    {
      icon: "/icons/lounge.png",
      title: "Bar",
    },
    {
      icon: "/icons/jacuzzi.png",
      title: "Jacuzzi",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h5>Serviciile noastre</h5>
        <h1>Facilități hotel</h1>
      </div>
      <div className={styles.content}>
        {facilities.map((el, index) => {
          return (
            <FadeInSection className={styles.item} delay={0.2 * index} key={index}>
              <img src={el.icon} />
              <p>{el.title}</p>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
}
