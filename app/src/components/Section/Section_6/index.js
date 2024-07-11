import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Section_6.module.css";

export default function Section_6() {
  const items = [
    {
      name: "Rezervare",
      value: "+40741092762",
      icon: "/icons/phone.png",
    },
    {
      name: "Email",
      value: "stay@krest.ro",
      icon: "/icons/mail.png",
    },
    {
      name: "Adresa",
      value: "Str Telefericului, nr 12 <br/>Vatra Dornei, Suceava",
      icon: "/icons/map.png",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.container_left}>
        <div className={styles.container_left_head}>
          <h2>Krest Relaxing Heights</h2>
        </div>
        <div className={styles.container_left_content}>
          {items.map((el, index) => {
            return (
              <FadeInSection className={styles.item} delay={0.5 * index}>
                <div className={styles.item_img}>
                  <img src={el.icon} alt="icon" />
                </div>
                <div className={styles.item_data}>
                  <p>{el.name}</p>
                  <h3>{el.value}</h3>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
      <FadeInSection className={styles.container_right} delay={1}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2043.207900740971!2d27.588459601374087!3d47.156464105389546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1720658284186!5m2!1sro!2sro"
          width="600"
          height="450"
          style={{
            filter: "invert(90%)",
            border: "0px",
            width: "100%",
            height: "100%",
            borderRadius: "15px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </FadeInSection>
    </div>
  );
}
