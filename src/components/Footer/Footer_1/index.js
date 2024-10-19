import FadeInSection from "@/saturn/FadeInSection";
import styles from "./Footer_1.module.css";
import Link from "next/link";

export default function Footer_1({ src }) {
  const siteMap = [
    {
      name: "Acasă",
      link: "/",
    },
    {
      name: "Despre noi",
      link: "/",
    },
    {
      name: "Camere",
      link: "/",
    },
    {
      name: "Galerie",
      link: "/",
    },
  ];

  const social = [
    {
      icon: "/icons/facebook.png",
      link: "https://www.facebook.com",
      title: "Facebook",
    },
    {
      icon: "/icons/instagram.png",
      link: "https://www.instagram.com",
      title: "Instagram",
    },
    {
      icon: "/icons/youtube.png",
      link: "https://www.youtube.com",
      title: "YouTube",
    },
  ];
  return (
    <div className={styles.container}>
      <FadeInSection delay={0.3} className={styles.container_left}>
        <h2></h2>
        <h2>{src ? `${src?.website_name}` : "Căsuța mea"}</h2>
        <p>Bucurați-vă de o experiență unică</p>
        <div className={styles.social}>
          {social.map((el, index) => {
            return (
              <Link href={el.link} key={index}>
                <img src={el.icon} alt="social" title={el.title} />
              </Link>
            );
          })}
        </div>
      </FadeInSection>
      <FadeInSection delay={0.6} className={styles.container_right}>
        <div className={styles.container_right_map}>
          <h2>Explorează</h2>
          {siteMap.map((el, index) => {
            return (
              <Link href={el["link"]} key={index}>
                {el["name"]}
              </Link>
            );
          })}
        </div>
        <div className={styles.container_right_about}>
          <h2>Contact</h2>
          <p>{src ? `${src?.address}` : "Str Telefericului, nr 12"}</p>
          <p>{src ? `${src?.phone_number}` : "+406127123"}</p>
          <p>{src ? `${src?.email}` : "test@gmail.com"}</p>
        </div>
      </FadeInSection>
    </div>
  );
}
