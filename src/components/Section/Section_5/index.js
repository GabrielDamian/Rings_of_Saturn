import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_5.module.css";
import Link from "next/link";

export default function Section_5() {
  const rooms = [
    {
      name: "Krest 1",
      desc: "Capacitate maximă de 6 persoane, 2 camere matrimoniale și 2 băi cu duș, canapea extensibilă în zona ...",
      img: "/images/Section_5.jpg",
      features: [
        {
          icon: "/icons/users.png",
          text: "6 persoane",
        },
        {
          icon: "/icons/wi-fi.png",
          text: "Acces gratuit la Internet",
        },
        {
          icon: "/icons/car.png",
          text: "Parcare gratuită",
        },
        {
          icon: "/icons/pawprint.png",
          text: " Permis animale",
        },
      ],
    },
    {
      name: "Krest 1",
      desc: "Capacitate maximă de 6 persoane, 2 camere matrimoniale și 2 băi cu duș, canapea extensibilă în zona ...",
      img: "/images/Section_5.jpg",
      features: [
        {
          icon: "/icons/users.png",
          text: "6 persoane",
        },
        {
          icon: "/icons/wi-fi.png",
          text: "Acces gratuit la Internet",
        },
        {
          icon: "/icons/car.png",
          text: "Parcare gratuită",
        },
        {
          icon: "/icons/pawprint.png",
          text: " Permis animale",
        },
      ],
    },
    {
      name: "Krest 1",
      desc: "Capacitate maximă de 6 persoane, 2 camere matrimoniale și 2 băi cu duș, canapea extensibilă în zona ...",
      img: "/images/Section_5.jpg",
      features: [
        {
          icon: "/icons/users.png",
          text: "6 persoane",
        },
        {
          icon: "/icons/wi-fi.png",
          text: "Acces gratuit la Internet",
        },
        {
          icon: "/icons/car.png",
          text: "Parcare gratuită",
        },
        {
          icon: "/icons/pawprint.png",
          text: " Permis animale",
        },
      ],
    },
  ];
  return (
    <div className={styles.container}>
      {rooms.map((el) => {
        return (
          <FadeInSection className={styles.container_room}>
            <div className={styles.container_room_left}>
              <div className={styles.container_room_left_header}>
                <h2>{el.name}</h2>
                <p>{el.desc}</p>
              </div>
              <div className={styles.container_room_left_facilities}>
                {el.features.map((el_feat) => {
                  return (
                    <div className={styles.container_room_left_facilities_item}>
                      <img src={el_feat.icon} />
                      <p>{el_feat.text}</p>
                    </div>
                  );
                })}
              </div>
              <div className={styles.container_room_left_btn}>
                <Link href="/">Rezeră acum</Link>
              </div>
            </div>
            <div
              className={styles.container_room_right}
              style={{
                backgroundImage: `url(${el.img})`,
              }}
            ></div>
          </FadeInSection>
        );
      })}
    </div>
  );
}
